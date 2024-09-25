import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <h4>Practo</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>For patients</h4>
          <ul>
            <li><a href="#">Search for doctors</a></li>
            <li><a href="#">Search for clinics</a></li>
            <li><a href="#">Search for hospitals</a></li>
            <li><a href="#">Practo Plus</a></li>
            <li><a href="#">Covid Hospital listing</a></li>
            <li><a href="#">Practo Care Clinics</a></li>
            <li><a href="#">Read health articles</a></li>
            <li><a href="#">Read about medicines</a></li>
            <li><a href="#">Practo Drive</a></li>
            <li><a href="#">Health app</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>For doctors</h4>
          <ul>
            <li><a href="#">Practo Profile</a></li>
          </ul>
          <h4>For clinics</h4>
          <ul>
            <li><a href="#">Ray by Practo</a></li>
            <li><a href="#">Practo Reach</a></li>
            <li><a href="#">Ray Tab</a></li>
            <li><a href="#">Practo Pro</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>For hospitals</h4>
          <ul>
            <li><a href="#">Insta by Practo</a></li>
            <li><a href="#">Qikwell by Practo</a></li>
            <li><a href="#">Practo Profile</a></li>
            <li><a href="#">Practo Reach</a></li>
            <li><a href="#">Practo Drive</a></li>
          </ul>
          <h4>For Corporates</h4>
          <ul>
            <li><a href="#">Wellness Plans</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>More</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">PCS T&C</a></li>
            <li><a href="#">Healthcare Directory</a></li>
            <li><a href="#">Practo Health Wiki</a></li>
          </ul>
        </div>
        <div className={styles.column}>
        <h4>Social</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
          </div>
      </div>
      <div className={styles.footer_heading}>
        <h1>HealthNest</h1>
      </div>
      <div className={styles.copyright}>
        <p>Copyright &copy; 2017, Practo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
