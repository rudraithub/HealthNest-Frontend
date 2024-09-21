import { useState, ChangeEvent, FormEvent, useEffect, useCallback } from "react";
import styles from "./Register.module.css";
// import google from "../../assets/image.png";
import Input from "../UI/Input";
import { LuArrowRight } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Modal from "../UI/Model";
import { UiACtion } from "../../store/uiSlice";
import Error from "../error/Error";
import axios from "axios";
import Success from "../error/Success";
import { storeToken } from "../../utils/storage";

// Define the shape of the form data
interface FormData {
    name: string;
    mobileNumber: string;
    // address: string;
    remember: boolean;
    pincode: string;
    city: string,
    country: string,
    state: string,
    street_address?: string;
}

// Define the shape of the errors object
interface Errors {
    name?: string;
    mobileNumber?: string;
    pincode: string;
    city: string,
    country: string,
    state: string,
    street_address?: string;
}

export default function Register() {
    // Initialize form data state with type FormData
    const [formData, setFormData] = useState<FormData>({
        name: "",
        mobileNumber: "",
        pincode: "",
        city: "",
        street_address: "",
        country: "",
        state: "",
        remember: false
    });

    // const [formattedAddress, setFormattedAddress] = useState<string>('')

    // Initialize errors state with type Errors
    const [errors, setErrors] = useState<Errors>({});

    // Get the navigate function from useNavigate
    const navigate = useNavigate();

    //use custom hook for api call

    const { clearData, sendRequest, resData, loading } = useApi({
        method: 'POST',
        endpoint: '/register/sent/otp'
    }, {})

    const { errorMessage, successMessage, isModalOpen } = useSelector((state: RootState) => state.ui)

    //dispatch the action 
    const dispatch = useDispatch();

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handlePhoneChange = (value: string) => {
        setFormData({
            ...formData,
            mobileNumber: `+${value}`, // PhoneInput returns the value with country code
        });
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic validation
        const newErrors: Errors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.mobileNumber) newErrors.mobileNumber = "Phone number is required";
        if (!formData.pincode) newErrors.pincode = "Pincode is required";
        if (!formData.street_address) newErrors.street_address = "Street address is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.city) newErrors.city = "city is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            // console.log('Validation errors:', newErrors);
            return;
        }

        // console.log('Submitting form with data:', formData);
        sendRequest(formData);
    };

    useEffect(() => {
        if (resData) {
            // console.log(resData)
            if (resData.otpToken) {
                storeToken('otpToken', resData.otpToken)
            }
            dispatch(UiACtion.showSuccess(resData.message));
        }
    }, [resData, dispatch, sendRequest]);

    useEffect(() => {
        if (errorMessage) {
            dispatch(UiACtion.showError(errorMessage));
        }
    }, [errorMessage, dispatch]);

    const closeModal = () => {
        setFormData({
            name: "",
            mobileNumber: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
            street_address: "",
            remember: false
        });
        // setFormattedAddress('');
        dispatch(UiACtion.closeModal());
        clearData()
    };

    useEffect(() => {
        if (successMessage) {
            navigate('/verifyOtp')
        }
    }, [navigate, successMessage])
    useEffect(() => {
        const fetchPincodeDetails = async () => {
            if (formData.pincode.length === 6) {  // Check if pincode is valid (assuming 6 digits)
                try {
                    const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
                        params: {
                            q: formData.pincode,
                            key: import.meta.env.VITE_GEO_LOCATION_API
                        }
                    });

                    const components = response.data.results[0].components;

                    // Update city, state, and country based on the pincode response
                    setFormData(prevData => ({
                        ...prevData,
                        city: components.state_district || '',
                        country: components.country || '',
                        state: components.state || ''
                    }));
                    // setFormattedAddress(response.data.results[0].formatted || '');
                } catch (err) {
                    if (axios.isAxiosError(err)) {
                        dispatch(UiACtion.showError(err.response?.data?.message || err.message || 'Something went wrong'));
                    }
                }
            }
        };

        fetchPincodeDetails();
    }, [formData.pincode, dispatch]);

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
                    Empowering you to take control of your health and well-being.
                </h1>
                <p>
                    Sign in or create an account to access personalized care, expert advice, and the tools you need to stay healthy.
                </p>
            </div>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Register</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        label="Name"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <p className={styles.error}>{errors.name}</p>}

                    <div className={styles.inputWrapper}>
                        <label htmlFor="mobileNumber" className={styles.label}>Mobile Number</label>
                        <PhoneInput
                            country={'in'} // Default country
                            value={formData.mobileNumber}
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
                        {errors.mobileNumber && <p className={styles.error}>{errors.mobileNumber}</p>}
                    </div>

                    <Input
                        label="Street Address"
                        name="street_address"
                        id="address"
                        type="text"
                        placeholder="Street Address"
                        value={formData.street_address}
                        onChange={handleChange}
                    />
                    {errors.street_address && <p className={styles.error}>{errors.street_address}</p>}

                    <Input
                        label="Pin code"
                        name="pincode"
                        id="pincode"
                        type="text"
                        maxLength={6}
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                    />
                    {/* {formattedAddress && <p className={styles.pincodeCheckResult}>{formattedAddress}</p>} */}
                    {errors.pincode && <p className={styles.error}>{errors.pincode}</p>}
                    {/* <Button type='button' onClick={handlePincodeCheck} className={styles.pincodeCheckButton}>
                        Check Pincode
                    </Button> */}

                    <Input
                        label="City"
                        name="city"
                        id="city"
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!formData.city}
                        required
                    />
                    {errors.city && <p className={styles.error}>{errors.city}</p>}
                    <Input
                        label="State"
                        name="state"
                        id="state"
                        type="text"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={!formData.state}
                        required
                    />
                    {errors.state && <p className={styles.error}>{errors.state}</p>}
                    {/* <Input
                        label="Address"
                        name="street_address"
                        id="address"
                        type="text"
                        placeholder="Street Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <p className={styles.error}>{errors.address}</p>} */}

                    <Input
                        name="remember"
                        type="checkbox"
                        id="remember"
                        label="Remember me"
                        checked={formData.remember}
                        onChange={handleChange}
                        className={styles.remember}
                    />

                    {/* <p className={styles.pera}>
                        <a href="/">
                            Forgot Password? Retrieve <br /> Forgotten Username!
                        </a>
                    </p> */}
                    <button id={styles.loginbtn} type="submit">
                        {loading ? 'Sending...' : 'Register'}
                        <span className={styles.arrowIcon}><LuArrowRight fontSize={'16px'} /></span>
                    </button>
                    <span className={styles.span}>
                        Already have an account? <Link to={'/login'}>Login</Link>
                    </span>
                </form>
                <div className={styles.hrcont}>
                    <hr className={`${styles.divider} ${styles.left}`} />
                    <h3>OR</h3>
                    <hr className={`${styles.divider} ${styles.right}`} />
                </div>
                <div id={styles.buttons}>
                    {/* <button className={`${styles.google} ${styles.button}`} type="button">
                        <img src={google} alt="Google Icon" />
                        Sign up with Google
                    </button> */}
                    <button className={styles.button} type="button">
                        Create account
                    </button>
                </div>
            </div>
        </div>
    );
}
