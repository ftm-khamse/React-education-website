import type { ReactNode } from "react";
import styles from "./Footer.module.css"

export default function Footer():ReactNode{
    return (
    <footer className={styles.footer}>
        <p className={styles.content}>
            Developed By Fvf-khamseh &copy;
        </p>
    </footer>
    );
}