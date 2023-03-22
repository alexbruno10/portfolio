import styles from './styles.module.scss'

export default function About() {
    return(
        <>
            <section className={styles.content}>
            <div className={styles.contentTitle}>
                <h1>About me</h1>
            </div>
                <div className={styles.contentAbout}>
                    <div className={styles.contentParagraph}>
                        <p>Hello! My name is Alex Bruno, i´m 24 years old!</p>
                        <p>Passionate about technology, games and football, always looking to update myself.</p>
                        <p>I´m currently a full stack developer at Sicoob Credivar, since 2020, working on several large-scale and complex projects.</p>
                    </div>
                    <img src="https://avatars.githubusercontent.com/u/57117620?v=4" alt="" />
                </div>
            </section>
        </>
    )
};
