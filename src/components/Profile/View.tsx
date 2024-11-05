import React from 'react';
import Logo from './Logo';
import styles from './View.module.css';
import Sourabh from '../../assets/Sourabh.png';
function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <img
            src={Sourabh}
            alt=""
            className={styles.profileImage}
          />
        </div>
        <div className={styles.profileVerification}>
          <div className={styles.profileInfo}>
            <h1>Dr. Sourabh Nagpal <a href="">Profile is claimed</a></h1>
            <h2>BDS, MDS - Prosthodontist And Crown Bridge</h2>
            <p className={styles.pera}>Implantologist, Cosmetic/Aesthetic Dentist, Dental Surgeon, Dentist
              <span>19 Years Experience Overall</span>
            </p>
          </div>
          {/* <div className={styles.Practo_Logo}> */}
          <Logo />
          {/* </div> */}
          <div className={styles.verified}>
            <div className={styles.rating}>
              <h3><img src="" alt="" />Medical Registration Verified</h3>
              <h4>98%<span>(1669 patients)</span></h4>
            </div>
          </div>

          <div className={styles.profileDescription}>
            <p>
              Consult Dentist Implantologist Dr. Sourabh Nagpal, one of the Dentist in Delhi.
              Dr. Sourabh is running one of the implantology centers in south Delhi, along with
              being a degree holder implantologist, Dr. Sourabh Nagpal has skills in prosthodontics,
              crowns, bridges, dentures, and implant-supported prosthesis. Dr. Sourabh has taken
              special training in cosmetic dentistry that includes cosmetic smile designing, soft
              tissue contouring, etc. He is a specialist Implantologist and a Prosthodontics Professor.
            </p>
            <p>
              A well-known dentist in south Delhi, Dr. Sourabh Nagpal is running one of the dental
              care centers in Vasant Vihar, South Delhi, in the vicinity of Vasant Kunj and Indira
              Gandhi International Airport New Delhi India - Matrix Dental Implant Lounge & Matrix
              Dental and Skin Lounge.
            </p>
          </div>

          <div className={styles.profileFooter}>
            <a href="#share-your-story" className={styles.shareStoryLink}>Share your story</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
