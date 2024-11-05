import styles from './View.module.css'
function Logo() {
    return (
        <div className={styles.banner}>
            <div className={styles.logoSection}>
                <div className={styles.text}>
                    <span className={styles.practo}>HealthNest </span>
                    <span className={styles.dental}>DENTAL</span>
                </div>
                │
                <div className={styles.slogan}>
                    Trusted Care. Lasting Smiles.
                </div>
            </div>
        </div>
    );
}

export default Logo;
