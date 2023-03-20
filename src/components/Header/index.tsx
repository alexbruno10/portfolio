import {Github, Linkedin, Mail } from 'lucide-react'
import style from './styles.module.scss'

export default function Header() {
    return(
        <>
            <header className={style.header}>
                <h1>AB</h1>
                <div className={style.sections}>
                    <a href="">Home</a>
                    <a href="">Sobre</a>
                    <a href="">Skills</a>
                    <a href="">Projetos</a>
                </div>
                <div className={style.sections}>
                    <Github color='var(--white)' size={20}/>
                    <Linkedin color='var(--white)' size={20} />
                    <Mail color='var(--white)' size={20}/>
                </div>
            </header>
        </>
    )
};
