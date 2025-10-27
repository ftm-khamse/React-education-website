import type { ReactNode } from "react";
import styles from "./Header.module.css"
import Button from "../Button/Button";
import { Link } from "react-router";

export default function Header():ReactNode{
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Learn.</h1>
            <nav className={styles.navbar}>
                <Link to="#about">about</Link>
                <Link to="#contact">contact</Link>
                <Link to="#services">services</Link>
                <Link to="#courses">courses</Link>
            </nav>
            <Button>sign in</Button>
        </header>
    );
}