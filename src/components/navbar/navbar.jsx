import React from 'react';
import './navbar.css';

export default function Navbar() {

    return (
        <header className="bg-white">
            <a href="#" className="logo">
                <img src="logoL4.png" alt="logo" />
            </a>
            <nav className="navbar">
                <div className="openMenu">
                    <ion-icon size="large" name="menu-outline" class="icon"></ion-icon>
                </div>
                <ul className="mainMenu">
                    <li className="nav-item"><a href="#skills"><span class="num-nav"></span>Skills</a></li>
                    <li className="nav-item"><a href="#projects"><span class="num-nav"></span>Projects</a></li>
                    <li className="nav-item"><a href="#contact"><span class="num-nav"></span>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}