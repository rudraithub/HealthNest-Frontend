import React, { useState } from 'react'
import styles from './TimeSlots.module.css'
import { WiSunrise } from "react-icons/wi";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const TimeSlots = () => {

    const dateAndTimeSlot = [
        {
            date: '26 sept',
            availableSlots: '35 slots',
            slots: {
                Morning: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM'],
                Evening: ['05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM', '07:00 PM', '07:15 PM', '07:30 PM', '07:45 PM'],
                Night: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM']
            }
        },
        {
            date: '27 sept',
            availableSlots: '35 slots',
            slots: {
                Morning: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM'],
                Evening: ['04:45 PM', '05:00 PM', '05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM', '07:00 PM', '07:15 PM', '07:30 PM', '07:45 PM'],
                Night: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM']
            }
        },
        {
            date: '28 sept',
            availableSlots: '35 slots',
            slots: {
                Morning: ['08:00 PM', '08:30 PM', '08:45 PM'],
                Evening: ['04:45 PM', '05:00 PM', '05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM', '07:00 PM', '07:15 PM', '07:30 PM', '07:45 PM'],
                Night: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM']
            }
        },
        {
            date: '29 sept',
            availableSlots: '35 slots',
            slots: {
                Morning: ['08:00 PM', '08:15 PM', '08:45 PM'],
                Evening: ['04:45 PM', '05:00 PM', '05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM', '07:00 PM', '07:15 PM', '07:30 PM', '07:45 PM'],
                Night: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM']
            }
        }, {
            date: '30 sept',
            availableSlots: '35 slots',
            slots: {
                Morning: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM'],
                Evening: ['04:45 PM', '05:00 PM', '05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM', '07:00 PM', '07:15 PM', '07:30 PM', '07:45 PM'],
                Night: ['08:00 PM', '08:15 PM', '08:30 PM', '08:45 PM']
            }
        },
        {
            date: '1 oct',
            availableSlots: '35 slots',
            slots: {
                Morning: ['08:00 PM', '08:15 PM'],
                Evening: ['04:45 PM', '05:00 PM', '05:15 PM', '05:30 PM', '05:45 PM', '06:00 PM', '06:15 PM', '06:30 PM', '06:45 PM', '07:00 PM', '07:15 PM', '07:30 PM', '07:45 PM'],
                Night: ['08:00 PM', '08:15 PM', '08:30 PM']
            }
        }
    ]

    const navigate = useNavigate()

    const [visibleDataIndex, setVisibleDataIndex] = useState(0); // Controls the starting index of the slice
    const [selectedIndex, setSelectedIndex] = useState(0); // Controls the selected date within the current slice

    const showDataCount = 3; // Number of dates to display at a time

    // Get the slice of dates based on visibleDataIndex
    const sliceData = dateAndTimeSlot.slice(visibleDataIndex, visibleDataIndex + showDataCount);

    const handleNext = () => {
        if (selectedIndex < showDataCount - 1 && selectedIndex < sliceData.length - 1) {
            // Move within the current slice
            setSelectedIndex(selectedIndex + 1);
        } else if (visibleDataIndex + showDataCount < dateAndTimeSlot.length) {
            // Move to the next slice
            setVisibleDataIndex(visibleDataIndex + showDataCount);
            setSelectedIndex(0); // Reset selectedIndex to the first item of the next slice
        }
    };

    // Handle the Previous button click
    const handlePre = () => {
        if (selectedIndex > 0) {
            // Move within the current slice
            setSelectedIndex(selectedIndex - 1);
        } else if (visibleDataIndex > 0) {
            // Move to the previous slice
            setVisibleDataIndex(visibleDataIndex - showDataCount);
            setSelectedIndex(showDataCount - 1); // Select the last item of the previous slice
        }
    };

    const handleDateClick = (index: React.SetStateAction<number>) => {
        setSelectedIndex(index);
    }

    const handelTimeSlots = () => {
        ///scroll top before navigate
        window.scrollTo(0, 0);
        navigate('/appointment')
    }

    return (
        <div className={styles.timeSlotContainer}>
            <div className={styles.timeSlotHeader}>
                <button className={styles.pre} onClick={handlePre}>&#10094;</button>
                <ul className={styles.dateContainer}>
                    {sliceData.map((item, index) => (
                        <li
                            className={selectedIndex === index ? styles.active : ''}
                            key={index}
                            onClick={() => handleDateClick(index)}>
                            {item.date}
                        </li>
                    ))}
                </ul>
                <div className={styles.slider} style={{ transform: `translateX(${selectedIndex * 100}%)` }}></div>
                <button className={styles.next} onClick={handleNext}> &#10095;</button>
            </div>
            <div className={styles.timeContainer}>
                <div className={styles.time}>
                    <div className={styles.timeText}>
                        <WiSunrise />
                        <p>Morning</p>
                    </div>
                    <div className={styles.timeSlots}>
                        {sliceData[selectedIndex].slots.Morning.map((item, index) => (
                            <button key={index} onClick={handelTimeSlots}>{item}</button>
                        ))}
                    </div>
                </div>
                <div className={styles.time}>
                    <div className={styles.timeText}>
                        <IoSunnyOutline />
                        <p>Evening</p>
                    </div>
                    <div className={styles.timeSlots}>
                        {sliceData[selectedIndex].slots.Evening.map((item, index) => (
                            <button key={index} onClick={handelTimeSlots}>{item}</button>

                        ))}
                    </div>
                </div>
                <div className={styles.time}>
                    <div className={styles.timeText}>
                        <IoMoonOutline />
                        <p>Night</p>
                    </div>
                    <div className={styles.timeSlots}>
                        {sliceData[selectedIndex].slots.Night.map((item, index) => (
                            <button key={index} onClick={handelTimeSlots}>{item}</button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeSlots