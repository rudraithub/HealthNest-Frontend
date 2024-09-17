import DoctorImg from '../../assets/Rectangle 9.png'
import Button from '../UI/Button'
import { FaArrowRight } from "react-icons/fa";
import styles from './Home.module.css'
import InfoCard from './info_cart/InfoCard';
import infoImg1 from '../../assets/smiling woman with headphones.png'
import infoImg3 from '../../assets/Check in.png'
import infoImg2 from '../../assets/businesswoman leaning on big clock with arms crossed.png'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const handleAppointmentClick = () => {
        console.log('Button clicked');
        navigate('/login');
      };  

    return (
        <section className={styles.home}>
            <div className={styles.main_container}>
                <div className={styles.content_container}>
                    <div className={styles.text_container}>
                        <h4>TOTAL HEALTHCARE SOLUTION</h4>
                        <h1>YOUR MOST TRUSTED <br /> HEALTH PARTNER</h1>
                        <p><span>Healthnest</span> will always serve you <br /> wholeheartedly. Health is a priority.</p>
                    </div>
                    <div className={styles.button_container}>
                        <Button className={styles.appointment_btn} onClick={handleAppointmentClick}>
                            Book Appointment
                            <span><FaArrowRight /></span>
                        </Button>
                        <span className={styles.btn_text}>or</span>
                        <Button className={styles.contact_btn}>Contact Us</Button>
                    </div>

                </div>
                <div className={styles.home_img_container}>
                    <img src={DoctorImg} alt="" className={styles.home_img} />
                </div>
            </div>
            <div className={styles.info_container}>
                <div className={styles.detail_container}>
                    <h3 className={styles.detail_title}>Why Choose Us?</h3>
                    <p className={styles.detail_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit metus ex, id ullamcorper massa.</p>
                </div>
                <InfoCard className={styles.infoImg1} img={infoImg1} info_container={styles.infoContainer1} title='Emergency Cases' description='(555) 555-5555' />
                <InfoCard className={styles.infoImg2} img={infoImg2} info_container={styles.infoContainer2} title='Working Hours' description='Timing schedules' />
                <InfoCard className={styles.infoImg3} img={infoImg3} info_container={styles.infoContainer3} title='Appointments' description='24 hours service' />
            </div>
        </section>
    )
}

export default Home