/* eslint-disable react/prop-types */

import destinationLists from './data'; 
import styles from "../Destinations/Destinations.module.css";  

function Destinations() {
  return (
    <div className={styles.card}>
      <h2>Find your Perfect Place</h2>
      <DestinationItem destinationLists={destinationLists} />
    </div>
  );
}

export default Destinations;

// eslint-disable-next-line react/prop-types


function DestinationItem({ destinationLists }) {
  return (
    <div className={styles.card_items}>
      {destinationLists.map((place) => {
        return (
          <div key={place.id} className={styles.destination_card}>
            <img src={place.image} alt={place.place} />
            <div className={styles.card_text}>
              <div className={styles.card_title}>
                <h3>{place.place}</h3>
                <div className={styles.card_features}>
                  <p>{place.price}</p>
                  <p>{place.days}</p>
                </div>
              </div>
              <p>{place.description}</p>
              <button>Discover More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
