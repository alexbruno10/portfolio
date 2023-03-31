import styles from './styles.module.scss'
import React from '/public/icons/React.svg'
import Skills from '../../../skills.json'
import Highlight from 'react-highlight'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

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
                            <p>🚀 Sempre buscando a <span>evolução</span>!</p>
                        </div>
                        <img src="https://avatars.githubusercontent.com/u/57117620?v=4" alt="" />
                    </div>
                </section>
                <section className={styles.skills}>
                    <div className={styles.skillsTitle}>
                        <h1>Tecnologias e habilidades</h1>
                    </div>
                    <div className={styles.icons}>
                        <img src="/public/icons/React.svg" alt="" />
                        <img src="/public/icons/Javascript.svg" alt="" />
                        <img src="/public/icons/TypeScript.svg" alt="" />
                        <img src="/public/icons/Nextjs.svg" alt="" />
                        <img src="/public/icons/SASS.svg" alt="" />
                        <img src="/public/icons/Styled-component.svg" alt="" />
                        <img src="/public/icons/Nodejs.svg" alt="" />
                        <img src="/public/icons/PHP.svg" alt="" />
                        <img src="/public/icons/Laravel.svg" alt="" />
                        <img src="/public/icons/Figma.svg" alt="" />
                        <img src="/public/icons/Git.svg" alt="" />
                        <img src="/public/icons/Mysql.svg" alt="" />
                        <img src="/public/icons/Postgresql.svg" alt="" />
                        <img src="/public/icons/Mongo.svg" alt="" />
                    </div>
                </section>
                <section className={styles.carrer}>
                    <div className={styles.carrerTitle}>
                        <h1>Carreira</h1>
                    </div>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'var(--gray-700)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  var(--gray-700)' }}
                            date="Novembro 2020 - Presente"
                            iconStyle={{ background: 'var(--red-100)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Desenvolvedor Full Stack</h3>
                            <h4 className="vertical-timeline-element-subtitle">Sicoob Credivar</h4>
                            <p>
                            Desenvolvimento de sistemas com foco no resultado, associado e segurança. 
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'var(--gray-700)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  var(--gray-700)' }}
                            date="Março 2019 - Novembro 2020"
                            iconStyle={{ background: 'var(--red-100)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Estágio</h3>
                            <h4 className="vertical-timeline-element-subtitle">Sicoob Credivar</h4>
                            <p>
                            Suporte de TI e redes.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'var(--gray-700)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  var(--gray-700)' }}
                            date="Agosto 2017 - Fevereiro 2019"
                            iconStyle={{ background: 'var(--red-100)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Auxíliar Administrativo</h3>
                            <h4 className="vertical-timeline-element-subtitle">Pedras Decorativas Líder</h4>
                            <p>
                            Vendas, notas fiscais e controle de pedidos.
                            </p>
                        </VerticalTimelineElement>

                        
                        </VerticalTimeline>

                </section>

            </section>
        </>
    )
};
