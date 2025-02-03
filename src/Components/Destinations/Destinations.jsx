/* eslint-disable react/prop-types */

import { useState } from 'react';
import destinationLists from './data'; 
import styles from './Destinations.module.css';
import LocationIcon from '../../assets/images/place.svg';
import FoodIcon from '../../assets/images/food.svg';
import Date from '../../assets/images/date.svg';
import Activity from '../../assets/images/activity.svg';
import Hotel from '../../assets/images/hotel.svg';
function Destinations() {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h2>Find your Perfect Place</h2>
        <img src={LocationIcon} alt='location_icon' className={styles.location_icon} />
      </div>
      <DestinationItem destinationCard={destinationLists} />
    </div>
  );
}

export default Destinations;

function DestinationItem({ destinationCard }) {
  const [selectedId, setSelectedId] = useState(null); 
  const handleCardClick = (id) => {
    setSelectedId(selectedId === id ? null : id);  
  };

  return (
    <div className={styles.card_items}>
      {destinationCard.map((place) => {
        const isSelected = place.id === selectedId;  
        return (
          <div
            key={place.id}
            className={`${styles.destination_card} ${isSelected ? styles.selected : ''}`} 
            onClick={() => handleCardClick(place.id)}  
          >
            {!isSelected && (
              <>
                <img src={place.image} alt={place.place}  />
                <div className={styles.card_text}>
                  <div className={styles.card_title}>
                    <h3>{place.place}</h3>
                    <div className={styles.card_features}>
                      <p>{place.price}</p>
                      <p>{place.days}</p>
                    </div>
                  </div>
                  <p>{place.description}</p>
                  <button>Find more</button>
                </div>
              </>
            )}

            {isSelected && (
              <div className={styles.card_details}>
                <img src={place.image} alt={place.place} />
                <div>
                  <img src={Hotel} alt='hotel'/>
                  <p>Hotel:{place.accommodation}</p>
                  <img src={Hotel} alt='hotel'/>
                </div>
                <div>
                  <img src={Activity} alt='Activity'/>
                  <p>{place.activities.join(", ")}</p>
                   <img src={Activity} alt='Activity'/>
                </div>
                <div>
                   <img src={Date} alt='date' />
                  <p>Best time to visit:{place.best_time_to_visit}</p>
                   <img src={Date} alt='date' />
                </div>
                <div>
                   <img src={FoodIcon} alt='food'/>
                  <p>{place.cuisine}</p>
                  <img src={FoodIcon} alt='food' />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}