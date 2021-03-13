import React from "react";
import styles from "./RestaurantDetail.module.css";

export const RestaurantDetail = ({
  restaurantName,
  image,
  location,
  timings,
  cuisine,
  averageCost,
}) => {
  console.log(timings);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={restaurantName} height="400px" />
      </div>
      <div className={styles.container_info}>
        <div className={styles.info_header}>
          <h1>{restaurantName}</h1>
          <p>
            ₹ {averageCost} |{" "}
            {cuisine.map((cuisine) => (
              <span> {cuisine.cuisine} </span>
            ))}
          </p>
          <p>{location}</p>
          <p>
            Time: {timings} to {timings[1]}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
