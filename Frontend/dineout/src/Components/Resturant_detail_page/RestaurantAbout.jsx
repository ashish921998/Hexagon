import React from 'react'
import styles from "./RestaurantAbout.module.css"

export const RestaurantAbout = ({ children }) => {
    return (
        <div className={styles.About_container}>
            <div>
                <h2>About</h2>
            </div>
            {children}
        </div>
    )
}
