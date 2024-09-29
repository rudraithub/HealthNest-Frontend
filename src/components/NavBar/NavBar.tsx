import styles from "./Navbar.module.css";
import { GoDotFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigate = useNavigate()
    return (
        <div className={styles.navwrapper}>
            <div className={styles.Navbar}>
                <button className={`${styles.menu_toggle}`} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={styles.left_nav}>
                    <div className={styles.Logo}>
                        <GoDotFill />
                        <h2 onClick={() => navigate('/')}>HealthNest</h2>
                        <GoDotFill />
                    </div>
                    <div className={`${styles.links}`}>
                        <a href="#">Find Doctors</a>
                        <a href="#">Video Consult</a>
                        <a href="#">Surgeries</a>
                    </div>
                </div>
                <div className={styles.right_nav}>
                    <div className={`${styles.boxes}`}>
                        <div className={styles.box}>
                            For Corporates
                            <FaAngleDown />
                        </div>
                        <div className={styles.box}>
                            For Providers
                            <FaAngleDown />
                        </div>
                        <div className={styles.box}>
                            Security & Help
                            <FaAngleDown />
                        </div>
                    </div>
                    <div className={styles.login}>
                        <button onClick={()=> navigate('/login')}>Login/Signup</button>
                    </div>
                </div>
                <div className={`${styles.navMenu} ${isMenuOpen ? `${styles.openNav}` : ''}`}>
                    <a href="#">Find Doctors</a>
                    <a href="#">Video Consult</a>
                    <a href="#">Surgeries</a>
                    <div>
                        <a href="#">For Corporates <FaAngleDown /></a> 
                    </div>
                    <div>
                    <a href="#">For Providers <FaAngleDown /></a>
                        
                    </div>
                    <div>
                        <a href="#">Security & Help <FaAngleDown /></a>   
                    </div>
                </div>
            </div>
        </div>
    );
}
