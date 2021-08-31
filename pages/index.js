import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
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
            <main className="flex-1  lg:py-0 px-7 md:px-16 flex-col">
                <About />
                <div id="experience" className="min-h-screen">
                    <hr />
                    <h1 className={styles.sectionTitle}>
                        Experience
                    </h1>
                    {experiences}
                </div>
                <div id="education" className="min-h-screen">
                    <hr />
                    <h1 className={styles.sectionTitle}>
                        Education
                    </h1>
                    <Education />
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
