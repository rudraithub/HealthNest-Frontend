import React, { useState } from "react";
import styles from "./PatientHeader.module.css";
import search from "../../assets/img/search.png";
import mic from "../../assets/img/mic.png";
import notification from "../../assets/img/notification.png";
import profile from "../../assets/img/profile.png";

export default function PatientHeader() {
    const [searchInput, setSearchInput] = useState("");

    // Handle search input change
    const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
            <div className={styles["header"]}>
                <div className={styles["option"]}>
                    <div className={styles["options"]}>
                        <a href="/">Home</a>
                    </div>
                    &#47;
                    <div className={`${styles["options"]} ${styles["opactive"]}`}>
                        <a href="/">Dashboard (Patient)</a>
                    </div>
                </div>
                <div className={styles["righthead"]}>
                    <div className={styles["search"]}>
                        <img src={search} alt="" />
                        <input type="text" placeholder="Search any keywords" value={searchInput} onChange={handleSearchChange} />
                        <img src={mic} alt="" />
                    </div>
                    <div className={styles["notification"]}>
                        <img src={notification} alt="" />
                    </div>
                    <div className={styles["profile"]}>
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
