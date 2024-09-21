import { useState, useEffect } from "react";
import img from "../../assets/img/img.png";
import book from "../../assets/img/book.png";
import bs from "../../assets/img/bs.png";
import hr from "../../assets/img/hr.png";
import bp from "../../assets/img/bp.png";
import bpbcg from "../../assets/img/bpbcg.png";
import CalendarComponent from "./CalendarComponent";
import Navbar from "./Navbar";
import PatientHeader from "./PatientHeader";
import styles from "./Patient.module.css";

export default function Patient() {
    // State for user health metrics and levels
    const [bloodSugar, setBloodSugar] = useState(80);
    const [bloodSugarLevel, setBloodSugarLevel] = useState("Normal");

    const [heartRate, setHeartRate] = useState(98);
    const [heartRateLevel, setHeartRateLevel] = useState("Normal");

    const [bloodPressure, setBloodPressure] = useState("102/72");
    const [bloodPressureLevel, setBloodPressureLevel] = useState("Normal");

    const [height, setHeight] = useState(186);
    const [weight, setWeight] = useState(90);
    const [bloodType, setBloodType] = useState("O+");

    const [appointment, setAppointment] = useState({
        date: "August 18,2024",
        doctor: "Dr. Ritesh",
    });

    const [prescriptions, setPrescriptions] = useState([
        "There are many variations of passages of Lorem Ipsum available...",
        "There are many variations of passages of Lor...",
    ]);

    // Effect to mimic dynamic data fetching or user updates
    useEffect(() => {
        // You can fetch or update user/appointment data here, for example using an API request
    }, []);

    return (
        <div className={styles["body"]}>
            <div className={styles["container"]}>
                <Navbar />
                <main>
                    <PatientHeader />
                    <div className={styles["main"]}>
                        <div className={styles["main-body"]}>
                            <div className={styles["heading"]}>
                                <h2>Dashboard Overview</h2>
                            </div>
                            <div className={styles["main-section"]}>
                                <div className={styles["left-section"]}>
                                    <div className={styles["main-left-col"]}>
                                        <div className={styles["main-left-row1"]}>
                                            <div className={styles["section1"]}>
                                                <div className={styles["section1-left"]}>
                                                    <h2>
                                                        <span>Hello</span>, Keval Makwana,
                                                    </h2>
                                                    <p>
                                                        Have a nice day and don’t forget to <br /> take care of your health!
                                                    </p>
                                                    <button type="button">Learn More &emsp; &gt;</button>
                                                </div>
                                                <div className={styles["backgroundImage"]}>
                                                    <img src={img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles["main-left-row2"]}>
                                            <div className={styles["middle-col1"]}>
                                                {/* Blood Sugar Section */}
                                                <div className={styles["section2"]}>
                                                    <div className={styles["section2-row1"]}>
                                                        <img src={bs} className={styles["measure-imgs"]} alt="" />
                                                        <h3>Blood Sugar</h3>
                                                    </div>
                                                    <div className={styles["section2-row2"]}>
                                                        <div className={styles["count-cont"]}>
                                                            {/* <div className={styles["count"]}>{bloodSugar}</div> */}
                                                            <div className={styles["count"]}>
                                                                <input type="number" value={bloodSugar} />
                                                            </div>
                                                            <div className={styles["measure"]}>mg&#47;dl</div>
                                                        </div>
                                                        <div className={styles["bs-level"]}>{bloodSugarLevel}</div>
                                                    </div>
                                                </div>

                                                {/* Heart Rate Section */}
                                                <div className={styles["section3"]}>
                                                    <div className={styles["section2-row1"]}>
                                                        <img src={hr} className={styles["measure-imgs"]} alt="" />
                                                        <h3>Heart Rate</h3>
                                                    </div>
                                                    <div className={styles["section2-row2"]}>
                                                        <div className={styles["count-cont"]}>
                                                            {/* <div className={styles["count"]}>{heartRate}</div> */}
                                                            <div className={styles["count"]}>
                                                                <input type="number" value={heartRate} />
                                                            </div>
                                                            <div className={styles["measure"]}>bpm</div>
                                                        </div>
                                                        <div className={styles["hr-level"]}>{heartRateLevel}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles["middle-col2"]}>
                                                {/* Blood Pressure Section */}
                                                <div className={styles["section4"]}>
                                                    <div className={styles["section4-row1"]}>
                                                        <img src={bp} className={styles["measure-imgs"]} alt="" />
                                                        <h3>
                                                            Blood <br /> Pressure
                                                        </h3>
                                                    </div>
                                                    <div className={styles["section4-row2"]}>
                                                        <div className={styles["count-cont"]}>
                                                            {/* <div className={styles["count"]}>{bloodPressure.split("/")[0]}</div> */}
                                                            {/* <div className={styles["count"]}>{bloodPressure.split("/")[0]}</div> */}
                                                            {/* <div className={styles["measure"]}>&#47; {bloodPressure.split("/")[1]} mmhg</div> */}
                                                            <div className={styles["count"]}>
                                                                <input type="number" value={bloodPressure.split("/")[0]} />
                                                            </div>
                                                            <div className={styles["measure"]}>&#47;</div>
                                                            <div className={styles["measure"]}>
                                                                <input type="number" value={bloodPressure.split("/")[1]} />
                                                            </div>
                                                            <div className={styles["measure"]}> mmhg</div> 
                                                        </div>
                                                    </div>
                                                    <div className={styles["section4-row3"]}>
                                                        <div className={styles["bp-level"]}>{bloodPressureLevel}</div>
                                                        {/* <input type="text"  className={styles["bp-level"]} value={bloodPressureLevel} /> */}

                                                    </div>
                                                    <img src={bpbcg} alt="" />
                                                </div>
                                            </div>

                                            <div className={styles["middle-col3"]}>
                                                {/* Height and Weight Section */}
                                                <div className={styles["section5"]}>
                                                    <div className={styles["section5-row"]}>
                                                        <h3>Blood</h3>
                                                        {/* <h2>{bloodType}</h2> */}
                                                        <h2>
                                                            <input type="text" value={bloodType}/>
                                                        </h2>
                                                    </div>
                                                    <hr />
                                                    <div className={styles["section5-row"]}>
                                                        <h3>Height</h3>
                                                        {/* <h2>{height}cm</h2> */}
                                                        <h2>
                                                            <input type="text" value={height} /> cm
                                                        </h2>
                                                    </div>
                                                    <hr />
                                                    <div className={styles["section5-row"]}>
                                                        <h3>Weight</h3>
                                                        {/* <h2>{weight}kg</h2> */}
                                                        <h2>
                                                            <input type="text" value={weight}/> kg
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={styles["main-left-row3"]}>
                                            <div className={styles["section6"]}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Section */}
                                <div className={styles["right-section"]}>
                                    <div className={styles["right-section-col"]}>
                                        <div className={styles["section7"]}></div>
                                        <div className={styles["section8"]}>
                                            <CalendarComponent />
                                        </div>
                                        <div className={styles["section9"]}>
                                            <div className={styles["section9-row1"]}>
                                                <h4>Meditation</h4>
                                            </div>
                                            <div className={styles["section9-row2"]}>
                                                <h5>5:00PM - 6:00PM</h5>
                                                <h5>Coach: Rock Lee</h5>
                                            </div>
                                        </div>
                                        <div className={styles["section10"]}>
                                            <h2>Doctor’s prescription</h2>
                                            <ul>
                                                {prescriptions.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className={styles["footer"]}>
                            <div className={styles["footer-row"]}>
                                <div className={styles["section11"]}>
                                    <h6>Upcoming Appointment</h6>
                                    <div className={styles["current-date"]}>
                                        <p>{appointment.date}</p>
                                    </div>
                                    <p>Consultation with {appointment.doctor}</p>
                                </div>
                                <div className={styles["section12"]}>
                                    <h6>BOOK APPOINTMENT</h6>
                                    <img src={book} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
