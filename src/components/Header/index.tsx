import {Github, Linkedin, Mail } from 'lucide-react'
import style from './styles.module.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {


    return(
        <>
            <header className={style.header}>
                <Link to={`/`}>
                    <h1>AB</h1>
                </Link>
                <div className={style.sections}>
                    <NavLink to={`/`} className={({ isActive }) => (isActive ? style.home : '')}>
                        Início
                    </NavLink>
                    <NavLink to={`/about`} className={({ isActive }) => (isActive ? style.about : '')}>
                        Sobre
                    </NavLink>
                    <NavLink to={`/projects`} className={({ isActive }) => (isActive ? style.projects : '')}>
                        Projetos
                    </NavLink>
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
