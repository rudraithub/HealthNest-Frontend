import React, { useState } from "react";
import styles from "./MobileInput.module.css";
import { useNavigate } from "react-router-dom";

const MobileInput = () => {
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobile(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        window.scroll(0,0)
        e.preventDefault();
        console.log(mobile);
        navigate('/appointment/otp')
    };

    const handleError = () => {
        if (!mobile || mobile === "") {
            setError("This Field is Mandatory");
        } else {
            setError("");
            console.log("OTP sent to:", mobile);
        }
    };

    return (
        <div className={styles["mobile-input-container"]}>
            <h2>Enter your mobile number</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="mobile">Mobile*</label>
                <input
                    type="tel"
                    id="styles.mobile"
                    maxLength={10}
                    value={mobile}
                    onChange={handleMobileChange}
                    placeholder="Mobile Number"
                    onBlur={handleError}
                    className={error ? styles["error-input"] : ""}
                />
                {error && <span className={styles["error-message"]}>{error}</span>}
                <p>
                    <span>You will receive an OTP shortly.</span>
                    <span>We will send appointment-related communications on this number.</span>
                </p>
                <button type="submit" className={styles["submit-btn"]} disabled={!mobile}>
                    Continue
                </button>
            </form>
        </div>
    );
};

export default MobileInput;
