import React, { useEffect, useRef, useState } from 'react'
import styles from './VerifyOtp.module.css'
import Modal from '../UI/Model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { UiACtion } from '../../store/uiSlice';
import Error from '../error/Error';
import Success from '../error/Success';
import { useNavigate } from 'react-router-dom';

interface VerifyOtpProps {
    loading: boolean;
    onSubmit: (otp: string) => void; // Define the onSubmit prop to be passed
    // errorMessage: string | null; // To clear OTP on error
    // successMessage: string | null; // To clear OTP on success
    clearData: () => void;
    context: 'register' | 'login';
}

const VerifyOtp: React.FC<VerifyOtpProps> = ({ onSubmit, loading, clearData, context }) => {
    const length = 4; // Default length for OTP fields
    const inputRef = useRef<HTMLInputElement[]>([]);
    const [value, setValue] = useState<string[]>(new Array(length).fill(""));

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const { errorMessage, successMessage, isModalOpen } = useSelector((state: RootState) => state.ui)

    // Handle input value changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const inputValue = e.target.value;

        if (isNaN(Number(inputValue))) return;

        const newValue = [...value];
        newValue[index] = inputValue.slice(-1);
        setValue(newValue);

        // Focus next input if there is one
        if (inputValue && index < length - 1) {
            inputRef.current[index + 1].focus();
        }
    };

    // Handle input click event
    const handleClick = (index: number) => {
        inputRef.current[index].setSelectionRange(1, 1);
    };

    // Handle key down events for backspace handling
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && index > 0 && !value[index]) {
            inputRef.current[index - 1].focus();
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault(); // Prevent the default form submission
        const finalValue = value.join("");
        if (finalValue.length === length) {
            onSubmit(finalValue)
        }
        setValue(new Array(length).fill(""));

        // Refocus the first input after clearing
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }

    // Automatically focus the first input when the component mounts
    useEffect(() => {
        if (inputRef.current[0]) inputRef.current[0].focus();
    }, []);

    const closeModal = () => {
        dispatch(UiACtion.closeModal());
        clearData()
        // if (successMessage) {
        //     navigate('/patient/dashboard')
        // }
    };

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
                <h2 className={styles.formTitle}>
                    {context === 'register' ? 'Register' : 'Login'}
                </h2>
                <h3 className={styles.otpTitle}>Enter Your OTP</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        {value.map((item, index) => (
                            <input
                                name='otp'
                                key={index}
                                ref={(input) => (inputRef.current[index] = input!)}
                                value={item}
                                placeholder="0"
                                onChange={(e) => handleChange(e, index)}
                                onClick={() => handleClick(index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className={styles.input}
                            />
                        ))}
                    </div>
                    <button id={styles.loginbtn} type="submit">
                        {loading ? 'Verifying...' : 'Verify'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VerifyOtp