import React from "react";
import styles from "./Card.module.css";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className={styles.cardSlot}>
      <div className={styles.fontCard}>Card</div>
    </div>
  );
};

export default Card;
