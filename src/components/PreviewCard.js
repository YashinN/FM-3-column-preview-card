import styles from "./PreviewCard.module.css";

const PreviewCard = () => {
  return (
    <section className={styles.previewCard}>
      <img src="" alt="" />
      <h1>sedans</h1>
      <p>
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </p>
      <button children className={styles.btn}>
        Learn More
      </button>
    </section>
  );
};

export default PreviewCard;
