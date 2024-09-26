import styles from "./Home_card2.module.css";

export default function Home_card2({ img, title }) {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={img} alt="img" />
            </div>
            <div className={styles.card_body}>
                <h4 className={styles.card_title}>{title}</h4>
                <a>CONSULT NOW</a>
            </div>
        </div>
    );
}
