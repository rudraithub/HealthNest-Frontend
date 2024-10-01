import React, {useState} from "react";
import styles from "./PatientDetails.module.css";
import {CiLock} from "react-icons/ci";
import {IoLogoWhatsapp} from "react-icons/io";
import {MdDone} from "react-icons/md";

export default function PatientDetails() {
    const country_code = 91;
    const mobile = 7777777777;
    const payment = 7;

    // State for appointment option, payment option, form fields, and errors
    const [appointmentOption, setAppointmentOption] = useState("myself");
    const [paymentOption, setPaymentOption] = useState("");
    const [name, setName] = useState(""); // Name field
    const [email, setEmail] = useState(""); // Email field
    const [nameError, setNameError] = useState(""); // Error state for name
    const [patientMobile, setPatientMobile] = useState(""); // Patient's Mobile field
    const [patientMobileError, setPatientMobileError] = useState(""); // Error state for patient's mobile
    const [paymentError, setPaymentError] = useState(""); // State for payment error

    const handleAppointmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAppointmentOption(e.target.value);
        setName(""); // Clear name when changing appointment option
        setEmail(""); // Clear email when changing appointment option
        setPatientMobile(""); // Clear patient mobile when changing appointment option
        setNameError(""); // Reset error when changing appointment option
        setPatientMobileError(""); // Reset patient mobile error
    };

    const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentOption(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value); // Update name state as user types
        if (e.target.value) {
            setNameError(""); // Clear error if the user starts typing
        }
    };

    const handlePatientMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPatientMobile(e.target.value); // Update patient mobile state as user types
        if (e.target.value) {
            setPatientMobileError(""); // Clear error if the user starts typing
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value); // Update email state as user types
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Set errors if fields are empty
        if (!name) {
            setNameError("Name is required");
        }
        if (!patientMobile) {
            setPatientMobileError("Patient's mobile number is required");
        }
        if (!paymentOption) {
            setPaymentError("Please select a payment method");
        } else {
            setPaymentError(""); // Clear error if payment option is selected
        }
    };

    return (
        <div className={styles["patient-detail-container"]}>
            <h2>Enter your details</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h4>This in-clinic appointment is for:</h4>
                <div className={styles["radio-container"]}>
                    <label className={styles.radio}>
                        <input type="radio" value="myself" checked={appointmentOption === "myself"} onChange={handleAppointmentChange} />
                        Myself
                    </label>
                    <label className={styles.radio}>
                        <input type="radio" value="someoneElse" checked={appointmentOption === "someoneElse"} onChange={handleAppointmentChange} />
                        Someone Else
                    </label>
                </div>

                {/* Conditionally render fields based on the selected appointment option */}
                {appointmentOption === "myself" && (
                    <div className={styles["myself-fields"]}>
                        <h4>Please provide the following information about yourself:</h4>
                        <div className={styles["input-field"]}>
                            <label htmlFor="name">
                                Full Name<span className={styles.redText}>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your Full name"
                                value={name}
                                onChange={handleNameChange}
                                className={nameError ? styles["error-input"] : ""}
                            />
                            {nameError && <span className={styles["error-message"]}>{nameError}</span>}
                        </div>

                        <div className={styles["input-field"]}>
                            <label htmlFor="mobile">
                                Mobile<span className={styles.redText}>*</span>
                            </label>
                            <div className={styles.inputWithIcon}>
                                <CiLock className={styles.lockIcon} />
                                <input type="tel" id="mobile" className={styles.noHover} value={`+${country_code} ${mobile}`} disabled />
                            </div>
                        </div>

                        <div className={styles["input-field"]}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your Email" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>
                )}

                {appointmentOption === "someoneElse" && (
                    <div className={styles["someone-else-fields"]}>
                        <h4>Please provide the following information about the patient:</h4>
                        <div className={styles["input-field"]}>
                            <label htmlFor="name">
                                Patient's Full Name<span className={styles.redText}>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter Patient's Full name"
                                value={name}
                                onChange={handleNameChange}
                                className={nameError ? styles["error-input"] : ""}
                            />
                            {nameError && <span className={styles["error-message"]}>{`Patient's ${nameError}`}</span>}
                        </div>

                        <div className={styles["input-field"]}>
                            <label htmlFor="mobile">
                                Mobile<span className={styles.redText}>*</span>
                            </label>
                            <div className={styles.inputWithIcon}>
                                <CiLock className={styles.lockIcon} />
                                <input type="tel" id="mobile" className={styles.noHover} value={`+${country_code} ${mobile}`} disabled />
                            </div>
                        </div>

                        <div className={styles["input-field"]}>
                            <label htmlFor="patientMobile">
                                Patient's Mobile<span className={styles.redText}>*</span>
                            </label>
                            <input
                                type="tel"
                                id="patientMobile"
                                placeholder="Enter Patient's Mobile Number"
                                value={patientMobile}
                                onChange={handlePatientMobileChange}
                                className={patientMobileError ? styles["error-input"] : ""}
                            />
                            {patientMobileError && <span className={styles["error-message"]}>{patientMobileError}</span>}
                        </div>

                        <div className={styles["input-field"]}>
                            <label htmlFor="email">Patient's Email</label>
                            <input type="email" id="email" placeholder="Enter Patient's Email" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>
                )}

                <div className={styles.WhatsappUpdates}>
                    <label htmlFor="whatsapp">
                        <input type="checkbox" checked />
                        <span>
                            <IoLogoWhatsapp />
                        </span>
                        Get updates on WhatsApp number +{country_code} {mobile}
                    </label>
                </div>

                <h4>Choose a payment option to Book Appointment</h4>

                <div className={styles["radio-container2"]}>
                    {/* <label className={`${styles.radio} ${paymentOption === "payOnline" ? styles.checked : ""}`}>
                        <input type="radio" value="payOnline" checked={paymentOption === "payOnline"} onChange={handlePaymentChange} />
                        <div className={styles.flex}>
                            <div>₹{payment}</div> Pay Online
                        </div>
                    </label> */}
                    <label className={`${styles.radio} ${paymentOption === "payLater" ? styles.checked : ""}`}>
                        <input type="radio" value="payLater" checked={paymentOption === "payLater"} onChange={handlePaymentChange} />
                        <div className={styles.flex}>
                            <div>₹{payment}</div> Pay Later at the Clinic
                        </div>
                    </label>
                    {paymentError && <span className={styles["error-message"]}>{paymentError}</span>}
                </div>

                {/* Disable the submit button if the name field is empty */}
                <button type="submit" className={styles["submit-btn"]}>
                    Confirm Clinic Visit
                </button>
            </form>

            <div className={styles.outside}>
                {/* Conditional rendering based on payment option */}
                {paymentOption === "payOnline" && (
                    <ol>
                        <li>Free cancellation and rescheduling are available till 2 hours before the appointment time.</li>
                        <li>
                            After the stipulated time, rescheduling will not be available and a fee of Rs 50 will be applicable for cancellation or
                            no-show.
                        </li>
                        <li>
                            Updates will be sent to +{country_code} {mobile}
                        </li>
                    </ol>
                )}

                {paymentOption === "payLater" && (
                    <ol>
                        <li>
                            Updates will be sent to +{country_code} {mobile}
                        </li>
                    </ol>
                )}

                {paymentOption && (
                    <p>
                        By booking this appointment, you agree to HealthNest’s <a href="#">Terms and Conditions</a>. Have more questions?
                        {paymentOption === "payOnline" ? (
                            <a href="#">Read our payment FAQs.</a>
                        ) : (
                            <>You can also Pre-pay for this appointment by selecting Pay Online option. Read our payment FAQs.</>
                        )}
                    </p>
                )}

                <h4>Safe and secure payments.</h4>
                <ul>
                    <li>
                        <span>
                            <MdDone />
                        </span>
                        No more billing queues, go cashless!
                    </li>
                    <li>
                        <span>
                            <MdDone />
                        </span>
                        Instant appointment confirmation
                    </li>
                    <li>
                        <span>
                            <MdDone />
                        </span>
                        Easy appointment management
                    </li>
                </ul>
            </div>
        </div>
    );
}
