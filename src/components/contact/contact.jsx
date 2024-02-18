import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h1 className="aboutTitle">Contact</h1>
            <div className="contactInfo">
                <h4>
                Hello! I'm a programming enthusiast, a music lover, and a football enthusiast. Currently, I'm on my journey as a developer and student, with two years of experience in the mgCode team and in the fifth semester of the Information Systems college at UFLA. If you're looking to discuss ideas about the programming world, share musical insights, or debate about the latest happenings in the football world, I'm here! Feel free to contact me through my social media below!
                </h4>
            </div>
            <div className="socialIcons">
                <div className='icons'>
                <ion-icon className="iconInstagram" name="logo-instagram"></ion-icon>
                <ion-icon className="iconLinkedin" name="logo-linkedin"></ion-icon>
                <ion-icon className="iconGithub" name="logo-github"></ion-icon>
                </div>
                <h5>©️ copyright 2024</h5>
                <h6 className='ldeopdev'>&lt;LdeopDev/&gt;</h6>
            </div>
        </div>
    );
}

export default Contact;
