import styles from "./Nav.module.css";
import Image from "next/image";
import profilePic from "../../public/profilePic.jpg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

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

    return (
        <nav className="bg-gray-700 lg:w-64 text-blue-100 p-4 text-center">
            <div className="lg:mt-48 flex flex-wrap justify-center lg:fixed">
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
                    <Link href="#about">
                        <a className={styles.section}>About</a>
                    </Link>
                    <Link href="#experience">
                        <a className={styles.section}>Experience</a>
                    </Link>
                    <Link href="#education">
                        <a className={styles.section}>Education</a>
                    </Link>
                    <Link href="#projects">
                        <a className={styles.section}>Projects</a>
                    </Link>
                    <Link href="#skills">
                        <a className={styles.section}>Skills</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Nav;
