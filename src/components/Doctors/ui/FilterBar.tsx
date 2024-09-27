import { useState } from "react";
import styles from "./FilterBar.module.css";
import { FaAngleDown } from "react-icons/fa6";

export default function FilterBar() {
    const [showGender, setShowGender] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showSort, setShowSort] = useState(false);

    const toggleGender = () => {
        setShowGender(!showGender);
    };

    const toggleExperience = () => {
        setShowExperience(!showExperience);
    };

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const toggleSort = () => {
        setShowSort(!showSort);
    };

    return (
        <div className={styles.FilterBar}>
            <div className={styles.gender}>
                <div className={styles.label} onClick={toggleGender}>
                    Gender
                    <FaAngleDown className={`${styles.icon} ${showGender ? styles.rotate : ""}`} />
                </div>
                {showGender && (
                    <ul className={styles.gender_ul}>
                        <li>Male Doctor</li>
                        <li>Female Doctor</li>
                    </ul>
                )}
            </div>

            <div className={styles.experience}>
                <div className={styles.label} onClick={toggleExperience}>
                    Experience
                    <FaAngleDown className={`${styles.icon} ${showExperience ? styles.rotate : ""}`} />
                </div>
                {showExperience && (
                    <ul className={styles.experience_ul}>
                        <li>5+ Years of experience</li>
                        <li>10+ Years of experience</li>
                        <li>15+ Years of experience</li>
                        <li>20+ Years of experience</li>
                    </ul>
                )}
            </div>

            <div className={styles.all_filters} onClick={toggleFilter}>
                All Filters <FaAngleDown className={`${styles.icon} ${showFilter ? styles.rotate : ""}`} />
            </div>

            <div className={styles.reset}>
                <button>Reset Filters</button>
            </div>

            <div className={styles.sort}>
                Sort By
                <div className={styles.label} onClick={toggleSort}>
                    relevance
                    <FaAngleDown className={`${styles.icon} ${showSort ? styles.rotate : ""}`} />
                </div>
                {showSort && (
                    <ul className={styles.sort_ul}>
                        <li>Number of patient stories - High to Low</li>
                        <li>Experience - High to Low</li>
                        <li>Consultation Fee - High to Low</li>
                        <li>Consultation Fee - Low to High</li>
                    </ul>
                )}
            </div>
        </div>
    );
}
