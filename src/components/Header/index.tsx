import {Github, Linkedin, Mail } from 'lucide-react'
import style from './styles.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {

    const [activeLink, setActiveLink] = useState('home');

    function handleActiveLink (name: string) {
        console.log(name)
        setActiveLink(name);
    }

    return(
        <>
            <header className={style.header}>
                <Link to={`/`}>
                    <h1>AB</h1>
                </Link>
                <div className={style.sections}>
                    <Link to={`/`} onClick={() => {handleActiveLink('home')}}>
                    <span className={activeLink == 'home' ? style.home : ''}>Home</span>
                    </Link>
                    <Link to={`/about`} onClick={() => {handleActiveLink('about')}}>
                    <span className={activeLink == 'about' ? style.home : ''}>About</span>
                    </Link>
                    <Link to={`/`} onClick={() => {handleActiveLink('projects')}}>
                    <span className={activeLink == 'projects' ? style.home : ''}>Projects</span>
                    </Link>
                </div>
                <div className={style.icons}>
                    <Link to={`https://github.com/alexbruno10`} target="_blank">
                        <span className={style.github}><Github size={20}/></span>
                    </Link>
                    <Link to={`https://www.linkedin.com/in/alexbruno10/`} target="_blank">
                        <span className={style.linkedin}><Linkedin size={20} /></span>
                    </Link>
                    <Link to={`mailto:alexbruno1298@gmail.com`} target="_blank">
                        <span className={style.mail}><Mail size={20} /></span>
                    </Link>  
                </div>
            </header>
        </>
    )
};
