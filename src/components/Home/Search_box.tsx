import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import styles from "./Search_box.module.css";

export default function Search_box() {
    return (
        <div className={styles.Search_box}>
            <div className={`${styles.location} ${styles.input_wrapper}`}>
                <IoLocationOutline className={styles.icon} />
                <input className={styles.search_input} type="text" placeholder="Search location" />
            </div>
            <div className={`${styles.doctor} ${styles.input_wrapper}`}>
                <IoSearchOutline className={styles.icon} />
                <input className={`${styles.search_input}`} type="text" placeholder="Search doctors, clinics, hospitals, etc." />
            </div>
        </div>
    );
}
