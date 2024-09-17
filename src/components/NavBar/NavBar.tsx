import { NavLink } from "react-router-dom"
import LOGO from '../../assets/Full Logo White 1.png'
import styles from './NavBar.module.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";

function NavBar() {
    // const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_logo}>
                    <img src={LOGO} alt="" />
                    <h3>Healthnest</h3>
                </div>
                <button className={`${styles.menu_toggle} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.nav_open : ''}`}>
                    <ul className={styles.nav_ul}>
                        <li className={styles.nav_list}><NavLink to={'/'} className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
                        <li className={styles.nav_list}><NavLink to={'#'} >About</NavLink></li>
                        <li className={styles.nav_list}><NavLink to={'#'} >Doctors</NavLink></li>
                        <li className={styles.nav_list}><NavLink to={'#'} >Services <span className={styles.caret_icon}><RxCaretDown className={styles.caret} /></span></NavLink></li>
                        <li className={styles.nav_list}><NavLink to={'#'} >Register <span className={styles.register_icon}><MdKeyboardDoubleArrowRight /></span></NavLink></li>
                    </ul>
                    <NavLink className={({isActive}) => isActive ? styles.activeLogin : styles.login_btn} to={'/login'}>Log In</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar