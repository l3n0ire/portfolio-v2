import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function About() {
    return (
        <section className="h-screen">
            <div id="about" className=" pt-7 lg:pt-60 text-md lg:text-lg">
                <h1 className="text-6xl lg:text-8xl font-bold">
                    Colin <span className="text-blue-800"> Lin</span>
                </h1>
                <p className="text-xl lg:text-2xl font-bold mt-1">
                    Software Engineer
                </p>
                <p className="text-lg lg:text-xl font-medium mt-1">
                    Computer Science Co-op at University of Toronto
                </p>
                <p>
                    <span className="mr-1">Toronto ON |</span>
                    <span className="mr-1">(647) 470-9183 |</span>
                    <a
                        href="mailto:colin.lin@mail.utoronto.ca"
                        className=" text-blue-800 font-semibold hover:text-blue-400"
                    >
                        colin.lin@mail.utoronto.ca
                    </a>
                </p>
                <p className="mt-7 text-gray-600">
                    I&apos;m an aspiring software developer with experience in
                    both frontend UX design and backend API development.
                    <br /> I describe myself as someone who is ambitious, a
                    quick learner, and has a passion for developing software
                    with a positive social impact.
                </p>
                <a
                    href="./resume.pdf"
                    rel="noreferrer"
                    target="_blank"
                    className=" block mt-7 text-blue-800 font-semibold hover:text-blue-400"
                >
                    Resume PDF
                </a>
                <div className="mt-7">
                    <a
                        href="https://github.com/l3n0ire"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className=" w-10 mr-5 inline-block hover:text-gray-500"
                            icon={faGithub}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/colin-lin-2001/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            className="w-10 inline-block hover:text-blue-600"
                            icon={faLinkedin}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
export default About;
