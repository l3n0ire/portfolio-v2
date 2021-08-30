import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import About from "../components/About/About";

export default function Home() {
    return (
        <div className="relative min-h-screen lg:flex">
            <Head>
                <title>Colin Lin</title>
                <meta name="description" content="Colin Lin's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className="flex-1 p-7 px-7 md:px-16">
                <About />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
