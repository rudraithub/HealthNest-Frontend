import React from "react";
import styles from "./AppointmentInfo.module.css";
import doctorImg from "../../assets/thumbnail.jpeg";
import hospitalImg from "../../assets/dr-hemang-zala-multi-speciality-cosmetic-dental-hospital-ahmedabad-1441969518-55f2b56ebd965.webp";
import { Link } from "react-router-dom";

const AppointmentInfo = () => {
    return (
        <div className={styles["appointment-info"]}>
            <div className={styles["appointment-header"]}>
                <div className={styles.appointmentTitle}>
                    <h2>In-clinic Appointment</h2>
                </div>
                <div className={styles["appointment-details"]}>
                    <div className={styles.appointmentDateTime}>
                        <div>
                            <p>
                                <span className={styles["icon"]}>📅</span> On Sep 28, 2024
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className={styles["icon"]}>⏰</span> At 6:30 PM
                            </p>
                        </div>
                    </div>
                    <Link to="/doctors">Change Date & Time</Link>
                </div>
            </div>
            <div className={styles["doctor-info"]}>
                <div className={styles["doctor-details"]}>
                    <img src={doctorImg} alt="Doctor" className={styles["doctor-img"]} />
                    <div className={styles.doctorData}>
                        <h3>Dr. Hemang Zala</h3>
                        <p>BDS, Fellowship in Oral Implantology, MDS - Oral Pathology & Microbiology</p>
                        <p>Specialties: Dentist, Cosmetic/Aesthetic Dentist, Implantologist, Oral Pathologist</p>
                    </div>
                </div>
                <div className={styles["clinic-info"]}>
                    <img src={hospitalImg} alt="Hospital" className={styles["doctor-img"]} />
                    <div className={styles.clinicData}>
                        <h3>Dr. Hemang Zala Multi Speciality & Cosmetic Dental Hospital</h3>
                        <p>208-9, Sahajanand Palace, 100 Feet Ring Road, Ahmedabad</p>
                        <a href="#directions">Get Directions</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentInfo;
