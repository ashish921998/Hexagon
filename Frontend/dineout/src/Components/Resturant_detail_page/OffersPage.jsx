import React from 'react'
import { DealsComponent } from './DealsComponent'
import { DineOutPayCard } from './DineOutPayCard'
import { FreeOffers } from './FreeOffers'
import styles from "./OffersPage.module.css"
export const OffersPage = ({ freeOffers }) => {
    let offersLength = freeOffers.length
    return (
        <div className={styles.offerContainer}>
            <div className={styles.offerMenu}>
                <ul>
                    <li><a href="#">Overview</a></li>
                    <li><a href="#deals">Offers({offersLength})</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div className={styles.deal}>
                <div className={styles.deal_heading}>Select an offer or Deal</div>
                <div className={styles.deal_tag}>
                    <h3>Deals</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: "wrap" }}>
                    <DealsComponent deal={"food"} id="deals" />
                    <DealsComponent deal={"alcohol_icon"} />
                    <DealsComponent deal={"buffet_Icon"} />
                </div>
            </div>
            <div>
                <DineOutPayCard />
            </div>
            <div>
                <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2020/Jan/21/hdfc_686x132.jpg" alt="hdfc offer" style={{ width: "100%" }} />
            </div>
            <div>
                {freeOffers.length > 0 && <FreeOffers freeOffers={freeOffers} />}
            </div>
        </div>
    )
}
