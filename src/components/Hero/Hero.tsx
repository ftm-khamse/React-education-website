import type { ReactNode } from "react";
import styles from "./Hero.module.css";
import Button from "../Button/Button";

export default function Hero():ReactNode{
    return(
        <section className={styles.hero}>
            <div className={styles.content}>
                <h3>Learn Easy And Fast</h3>
                <p>Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                 Repellat, distinctio? Lorem, 
                 ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, illum?</p>
                <Button>start for free</Button>
            </div>
            <div className={styles.image}>
                <img src="/pic6.webp" alt="" />
            </div>
        </section>
    )
}