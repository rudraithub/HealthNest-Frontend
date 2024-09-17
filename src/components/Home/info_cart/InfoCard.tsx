import React from 'react'
import styles from './InfoCard.module.css'

interface InfoCartProps {
  img: string;
  title: string,
  description: string
  className ?: string;
  info_container ? : string;
}

const InfoCart: React.FC<InfoCartProps> = ({ img, title, description , className = '', info_container='' }) => {
  return (
    <div className={styles.card_container}>
      <img className={`${styles.card_img} ${className}`} src={img} />
      <div className={`${styles.card_details} ${info_container}`}>
        <h3 className={styles.card_title}>{title}</h3>
        <p className={styles.card_description}>{description}</p>
      </div>
    </div>
  )
}

export default InfoCart