import styles from "./Login.module.css";
import Input from "../UI/Input";
import Header from "./Header";
import Img from "./Img";

export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.header}>
                <Header login={`active`} />
            </div>
            <div className={styles.container}>
                <div className={styles.text_container}>
                    <Img />
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form} action="">
                        <Input
                            label="Mobile Number / Email ID"
                            name="phone"
                            id="phone"
                            type="tel"
                            maxLength={10}
                            placeholder="Mobile Number / Email ID"
                            required
                        />
                        <Input
                            label="Password"
                            name="pass"
                            id="pass"
                            type="text"
                            minLength={8}
                            placeholder="Password"
                            required
                        />
                        <div className={styles.forget}>
                            <Input
                                name="remember"
                                type="checkbox"
                                id="remember"
                                label="Remember me for 30 days"
                                className={styles.remember}
                            />
                            <a href="#">Forgot password?</a>
                        </div>
                        <Input
                            name="remember"
                            type="checkbox"
                            id="remember"
                            label="Login with OTP instead of password"
                            className={styles.remember}
                        />
                        <button id={styles.loginbtn} type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
