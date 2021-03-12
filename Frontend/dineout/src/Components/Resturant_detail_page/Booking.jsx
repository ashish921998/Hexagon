import React from 'react'
import styles from "./Booking.module.css"
import DatePicker from './Datepicker'

import { BTimePicker } from './BTimePicker'

const initialData = {
    name: "Ranjth",
    mobile: "",
    email: "",
    special: ""
}

export const Booking = () => {
    // const [month, setMonth] = React.useState("")
    // const [day, setDay] = React.useState("")
    const [date, setDate] = React.useState("")
    // const [year, setYear] = React.useState("")
    const [guestCount, setGuestCount] = React.useState(0)
    const [visitor, setVisitor] = React.useState(initialData)

    const selectedDay = (val) => {
        // console.log(val)
        let date = val.toString().split(" ")
        console.log(date)
        // setMonth(date[1])
        // setYear(date[3])
        setDate(`${date[0]}, ${date[2]} ${date[1]} ${date[3]}`)
        // setDay(date[0])
    }
    console.log(date)

    const handleVisitorCount = (operation) => {
        console.log(operation)
        if (operation === "+") {
            setGuestCount(guestCount + 1)
        }
        if (operation === "-") {
            if (guestCount > 0) {
                setGuestCount(guestCount - 1)
            }
        }
    }

    const visitorData = (e) => {
        let { name, value } = e.target
        setVisitor({ ...visitor, [name]: value })
    }
    return (
        <div className={styles.container}>
            <div className={styles.container_head}>
                Select an Offer or Deal
            </div>
            <div className={styles.content_head}>
                <div className={styles.calender_block}>
                    <p>Select Date</p>
                    <div className={styles.calender_block_head}>
                        {/* <div className={styles.month_name}>
                            <div className={styles.month}>{month}</div>
                            <img src="https://st1.dineout-cdn.co.in/images/uploads/misc/2020/Feb/14/calendar-img.png" alt="calender-logo" width='30px' />
                        </div> */}
                        <div className={styles.calender_block}>
                            <DatePicker getSelectedDay={selectedDay} />
                        </div>
                    </div>
                </div>
                <div className={styles.time_head}>
                    <p>Time</p>
                    <p>Choose an available time slot</p>
                </div>
                <div className={styles.slots_header}>
                    <BTimePicker />
                </div>
                <div className={styles.guest_details}>
                    <p>Select Guest/s</p>
                    <p>Choose the number of going to guests going</p>
                    <div className={styles.guest_details_head}>
                        <div className={styles.guest_details_label}>
                            Guests:
                        </div>
                        <br />
                        <div className={styles.guest_details_count}>
                            <div symbol="-" onClick={() => handleVisitorCount("-")} className={styles.visitorCountOperation}>-</div>
                            <div className={styles.visitorsCount}>
                                {guestCount}
                            </div>
                            <div symbol="+" onClick={() => handleVisitorCount("+")} className={styles.visitorCountOperation}>+</div>
                        </div>
                    </div>
                    <p>Enter Guest Details</p>
                    <div className={styles.guest_details_input}>
                        <input type="text" placeholder="Name" name="name" value={visitor.name} onChange={visitorData} />
                        <input type="text" placeholder="Mobile Number" name="mobile" value={visitor.mobile} onChange={visitorData} />
                        <input type="text" placeholder="Email Address (Optional)" name="email" value={visitor.email} onChange={visitorData} />
                        <input type="text" placeholder="Special Request (Optional)" name="special" value={visitor.special} onChange={visitorData} />
                        {guestCount > 0 && <button className={styles.data_collection}>Continue</button>}
                    </div>
                    {/* <div></div> */}
                </div>
            </div>
        </div >
    )
}

