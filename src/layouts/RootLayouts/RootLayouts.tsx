import type { ReactNode } from "react";
import styles from "./RootLayouts.module.css"
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";


export default function RootLayouts():ReactNode{
    return(
        <div className={styles["root-layout"]}>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}