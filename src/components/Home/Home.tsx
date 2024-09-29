import CardSlider from './CardSlider/CardSlider'
import styles from './Home.module.css'
import Search_box from './Search_box'
import Home_card from './Home_card'
import Home_card2 from './Home_card2'

import img1 from "../../assets/img/dweb_instant_video_consulation.png";
import img2 from "../../assets/img/dweb_find_doctors.png";
import img3 from "../../assets/img/dweb_surgeries.png";
import c2img1 from "../../assets/img/irregular-painful+period.png";
import c2img2 from "../../assets/img/Acne.png";
import c2img3 from "../../assets/img/top-speciality-sexology.svg";
import c2img4 from "../../assets/img/coughing.png";
import c2img5 from "../../assets/img/top-speciality-pediatric.svg";
import c2img6 from "../../assets/img/12-mental-wellness.png";

const imgs = [
    {
        img: img1,
        title: "Instant Video Consultation",
        pera: "Connect within 60 secs",
        bgColor: "#AFCFED",
    },
    {
        img: img2,
        title: "Find Doctors Near You",
        pera: "Conformed appointments",
        bgColor: "#98CBD6",
    },
    {
        img: img3,
        title: "Surgeries",
        pera: "Safe and trusted surgery center",
        bgColor: "#D5D8FC",
    },
];

const c2imgs = [
    {
        img: c2img1,
        title: "Period doubts or Pregnancy",
    },
    {
        img: c2img2,
        title: "Acne.pimple or skin issues",
    },
    {
        img: c2img3,
        title: "performance issues in bed",
    },
    {
        img: c2img4,
        title: "Cold,Cough or fever",
    },
    {
        img: c2img5,
        title: "chiled not feeling well",
    },
    {
        img: c2img6,
        title: "Depression or anxiety",
    },
];

function Home() {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.search}>
                    <Search_box />
                </div>
                <div className={styles.cards}>
                    {imgs.map((item, index) => (
                        <Home_card key={index} img={item.img} title={item.title} pera={item.pera} bgColor={item.bgColor} />
                    ))}
                </div>
                <div className={styles.consult_section}>
                    <div className={styles.consult}>
                        <div>
                            <h2>Consult top doctors online for any health concern</h2>
                            <p>Private online consultations with verified doctors in all specialists</p>
                        </div>
                        <button>View All Specialties</button>
                    </div>
                    <div className={styles.consult_card}>
                        {c2imgs.map((item, index) => (
                            <Home_card2 key={index} img={item.img} title={item.title} />
                        ))}
                    </div>
                </div>
                {/* <div className={styles.artical_section}></div> */}
            </div>
            <CardSlider />
        </>
    )
}

export default Home