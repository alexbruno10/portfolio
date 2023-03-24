import styles from './styles.module.scss'
import React from '/public/icons/React.svg'
import Skills from '../../../skills.json'
import Highlight from 'react-highlight'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function About() {

    
    

    return(
        <>
            <section className={styles.content}>
                <section className={styles.contentDescription}>
                    <div className={styles.contentTitle}>
                        <h1>About me</h1>
                    </div>
                    <div className={styles.contentAbout}>
                        <div className={styles.contentParagraph}>
                            <p>🤙🏻 Hello! My name is <span>Alex Bruno Neri Humberto</span>, i´m 24 years old!</p>
                            <p>🎓 Graduated in <span>Computer Science</span>.</p>
                            <p>💻 <span>Full Stack Developer</span> since 2020.</p>
                        </div>
                        <img src="https://avatars.githubusercontent.com/u/57117620?v=4" alt="" />
                    </div>
                </section>
                <section className={styles.contentSkills}>
                    <div className={styles.contentTitle}>
                        <h1>Skills</h1>
                    </div>
                    <div className={styles.contentIcons}>
                        {/* <div className={styles.grid}>
                            <div className={styles.item}>
                                <img src="/public/vite.svg" alt="" />
                            </div>
                        </div> */}
                        <div className={styles.contentTerminal}>
                            <pre>
                            <code>
                            <SyntaxHighlighter language="javascript" style={dracula}>
                            {JSON.stringify(Skills, null, 3) }
                            </SyntaxHighlighter>
                            </code>
                            </pre>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
};
