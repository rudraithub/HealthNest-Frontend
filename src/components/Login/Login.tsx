import styles from "./Login.module.css";
import google from "../../assets/image.png";
import { LuArrowRight } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormEvent, useEffect, useState } from "react";
import useApi from "../../Hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { UiACtion } from "../../store/uiSlice";
import Modal from "../UI/Model";
import Error from "../error/Error";
import Success from "../error/Success";
import { storeToken } from "../../utils/storage";

export default function Login() {
    const [mobileNumber, setMobileNumber] = useState<string>('')
    const [error, setError] = useState<string>('')
    const { sendRequest, resData, loading, clearData } = useApi({
        endpoint: '/login/sent/otp',
        method: 'POST',
    }, {})

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { errorMessage, successMessage, isModalOpen } = useSelector((state: RootState) => state.ui)

    const handlePhoneChange = (value: string) => {
        setMobileNumber(`+${value}`)
    }
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (mobileNumber.length === 0) {
            setError('Please Provide Your Mobile Number!')
            return
        }
        sendRequest({ mobileNumber: mobileNumber })
    }

    useEffect(() => {
        if (resData) {
            // console.log(resData)
            if (resData.otpToken) {
                storeToken('otpToken', resData.otpToken)
            }
            dispatch(UiACtion.showSuccess(resData.message));
        }
    }, [resData, dispatch]);

    useEffect(() => {
        if (errorMessage) {
            dispatch(UiACtion.showError(errorMessage));
        }
    }, [errorMessage, dispatch]);

    const closeModal = () => {
        setMobileNumber('')
        // setFormattedAddress('');
        dispatch(UiACtion.closeModal());
        clearData() 
    };

    useEffect(()=>{
        if(successMessage){
            navigate('/login/login-verify-otp')
        }
    }, [navigate, successMessage])

    return (
        <div className={styles.container}>
            {isModalOpen && errorMessage && (
                <Modal open={isModalOpen} onClose={closeModal}>
                    <Error message={errorMessage} />
                </Modal>
            )}
            {isModalOpen && successMessage && (
                <Modal open={isModalOpen} onClose={closeModal}>
                    <Success message={successMessage} />
                </Modal>
            )}
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
                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* <Input
                        label="Phone Number"
                        name="phone"
                        id="phone"
                        type="tel"
                        maxLength={10}
                        placeholder="Phone Number"
                        required
                    /> */}

                    <div className={styles.inputWrapper}>
                        <label htmlFor="mobileNumber" className={styles.label}>Mobile Number</label>
                        <PhoneInput
                            country={'in'} // Default country
                            value={mobileNumber}
                            onChange={handlePhoneChange}
                            onlyCountries={['us', 'gb', 'in']}
                            inputProps={{
                                name: 'mobileNumber',
                                required: true,
                                id: 'mobileNumber',
                            }}
                            containerClass={styles.phoneInputContainer}
                            inputClass={styles.phoneInputField}
                            buttonClass={styles.phoneInputButton}
                            dropdownClass={styles.phoneDropdown} // Add a class for the dropdown
                        // enableSearch={true}
                        />
                        {error && <p className={styles.error}>{error}</p>}
                    </div>

                    <button id={styles.loginbtn} type="submit">
                        {loading ? 'sending...' : 'Login'}
                        <span className={styles.arrowIcon}><LuArrowRight fontSize={'16px'} /></span>
                    </button>
                    <span className={styles.span}>
                        Don’t have an account? <Link to="/register"> Sign up</Link>
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