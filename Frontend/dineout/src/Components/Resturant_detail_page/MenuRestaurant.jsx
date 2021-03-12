import React from 'react'
import styles from "./MenuRestaurant.module.css"

export const MenuRestaurant = ({ menuImage, menuLength }) => {
    return (
        <div className={styles.MenuRestaurant_Container}>
            <div className={styles.MenuRestaurant_Head}>Menu</div>
            <div className={styles.MenuRestaurant_Img}>
                <img src={menuImage} alt="menu Img" />
                {/* <span className={styles.menuNumber}>menu({menuLength})</span> */}
            </div>
        </div>
    )
}
