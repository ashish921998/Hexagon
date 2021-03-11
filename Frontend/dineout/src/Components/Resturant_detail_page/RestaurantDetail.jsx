import React from 'react'
import styles from "./RestaurantDetail.module.css"

export const RestaurantDetail = ({ restaurantName, image, location, timings, cuisine, averageCost }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={image} alt={restaurantName} width="745px" height="400px" />
            </div>
            <div className={styles.container_info}>
                <div className={styles.info_header}>
                    <h1>{restaurantName}</h1>
                    <p>₹ {averageCost} | {[...cuisine.join(", ")]}</p>
                    <p>{location}</p>
                    <p>{timings}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
