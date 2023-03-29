import styles from './styles.module.scss'
import { ChevronsRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div className={styles.content}>
            <div>
                <span>Olá, bem-vindo ao meu site!</span>
                <h1>Eu sou <span className={styles.name}>Alex Bruno Neri Humberto</span></h1>
                <h2>Desenvolvedor Full Stack</h2>
                <Link to={`/about`}>
                    <span className={styles.aboutMe}>Sobre mim <ChevronsRight /></span>
                </Link>
            </div>
        </div>
    )
};
