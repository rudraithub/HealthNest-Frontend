import React, { useState } from 'react';
import { Search, Navigation2 } from 'lucide-react';
import styles from './LocationSelector.module.css';

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const locations = ['Satellite', 'Maninagar', 'Navrangpura', 'Naranpura Vistar', 'Ambawadi'];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Provide current location to see Dentist near you</h2>
      <p className={styles.subtitle}>
        You are seeing results from ahmedabad. See results near you
      </p>
      <div className={styles.locationButtons}>
        {locations.map((location) => (
          <button
            key={location}
            className={`${styles.button} ${selectedLocation === location ? styles.selected : ''}`}
            onClick={() => setSelectedLocation(location)}
          >
            {location}
          </button>
        ))}
      </div>
      <div className={styles.actionButtons}>
        <button className={`${styles.button} ${styles.outlineButton}`}>
          <Search className={styles.icon} />
          Search Location
        </button>
        <button className={styles.button}>
          <Navigation2 className={styles.icon} />
          Current Location
        </button>
      </div>
    </div>
  );
};

export default LocationSelector;