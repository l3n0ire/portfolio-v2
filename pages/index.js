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
            <main className="flex-1 p-10 px-16">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <About />
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
