import React from "react";
import styles from "./AppointmentInfo.module.css";
import doctorImg from "../../assets/thumbnail.jpeg";
import hospitalImg from "../../assets/dr-hemang-zala-multi-speciality-cosmetic-dental-hospital-ahmedabad-1441969518-55f2b56ebd965.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const AppointmentInfo = () => {

    const {selectedDoctor, selectedDate, selectedTime} = useSelector((state: RootState) => state.appointment)

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
                                <span className={styles["icon"]}>📅</span> On {selectedDate}
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className={styles["icon"]}>⏰</span> At {selectedTime}
                            </p>
                        </div>
                    </div>
                    <Link to="/doctors">Change Date & Time</Link>
                </div>
            </div>
            <div className={styles["doctor-info"]}>
                <div className={styles["doctor-details"]}>
                    <img src={selectedDoctor.img || doctorImg} alt="Doctor" className={styles["doctor-img"]} />
                    <div className={styles.doctorData}>
                        <h3>{selectedDoctor?.name || 'Dr. Hemang Zala'}</h3>
                        <p>{selectedDoctor?.qualification || 'BDS, Fellowship in Oral Implantology, MDS - Oral Pathology & Microbiology'}</p>
                        <p>{selectedDoctor?.specialist}</p>
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
