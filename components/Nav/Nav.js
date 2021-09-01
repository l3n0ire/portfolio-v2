import styles from "./Nav.module.css";
import Image from "next/image";
import profilePic from "../../public/images/profilePic.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Scrollspy from "react-scrollspy";

function Nav() {
    const [isHidden, setIsHidden] = useState(true);
    const [windowDimensions, setWindowDimensions] = useState({});

    useEffect(() => {
        function handleResize() {
            let { innerWidth: width, innerHeight: height } = window;
            setWindowDimensions({ width, height });
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        setIsHidden(true);
    };

    return (
        <nav className="bg-gray-700  text-blue-100 p-4 text-center fixed lg:static w-full lg:w-64 lg:block">
            <div className="lg:mt-48 lg:w-56 flex flex-wrap justify-center lg:fixed">
                <div className="hidden lg:block">
                    <Image
                        src={profilePic}
                        alt="picture of colin"
                        className="rounded-full"
                        width={130}
                        height={130}
                    />
                </div>
                <div className="block lg:hidden w-full">
                    <button
                        className="float-right"
                        onClick={() => setIsHidden(!isHidden)}
                    >
                        <FontAwesomeIcon
                            className="w-5 hover:text-white "
                            icon={faBars}
                        />
                    </button>
                </div>
                <div
                    className="w-full"
                    style={{
                        display:
                            isHidden && windowDimensions.width < 1024
                                ? "none"
                                : "block",
                    }}
                >
                    <Scrollspy
                        items={[
                            "about",
                            "experience",
                            "education",
                            "projects",
                            "skills",
                        ]}
                        currentClassName="font-bold mt-5 block text-white "
                    >
                        <li><a className={styles.navLink}
                            href="#about"
                            onClick={handleClick}
                        >
                            About
                        </a></li>

                        <li><a
                            href="#experience"
                            className={styles.navLink}
                            onClick={handleClick}
                        >
                            Experience
                        </a></li>

                        <li><a
                            href="#education"
                            className={styles.navLink}
                            onClick={handleClick}
                        >
                            Education
                        </a></li>

                        <li><a
                            href="#projects"
                            className={styles.navLink}
                            onClick={handleClick}
                        >
                            Projects
                        </a></li>

                        <li><a
                            href="#skills"
                            className={styles.navLink}
                            onClick={handleClick}
                        >
                            Skills
                        </a></li>
                   </Scrollspy>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
