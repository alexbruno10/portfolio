import styles from './styles.module.scss'
import { ChevronsRight } from 'lucide-react'

export default function Home() {
    return(
        <div className={styles.content}>
            <div>
                <span>Hello there, welcome to my site</span>
                <h1>I´m <span className={styles.name}>Alex Bruno Neri Humberto</span></h1>
                <h2>Full Stack Developer</h2>
                <span className={styles.aboutMe}>About me <ChevronsRight /></span>
            </div>
        </div>
    )
};
