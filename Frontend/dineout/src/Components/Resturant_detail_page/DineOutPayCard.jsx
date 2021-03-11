import React from 'react'
import styles from "./DineOutPayCard.module.css"

export const DineOutPayCard = () => {
    return (
        <div className={styles.DineOutPayCard_Container}>
            <div className={styles.DineOutPayCard_IMG}>
                <img src="https://st1.dineout-cdn.co.in/images/uploads/mailer/2019/Jul/11/gp-logo.png?w=400" alt="dineout pay" />

            </div>
            <div className={styles.DineOutPayCard_info}>
                Combine any offer with Dineout Pay to <strong>save up to 10% </strong> more on your bill and also get <strong> 20%</strong> cashback.
            </div>
        </div>
    )
}
