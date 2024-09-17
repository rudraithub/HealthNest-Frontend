import styles from "./Login.module.css";
import google from "../../assets/image.png";
import Input from "../UI/Input";
import { LuArrowRight } from "react-icons/lu";

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>
                    Empowering you to take control of your health and
                    well-being.
                </h1>
                <p>
                    Sign in or create an account to access personalized
                    care,expert advices and the tools you need to stay healthy.
                </p>
            </div>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>LOG IN</h2>
                <form className={styles.form} action="">
                    <Input
                        label="Name"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required
                    />
                    <Input
                        label="Phone Number"
                        name="phone"
                        id="phone"
                        type="tel"
                        maxLength={10}
                        placeholder="Phone Number"
                        required
                    />
                    <Input
                        label="Address"
                        name="address"
                        id="address"
                        type="text"
                        placeholder="Address"
                        required
                    />
                    {/* <div id={`${styles.remember}`}>
                        <input name="remember" id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me</label>
                    </div> */}
                    <Input
                        name="remember"
                        type="checkbox"
                        id="remember"
                        label="Remember me"
                        className={styles.remember}
                    />
                    <p className={styles.pera}>
                        <a href="/">
                            Forgot Password?Retrieve <br />Forgotten Username!
                        </a>
                    </p>
                    <button id={styles.loginbtn} type="submit">
                        Log In
                        <span className={styles.arrowIcon}><LuArrowRight fontSize={'16px'} /></span>
                        {/* Icon/Outline/arrow-right */}
                    </button>
                    <span className={styles.span}>
                        Don’t have an account? <a href="/"> Sign up</a>
                    </span>
                </form>
                <div className={styles.hrcont}>
                    <hr className={`${styles.divider}  ${styles.left}`} />
                    <h3>OR</h3>
                    <hr className={`${styles.divider}  ${styles.right}`} />
                </div>
                <div id={`${styles.buttons}`}>
                    <button
                        className={`${styles.google} ${styles.button}`}
                        type="button"
                    >
                        <img src={google} alt="Google Icon" />
                        Sign up with Google
                    </button>
                    <button className={styles.button} type="button">
                        Create account
                    </button>
                </div>
            </div>
        </div>
    );
}
