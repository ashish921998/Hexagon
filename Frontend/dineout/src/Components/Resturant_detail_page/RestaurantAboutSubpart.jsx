import React from 'react'
import styles from "./RestaurantAboutSubpart.module.css"

export const RestaurantAboutSubpart = (props) => {
    console.log(props.cuisine, "cuisines")
    if (props.type === "cuisine") {
        return (
            <div className={styles.subPart_container}>
                <div className={styles.subPar_logo}>
                    <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jun/19/group_30.png" alt="cuisine" />
                </div>
                <div className={styles.subpart_info}>
                    <h4>CUISINE</h4>
                    <p>{props.cuisine.join(" , ")}</p>
                </div>
            </div>
        )
    }
    if (props.type === "tag") {
        return (
            <div className={styles.subPart_container}>
                <div className={styles.subPar_logo}>
                    <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jun/19/group_5.png" alt="type" />
                </div>
                <div className={styles.subpart_info}>
                    <h4>TAGS</h4>
                    <p>{props.cuisine.join(" , ")}</p>
                </div>
            </div>
        )
    }
}
