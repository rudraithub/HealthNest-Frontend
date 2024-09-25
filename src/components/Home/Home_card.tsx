import styles from "./Home_card.module.css";

export default function Home_card({ img, title, pera, bgColor }) {
    return (
        <div className={styles.card}>
            <div
                className={styles.card_img}
                style={{ background: bgColor }} // Apply background color dynamically
            >
                <img src={img} alt="img" />
            </div>
            <div className={styles.card_body}>
                <h4 className={styles.card_title}>{title}</h4>
                <p className={styles.card_pera}>{pera}</p>
            </div>
        </div>
    );
}
