import React from 'react'
import styles from "./DealsComponent.module.css"

export const DealsComponent = (props) => {
    if (props.deal === "food") {
        return (
            <div className={styles.deals_wrap}>
                <div className={styles.deal_compliment}>
                    <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2021/Feb/25/final_intermiles_logo_ctc013x.png" alt="food" width="120px" />
                </div>
                <div className={styles.offer}>
                    <div className={styles.offer_logo}>
                        <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2020/May/26/foodbill.png" alt="foodbill" height="35px" width="35px" />
                    </div>
                    <div className={styles.offer_content}>
                        <h5>50% Off Food Bill</h5>
                        <p>+1 Add on Offer(s)</p>
                        <p className={styles.offer_qty}>qty</p>
                    </div>
                    <div className={styles.offer_button}>
                        <div className={styles.offer_button_info}>
                            <span className={styles.offer_button_from}>from</span><span className={styles.offer_button_price}>₹35</span>
                        </div>
                        <button className={styles.offer_button_component}>Buy Now</button>
                        <p>1 Guest(s)</p>
                    </div>
                </div>
            </div>
        )
    }
    if (props.deal === "alcohol_icon") {
        return (
            <div className={styles.deals_wrap} style={{ background: "linear-gradient(to right, #ffe8c4 0%, #ffffff 100%)" }}>
                <div className={styles.deal_compliment}>
                    <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2021/Feb/25/frame_22243x.png" alt="food" width="120px" />
                </div>
                <div className={styles.offer}>
                    <div className={styles.offer_logo}>
                        <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2020/May/26/alchol_icon.png" alt="foodbill" height="35px" width="35px" />
                    </div>
                    <div className={styles.offer_content}>
                        <h5>50% Off Food Bill</h5>
                        <p>+1 Add on Offer(s)</p>
                        <p className={styles.offer_qty}>qty</p>
                    </div>
                    <div className={styles.offer_button}>
                        <div className={styles.offer_button_info}>
                            <span className={styles.offer_button_from}>from</span><span className={styles.offer_button_price}>₹35</span>
                        </div>
                        <button className={styles.offer_button_component}>Buy Now</button>
                        <p>1 Guest(s)</p>
                    </div>
                </div>
            </div>
        )
    }
    if (props.deal === "buffet_Icon") {
        return (
            <div className={styles.deals_wrap} style={{ background: "linear-gradient(to right, #def2a8 0%, #ffffff 100%)" }}>
                {/* <div className={styles.deal_compliment}>
                    <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2021/Feb/25/final_intermiles_logo_ctc013x.png" alt="food" width="120px" />
                </div> */}
                <div className={styles.offer}>
                    <div className={styles.offer_logo}>
                        <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2020/May/26/buffeticon.png" alt="buffet_Icon" height="35px" width="35px" />
                    </div>
                    <div className={styles.offer_content}>
                        <h5>50% Off Lunch Buffet</h5>
                        {/* <p>+1 Add on Offer(s)</p> */}
                        <p className={styles.offer_qty}>qty</p>
                    </div>
                    <div className={styles.offer_button}>
                        <div className={styles.offer_button_info}>
                            <span className={styles.offer_button_from} style={{ marginLeft: "10px" }}>from</span><span className={styles.offer_button_price}>₹350</span>
                        </div>
                        <button className={styles.offer_button_component}>Buy Now</button>
                        <p>1 Guest(s)</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}
