import { useRef, useState } from 'react'
import Card from './Card'
import dentistImg from '../../../assets/sp-dentist@2x.jpg'
import styles from './CardSlider.module.css'

const cardList = [
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    },
    {
        img: dentistImg,
        title: 'Dentist',
        description: 'Teething troubles? Schedule a dental checkup'
    }
]

function CardSlider() {
    const [cards] = useState(cardList)
    const scrollRef = useRef(null);
    console.log(scrollRef)

    const cardWidth = 300; 
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