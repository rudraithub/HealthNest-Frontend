import React, { useState, useEffect } from "react";
import styles from "./CalendarComponent.module.css";

const CalendarComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const [startDay, setStartDay] = useState(0);
    const today = new Date(); // Get today's date

    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // 1-indexed month
        const days = new Date(year, month, 0).getDate();

        const firstDayOfMonth = new Date(year, currentDate.getMonth(), 1).getDay();
        setStartDay(firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); // Adjust starting day (Mon-Sun)

        const daysArray = Array.from({ length: days }, (_, i) => i + 1);
        setDaysInMonth(daysArray);
    }, [currentDate]);

    const monthName = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();

    // Check if the displayed month and year are the same as today's month and year
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === currentDate.getMonth();
    const currentDay = isCurrentMonth ? today.getDate() : null;

    return (
        <div className={styles["calendar"]}>
            {/* Calendar Header */}
            <div className={styles["header"]}>
                <span className={styles["month"]}>
                    {monthName.toUpperCase()} {year}
                </span>
                <div className={styles["navigation"]}>
                    <div className={styles["navigation-div"]}>
                        <button
                            className={styles["navButton"]}
                            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
                        >
                            &lt;
                        </button>
                    </div>
                    <div className={styles["navigation-div"]}>
                        <button
                            className={styles["navButton"]}
                            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
            <hr className={styles["calendar-hr"]} />
            {/* Weekdays */}
            <div className={styles["weekdays"]}>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
            </div>

            {/* Days of the Month */}
            <div className={styles["days"]}>
                {/* Empty spaces for starting days */}
                {Array.from({ length: startDay }, (_, i) => (
                    <span key={`empty-${i}`} className={styles["empty"]}></span>
                ))}
                {daysInMonth.map((day) => (
                    <span key={day} className={`${styles["day"]} ${day === currentDay ? styles["activeDay"] : ""}`}>
                        {day}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default CalendarComponent;
