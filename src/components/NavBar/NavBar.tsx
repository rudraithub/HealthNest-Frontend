import styles from "./Navbar.module.css";
import { GoDotFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null); // Reference to the menu element

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle clicks outside of the menu to close it
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMenuOpen(false); // Close the menu if the click is outside the menu
        }
    };

    // Add and clean up the event listener for detecting clicks outside
    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside); // Listen for clicks outside the menu
        } else {
            document.removeEventListener("mousedown", handleClickOutside); // Remove listener when menu is closed
        }

        // Cleanup on component unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]); // Depend on isMenuOpen to re-add/remove listener

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
                <div onClick={()=> setIsMenuOpen(false)} ref={menuRef} className={`${styles.navMenu} ${isMenuOpen ? `${styles.openNav}` : ''}`}>
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
