import React from 'react';
import styles from "./Login.module.css";  
import logo from '../../assets/Logo (1).png';

export default function Img() {
    return (
            <div className={styles["img_container"]}>
                <img src={logo} alt="error" />
            </div>
    );
}