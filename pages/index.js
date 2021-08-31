import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import data from "../data/data";

export default function Home() {
    let experiences = data.experiences.map((experience, index) => {
        return <Experience key={index} {...experience} />;
    });
    return (
        <div className="relative min-h-screen lg:flex">
            <Head>
                <title>Colin Lin</title>
                <meta name="description" content="Colin Lin's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className="flex-1 px-7 md:px-16">
                <About />
                <div id="experience">
                    <hr />
                    <h1 className="text-5xl font-semibold py-8 lg:py-12">
                        Experience
                    </h1>
                    {experiences}
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
