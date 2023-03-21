import {Github, Linkedin, Mail } from 'lucide-react'
import style from './styles.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface ActiveLink {
    class: string,
}


export default function Header() {

    const [activeLink, setActiveLink] = useState<ActiveLink>({class: 'home'});

    function handleActiveLink (name: string) {
        console.log(name)
        setActiveLink(name);
        console.log(activeLink)
    }

    return(
        <>
            <header className={style.header}>
                <Link to={`/`}>
                    <h1>AB</h1>
                </Link>
                <div className={style.sections}>
                    <Link to={`/`}>
                    Home
                    </Link>
                    <Link className={style.active} to={`/sobre`} onClick={() => handleActiveLink('sobre')}>
                    Sobre
                    </Link>
                    <Link to={`/`}>
                    Projetos
                    </Link>
                </div>
                <div className={style.icons}>
                    <Link to={`https://github.com/alexbruno10`} target="_blank">
                        <span className={style.github}><Github size={20}/></span>
                    </Link>
                    <Link to={`https://www.linkedin.com/in/alexbruno10/`}>
                        <span className={style.linkedin}><Linkedin size={20} target="_blank"/></span>
                    </Link>
                    <Link to={`mailto:alexbruno1298@gmail.com`}>
                        <span className={style.mail}><Mail size={20} target="_blank"/></span>
                    </Link>  
                </div>
            </header>
        </>
    )
};
