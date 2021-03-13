import React from "react";
import styles from "./FreeOffersCard.module.css";

export const FreeOffersCard = ({ offerContent }) => {
  let [select, setSelected] = React.useState(false);
  let content = offerContent;
  let handleClick = () => {
    setSelected(true);
  };
  return (
    <div className={styles.freeOfferContainer}>
      <h4>{content.name}</h4>
      {select === true ? (
        <button onClick={handleClick} className={styles.btnSelected}>
          Selected
        </button>
      ) : (
        <button onClick={handleClick} className={styles.btnUnselected}>
          Select
        </button>
      )}
    </div>
  );
};
