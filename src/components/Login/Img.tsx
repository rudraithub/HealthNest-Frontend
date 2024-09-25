import React from 'react';
// import styles from "./Register.module.css"; 
import styles from "./Login.module.css"; 

export default function Img() {
    return (
            <div className={styles["img_container"]}>
                <img src="https://accounts.practo.com/static/images/illustration.png" alt="Illustration" />
            </div>
    );
}
