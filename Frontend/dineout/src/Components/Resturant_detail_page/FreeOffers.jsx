import React from 'react'
import styles from "./FreeOffers.module.css"
import { FreeOffersCard } from './FreeOffersCard'

export const FreeOffers = ({ freeOffers }) => {
    let offerContent = freeOffers
    // console.log(offerContent)
    return (
        <div className={styles.FreeOffers_container}>
            <div className={styles.FreeOffers_container_head}>
                Free Offers
            </div>
            {offerContent.map((offerContent, index) => (
                <div style={{ margin: "10px 0px" }}>
                    <FreeOffersCard offerContent={offerContent} key={index} />
                </div>

            ))}
        </div>
    )
}
