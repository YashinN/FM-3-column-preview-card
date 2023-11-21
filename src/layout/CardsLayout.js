import styles from "./CardsLayout.module.css";

const CardsLayout = ({ children }) => {
  return <section className={styles.cardsLayout}>{children}</section>;
};

export default CardsLayout;
