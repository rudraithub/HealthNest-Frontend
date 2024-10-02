import { useNavigate } from "react-router-dom";
import styles from "./otp.module.css";
import { BsPencilSquare } from "react-icons/bs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Otp() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const {mobileNumber} = useSelector((state: RootState) => state.appointment)

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.scroll(0,0)
        console.log(otp);
        if(otp){
            navigate('/appointment/patientDetails')
        }
    };

    const handleError = () => {
        if (!otp || otp === "") {
            setError("This Field is Mandatory");
        } else {
            setError("");
            console.log("OTP sent to:", otp);
        }
    };

    return (
        <>
            <div className={styles["otpContainer"]}>
                <form onSubmit={handleSubmit}>

                    <div className={styles["row_1"]}>
                        <h4>We have sent an OTP on</h4>
                    </div>
                    <div className={styles["row_2"]}>
                        <div className={styles["number"]}>
                            <h3>{mobileNumber}</h3>
                        </div>
                        <div className={styles["icon"]}>
                            <BsPencilSquare onClick={() =>  navigate('/appointment/book')} />
                        </div>
                    </div>
                    <div className={styles["otp"]}>
                        <h5>OTP</h5>
                    </div>
                    <input
                        type="tel"
                        id={styles["phone_number"]}
                        className={styles.placeholder}
                        maxLength={6}
                        onChange={handleOtpChange}
                        placeholder="Please enter the 6 digit OTP here to verify"
                        onBlur={handleError}
                    />
                    {error && <span className={styles["error-message"]}>{error}</span>}
                    <div className={styles["received"]}>
                        <div className={styles["get_via_call"]}>
                            <h5>Still not received OTP? </h5>
                            <a href="">
                                <h5>&nbsp; Get via call</h5>{" "}
                            </a>
                        </div>
                        <div className={styles["resend_OTP"]}>
                            <a href="">
                                <h5>Resend OTP</h5>
                            </a>
                        </div>
                    </div>
                    <div className={styles["button"]}>
                        <button className={styles["booking"]}>Coutinue To Booking</button>
                    </div>
                </form>
            </div>
        </>
    );
}
