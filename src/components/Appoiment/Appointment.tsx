import React, { useState } from 'react';
import styles from './Appointment.module.css'; // Create a CSS file for styling
import doctorImg from '../../assets/thumbnail.jpeg'
import hospitalImg from '../../assets/dr-hemang-zala-multi-speciality-cosmetic-dental-hospital-ahmedabad-1441969518-55f2b56ebd965.webp'

const Appointment = () => {
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobile(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(mobile)
    };

    const handleError = () => {
        if (!mobile || mobile === '') {
            setError('This Field is Mandatory');
        } else {
            setError('');
            // Handle OTP send logic here
            console.log('OTP sent to:', mobile);
        }
    }

    return (
        <div className={styles["appointment-container"]}>
            {/* Left side appointment info */}
            <div className={styles["appointment-info"]}>
                <div className={styles["appointment-header"]}>
                    <div className={styles.appointmentTitle}>
                        <h2>In-clinic Appointment</h2>
                    </div>
                    <div className={styles["appointment-details"]}>
                        <div className={styles.appointmentDateTime}>
                            <div>
                                <p><span className={styles["icon"]}>📅</span> On Sep 28, 2024 </p>
                            </div>
                            <div>
                                <p><span className={styles["icon"]}>⏰</span> At 6:30 PM</p>
                            </div>
                        </div>

                        <a href="#change">Change Date & Time</a>
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
                        <img src={hospitalImg} alt="Doctor" className={styles["doctor-img"]} />
                        <div className={styles.clinicData}>
                            <h3>Dr. Hemang Zala Multi Speciality & Cosmetic Dental Hospital</h3>
                            <p>208-9, Sahajanand Palace, 100 Feet Ring Road, Ahmedabad</p>
                            <a href="#directions">Get Directions</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side mobile number input */}
            <div className={styles["mobile-input-container"]}>
                <h2>Enter your mobile number</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="mobile">Mobile*</label>
                    <input
                        type="tel"
                        id="mobile"
                        max={10}
                        value={mobile}
                        onChange={handleMobileChange}
                        placeholder="Mobile Number"
                        onBlur={handleError}
                        className={error ? styles['error-input'] : ''}
                    />
                    {error && <span className={styles["error-message"]}>{error}</span>}
                    <p>
                        <span>You will receive an OTP shortly.</span>
                        <span>We will send appointment-related communications on this number.</span>
                    </p>
                    <button type="submit" className={styles["submit-btn"]} disabled={!mobile}>Continue</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
