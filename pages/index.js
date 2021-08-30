import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import About from "../components/About/About";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Colin Lin</title>
                <meta name="description" content="Colin Lin's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className={styles.main}>
                <h1 className={styles.title}>My Portfolio</h1>
                <About />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
