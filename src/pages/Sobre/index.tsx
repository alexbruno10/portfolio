import styles from './styles.module.scss'
import React from '/public/icons/React.svg'
import Skills from '../../../skills.json'
import Highlight from 'react-highlight'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function About() {

    
    

    return(
        <>
            <section className={styles.content}>
                <section className={styles.contentDescription}>
                    <div className={styles.contentTitle}>
                        <h1>Sobre mim</h1>
                    </div>
                    <div className={styles.contentAbout}>
                        <div className={styles.contentParagraph}>
                            <p>🤙🏻 Me chamo <span>Alex Bruno Neri Humberto</span>, tenho 24 anos!</p>
                            <p>🎓 Graduado em <span>Ciência da Computação</span>.</p>
                            <p>💻 <span>Desenvolvedor Full Stack</span> com experiência em HTML, CSS, SASS, Styled-Components, JavaScript, TypeScript, React JS, PHP, Laravel e Banco de Dados SQL e NoSQL.</p>
                            <p>🚀 <span>Desenvolvedor Full Stack</span></p>
                        </div>
                        <img src="https://avatars.githubusercontent.com/u/57117620?v=4" alt="" />
                    </div>
                </section>
                <section className={styles.carrer}>
                    <div className={styles.carrerTitle}>
                        <h1>Carreira</h1>
                    </div>
                    <div className={styles.contentCarrer}>
                        <div className={styles.contentCarrerDetails}>
                            <span><strong>Desenvolvedor Full Stack</strong></span>
                            <p>Sicoob Credivar - Analista de T.I </p>
                            <p>Novembro 2020 - Presente</p>
                        </div>
                        <div className={styles.contentCarrerDetails}>
                            <span>Estágio</span>
                            <p>Sicoob Credivar</p>
                            <p>Março 2019 - Novembro 2020</p>
                        </div>
                        <div className={styles.contentCarrerDetails}>
                            <span>Auxiliar Administrativo</span>
                            <p>Pedras Decorativas Líder</p>
                            <p>Agosto 2017 - Fevereiro 2019</p>
                        </div>
                    </div>
                    

                    {/* Terminal com skills */}
                    {/* <div className={styles.contentIcons}>
                        <div className={styles.contentTerminal}>
                            <code>
                            <div className={styles.contentTerminalHeader}>
                                <div className={styles.contentTerminalButtons}>
                                    <span id='close' className={styles.close}></span>
                                    <span className={styles.minimaze}></span>
                                    <span className={styles.full}></span>
                                </div>
                                <p>alexbruno.dev</p>
                            </div>
                            <SyntaxHighlighter language="javascript" style={atomDark}>
                            {JSON.stringify(Skills, null, 1) }
                            </SyntaxHighlighter>
                            </code>
                            
                        </div>
                    </div> */}
                </section>
            </section>
        </>
    )
};
