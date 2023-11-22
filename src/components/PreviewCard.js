import styles from "./PreviewCard.module.css";

const PreviewCard = ({ icon, colour, text, title }) => {
  return (
    <section className={styles.previewCard} style={{ backgroundColor: colour }}>
      <img src={icon} alt="car icon" className={styles.carIcon} />

      <h1>{title}</h1>
      <p>{text}</p>
      <button children className={styles.btn}>
        Learn More
      </button>
    </section>
  );
};

export default PreviewCard;
