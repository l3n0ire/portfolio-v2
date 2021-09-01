import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav/Nav";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Project from "../components/Project/Project";
import Skills from "../components/Skills/Skills";
import data from "../data/data";

export default function Home() {
    let experiences = data.experiences.map((experience) => {
        return <Experience key={experience.title} {...experience} />;
    });
    let projects = data.projects.map((project) => {
        return <Project key={project.title} {...project} />;
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
                    <h1 className={styles.sectionTitle}>Experience</h1>
                    {experiences}
                </div>
                <div id="education" className="min-h-screen">
                    <hr />
                    <h1 className={styles.sectionTitle}>Education</h1>
                    <Education />
                </div>
                <div id="projects" className="min-h-screen">
                    <hr />
                    <h1 className={styles.sectionTitle}>Projects</h1>
                    <div className=" lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-12">
                        {projects}
                    </div>
                </div>
                <div id="skills" className="min-h-screen">
                    <hr />
                    <h1 className={styles.sectionTitle}>Skills</h1>
                    <Skills {...data.skills} />
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
