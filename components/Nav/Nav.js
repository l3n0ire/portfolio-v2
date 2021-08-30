import styles from "./Nav.module.css";
import Image from "next/image";
import profilePic from "../../public/profilePic.jpg";
import Link from "next/link";
function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navBody}>
                <Image
                    src={profilePic}
                    alt="picture of colin"
                    className={styles.profilePic}
                    width={130}
                    height={130}
                />
                <br />
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
        </nav>
    );
}
export default Nav;
