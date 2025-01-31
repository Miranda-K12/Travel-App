import styles from './Hero.module.css';
import AirPlane from '../../assets/images/airplane.svg';
import SuitCase from '../../assets/images/luggage.svg';
function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.title}>
          <img  src={AirPlane} alt='plane' />
          <h1>Ready. Set. Travel!</h1>
        <img src={SuitCase} alt='suitcase' /></div>
      <p>Explore hidden gems, immerse yourself in new cultures, and make memories that will last a lifetime. Pack your bags and let the adventure unfold.</p>
      <button className={styles.hero_button}>Expore Now</button>
    </section>
  );
}

export default Hero;
