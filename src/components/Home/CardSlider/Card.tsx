import React from 'react';
import styles from './Card.module.css';
import { useNavigate } from 'react-router-dom';

// Define the interface for the props
interface CardProps {
  cardImg: string;
  cardTitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ cardImg, cardTitle, description }) => {
  const navigate = useNavigate()
  const handelNavigate = () => {
    window.scroll(0,0)
    navigate('/doctors')
  }
  return (
    <div className={styles.card} onClick={handelNavigate}>
      <div className={styles.cardImg}>
        <img src={cardImg} alt={cardTitle} />
      </div>
      <div className={styles.cardText}>
        <h4>{cardTitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
