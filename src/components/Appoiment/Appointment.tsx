import React, { ReactNode } from "react";
import styles from "./Appointment.module.css";
import AppointmentInfo from "./AppointmentInfo";
// import MobileInput from "./MobileInput";
// import Otp from "./otp"

interface props{
    children: ReactNode
}

const Appointment:React.FC<props> = ({children}) => {
    return (
        <div className={styles["appointment-container"]}>
            <AppointmentInfo />
            {/* <MobileInput /> */}
            {children}
        </div>
    );
};

export default Appointment;
