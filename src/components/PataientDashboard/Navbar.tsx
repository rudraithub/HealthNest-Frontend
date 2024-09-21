import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/img/logo.png";
import avtar from "../../assets/img/avtar.png";
import location from "../../assets/img/location.png";
import dashbord from "../../assets/img/dashbord.png";
import appoinment from "../../assets/img/appoinment.png";
import reminder from "../../assets/img/reminder.png";
import payments from "../../assets/img/payments.png";
import settings from "../../assets/img/settings.png";
import logout from "../../assets/img/logout.png";
import support from "../../assets/img/support.png";

export default function Navbar() {
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [reminderCount, setReminderCount] = useState(3);

    const handleMenuClick = (menu: React.SetStateAction<string>) => {
        setActiveMenu(menu);
    };

    return (
        <div className={styles["navbar"]}>
            <div className={styles["navcol"]}>
                <div className={styles["navrow"]}>
                    <div className={styles["navhead"]}>
                        <div className={styles["navlogo"]}>
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className={styles["heading"]}>
                            <h1>Healthnest</h1>
                        </div>
                    </div>
                    <div className={styles["profile-cont"]}>
                        <div className={styles["profile-img"]}>
                            <img src={avtar} alt="Avatar" />
                        </div>
                        <h3>Keval Makwana</h3>
                        <div className={styles["profile-info"]}>
                            <div className={styles["profile-age"]}>
                                <h5>35 years old</h5>
                            </div>
                            <hr />
                            <div className={styles["profile-location"]}>
                                <img src={location} alt="Location" />
                                <h5>Gujarat, India</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles["menu"]}>
                        <h4>Menu</h4>
                        <div className={styles["menus"]}>
                            <div
                                className={`${styles["menu-item"]} ${activeMenu === "dashboard" ? styles["active"] : ""}`}
                                onClick={() => handleMenuClick("dashboard")}
                            >
                                <img src={dashbord} alt="Dashboard" />
                                <a href="/">Dashboard</a>
                            </div>
                            <div className={styles["menu-item"]} onClick={() => handleMenuClick("appointment")}>
                                <img src={appoinment} alt="Appointment" />
                                <a href="/">Appointment</a>
                            </div>
                            <div className={styles["menu-item"]} onClick={() => handleMenuClick("reports")}>
                                <img src={appoinment} alt="Reports" />
                                <a href="/">Reports</a>
                            </div>
                            <div className={`${styles["menu-item"]} ${styles["reminder"]}`}>
                                <div className={styles["reminder"]}>
                                    <img src={reminder} alt="Reminders" />
                                    <a href="/">Reminders</a>
                                </div>
                                {reminderCount > 0 && (
                                    <div className={styles["reminder-cont"]}>
                                        +<div className={styles["reminder-count"]}>{reminderCount}</div>
                                    </div>
                                )}
                            </div>
                            <div className={styles["menu-item"]} onClick={() => handleMenuClick("payments")}>
                                <img src={payments} alt="Payments" />
                                <a href="/">Payments</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["navrow"]}>
                    <div className={styles["settings"]}>
                        <div className={styles["sitems"]}>
                            <img src={settings} alt="Settings" />
                            <h4>Settings</h4>
                        </div>
                        <div className={styles["sitems"]}>
                            <img src={logout} alt="Logout" />
                            <h4>Log Out</h4>
                        </div>
                        <div className={styles["sitems"]}>
                            <img src={support} alt="Support" />
                            <h4>Support</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
