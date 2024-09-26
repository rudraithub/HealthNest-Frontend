import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header({ login , register }) {
    return (
        <>
            <div className={styles.header}>
                <div className={`${styles.div} ${login ? styles.active : ""}`}>
                <Link to={'/login'}>Login</Link>
                </div>
                <div className={`${styles.div} ${register ? styles.active : ""}`}>
                    <Link to={'/signUp'}>Register</Link>
                </div>
            </div>
        </>
    );
}
