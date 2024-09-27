import styles from "./Doctor.module.css";
import { BiSolidLike } from "react-icons/bi";

export default function Doctor({ img, name, department, experience, place, fees, likes, stories }) {
    return (
        <div className={styles.Doctor}>
            <div className={styles.left_doctors}>
                <div className={styles.image}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <a>{department}</a>
                    <p>{experience} years of Experience</p>
                    <h4>{place}</h4>
                    <h4>
                        &#8377;{fees} <span>Consultation fees</span>
                    </h4>
                    <div className={styles.stories}>
                        <div className={styles.likes}>
                            <BiSolidLike />
                            &nbsp;
                            {likes}%
                        </div>
                        <span>{stories} Patient Stories</span>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <button>View Profile</button>
                <button>Book Clinic Visit</button>
            </div>
        </div>
    );
}
