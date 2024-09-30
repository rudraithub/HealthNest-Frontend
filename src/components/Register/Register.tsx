import React from "react";
import Img from "../Login/Img";
import styles from "./Register.module.css";
import Header from "../Login/Header";

export default function Register() {
    return (
        <div className={styles.Register}>
            <div className={styles.header}>
                <Header register={true} login={false} />
            </div>
            <div className={styles.container}>
                <div className={styles.text_container}>
                    <Img />
                </div>
                <div className={styles["input-container"]}>
                    <div className={styles.header_container}>
                        <h2>Join HealthNest</h2>
                        <p>Are you a doctor?<a href="#">Register Here</a></p>
                    </div>
                    <form className={styles.form} action="">
                        <label htmlFor="name">Full Name</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                        <label htmlFor="Mobile phone">Mobile Number</label>
                        <div className={styles.mobile}>
                            <select name="phone">
                                <option>+91(IND)</option>
                                <option>+65(SGP)</option>
                                <option>+63(PHL)</option>
                                <option>+60(MYS)</option>
                                <option>+62(IND)</option>
                                <option>+55(BRA)</option>
                                <option>+52(MEX)</option>
                                <option>+54(ARG)</option>
                                <option>+56(CHL)</option>
                                <option>+84(VNM)</option>
                                <option>+971(UAE)</option>
                                <option>+965(KW)</option>
                                <option>+255(TZA)</option>
                                <option>+973(BH)</option>
                                <option>+966(SA)</option>
                                <option>+1(USA)</option>
                            </select>
                            <input
                                name="phone"
                                id="phone"
                                type="tel"
                                maxLength={10}
                                placeholder="Mobile Number"
                                required
                            />
                        </div>
                        <label htmlFor="Password">Create Password</label>
                        <input
                            name="Password"
                            id="password"
                            type="text"
                            placeholder="Password"
                            minLength={8}
                            required
                        />
                        <div id={styles.remember}>
                            <input name="remember" id="remember" type="checkbox" />
                            <div className={styles.remember_text}>
                                <label htmlFor="remember">
                                    Receive relevant offers and promotional communication from Practo
                                </label>
                                <p className={styles.pera}>
                                    By signing up, I agree to <a href="/">terms</a>
                                </p>
                            </div>
                        </div>
                        <button className={`${styles.otp_btn} ${styles.otp_button}`}>
                            Send OTP
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
