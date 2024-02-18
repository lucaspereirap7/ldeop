import React, { useState, useEffect } from 'react';
import Skills from '../aboutMe/skills';
import './home.css';

const Home = () => {
    const [typedText, setTypedText] = useState('');
    const textsToType = ["Lucas", "Luquinha", "Luket", "As you wish..."];
    const typingSpeed = 60;
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = textsToType[currentTextIndex];
        let currentIndex = typedText.length;

        const interval = setInterval(() => {
            if (!isDeleting) {
                if (currentIndex <= currentText.length) {
                    setTypedText(currentText.substring(0, currentIndex));
                    currentIndex++;
                } else {
                    setIsDeleting(true);
                    currentIndex--;
                }
            } else {
                if (currentIndex >= 0) {
                    setTypedText(currentText.substring(0, currentIndex));
                    currentIndex--;
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textsToType.length);
                }
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, [typedText, isDeleting, currentTextIndex, textsToType, typingSpeed]);


    return (
        <div className="home">
            <a href="#" className="logo">
                <img src="logoL4.png" className='slide-in-blurred-top' alt="logo" />
            </a>
            <p className='textHome'>Hello, nice to meet you!</p>
            <p className='textHome'>
                You can call me: {typedText}
                {isDeleting && <span className="blinking-cursor">|</span>}
                {!isDeleting && <span className="blinking-cursor">|</span>}
            </p>
        </div>
    );
}

export default Home;
