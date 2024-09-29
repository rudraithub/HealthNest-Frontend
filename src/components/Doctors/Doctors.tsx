import Search_box from "../Home/Search_box";
import styles from "./Doctors.module.css";
import FilterBar from "./ui/FilterBar";
import tick from "./tick.svg";
import Doctor from "./ui/Doctor";
import karnavati from "./karnavati-dental-care-ahmedabad-650585170c0c0.png";
import LocationSelector from "./LocationSelector";
import TimeSlots from "../TimeSlots/TimeSlots";
import { useState } from "react";

const doctor_info = [
    {
        img: karnavati,
        name: "Karnavati Dental Care",
        department: "Dentist",
        experience: 99,
        place: "bhavnagar",
        fees: 10,
        likes: 100,
        stories: 100,
    },
    {
        img: karnavati,
        name: "Karnavati Dental Care",
        department: "Dentist",
        experience: 99,
        place: "bhavnagar",
        fees: 10,
        likes: 100,
        stories: 100,
    },
    {
        img: karnavati,
        name: "Karnavati Dental Care",
        department: "Dentist",
        experience: 99,
        place: "bhavnagar",
        fees: 10,
        likes: 100,
        stories: 100,
    },
    {
        img: karnavati,
        name: "Karnavati Dental Care",
        department: "Dentist",
        experience: 99,
        place: "bhavnagar",
        fees: 10,
        likes: 100,
        stories: 100,
    },
    {
        img: karnavati,
        name: "Karnavati Dental Care",
        department: "Dentist",
        experience: 99,
        place: "bhavnagar",
        fees: 10,
        likes: 100,
        stories: 100,
    },
];

export default function Doctors() {

    // State to track which doctor's TimeSlots are open
    const [openSlots, setOpenSlots] = useState<boolean[]>(Array(doctor_info.length).fill(false));

    // Toggle the TimeSlots for a specific doctor
    const handleBookClick = (index: number) => {
        setOpenSlots((prev) => {
            // Create a new array, with the toggled value for the clicked doctor
            const updatedSlots = [...prev];
            updatedSlots[index] = !updatedSlots[index];
            return updatedSlots;
        });
    };


    return (
        <div className={styles.doctors}>
            <div className={styles.row1}>
                <div className={styles.search_box}>
                    <Search_box />
                </div>
            </div>
            <div className={styles.row2}>
                <div className={styles.filter_bar}>
                    <FilterBar />
                </div>
            </div>
            <div className={styles.main_doctors}>
                <div className={styles.left_doctors}>
                    <div className={styles.available_doctors}>
                        <h2>387 Doctors available in Bhavnagar</h2>
                        <p>
                            <img src={tick} alt="" /> Book appointment with minimum wait-time & verified doctor details
                        </p>
                    </div>
                    <div className={styles.doctorList}>
                        {doctor_info.map((doctor, index) => (
                            <div key={index}>
                                <Doctor
                                    img={doctor.img}
                                    name={doctor.name}
                                    department={doctor.department}
                                    experience={doctor.experience}
                                    place={doctor.place}
                                    fees={doctor.fees}
                                    likes={doctor.likes}
                                    stories={doctor.stories}
                                    onBookClick={() => handleBookClick(index)} // Pass index to handleBookClick
                                />
                                {openSlots[index] && (
                                    <div className={styles.timeSlotsWrapper}>
                                        <TimeSlots />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.right_doctors}>
                    <div className={styles.stickComponent}>
                        <LocationSelector />
                        <iframe
                            className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.115396211685!2d72.14651677598283!3d21.73705156307375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bd23545295f%3A0x9de380d63a961ff1!2sRudra%20IT%20Hub!5e0!3m2!1sen!2sin!4v1727409960860!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen={true} // Fix: pass boolean true here
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
