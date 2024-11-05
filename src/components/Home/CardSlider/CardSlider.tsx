import { useRef, useState } from 'react'
import Card from './Card'
import dentistImg from '../../../assets/sp-dentist@2x.jpg'
import gynecologistImg from '../../../assets/sp-gynecologist@2x.jpg'
import  pediatricianImg from '../../../assets/sp-physiotherapist@2x.jpg'
import dietitian from '../../../assets/sp-dietitian@2x.jpg'
import surgeon from  '../../../assets/sp-general-surgeon@2x.jpg'
import orthopedic from '../../../assets/sp-orthopedist@2x.jpg'

import styles from './CardSlider.module.css'

const cardList = [
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: gynecologistImg,
        title: 'Gynecologist/Obstetrician',
        description: 'Explore for women’s health, pregnancy and infertility treatments'
    },
    {
        img: dietitian,
        title: 'Dietitian/Nutrition',
        description: 'Get guidance on eating right, weight management and sports nutrition'
    },
    {
        img: surgeon,
        title: 'General surgeon',
        description: 'Need to get operated? Find the right surgeon'
    },
    {
        img: orthopedic,
        title: 'Orthopedist',
        description: 'For Bone and Joints issues, spinal injuries and more'
    },
    {
        img: pediatricianImg,
        title: 'Physiotherapist',
        description: 'Pulled a muscle? Get it treated by a trained physiotherapist'
    }
]

function CardSlider() {
    const [cards] = useState(cardList)
    const scrollRef = useRef(null);
    console.log(scrollRef)

    const cardWidth = 400; 
    const scrollAmount = cardWidth; 
  
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft -= scrollAmount; // Move left by scrollAmount
      }
    };
  
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollAmount; // Move right by scrollAmount
      }
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderText}>
                <h1>Book an appointment for an in-clinic consultation</h1>
                <p>Find experienced doctors across all specialties</p>
            </div>
            <div className={styles.cardContainer}>
                <button className={`${styles.pre}`} onClick={scrollLeft}>
                    &#10094;
                </button>
                <div className={styles.cardWrapper} ref={scrollRef}>
                {cards.map((item, index) => (
                    <Card key={index} cardImg={item.img} cardTitle={item.title} description={item.description} />
                ))}
                </div>
                <button className={`${styles.next}`} onClick={scrollRight}>
                    &#10095;
                </button>
            </div>
        </div>
    )
}

export default CardSlider