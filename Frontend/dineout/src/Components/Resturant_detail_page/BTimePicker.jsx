import React from 'react'
import { Tabs, Tab } from "@material-ui/core"
import styles from "./BTimePicker.module.css"

export const BTimePicker = (props) => {
    
    const [selectedTab, setSelectedTab] = React.useState(0)

    const slotArray = [
        {
            time: "12:00",
            timeStr: "12:00",
            type: 1
        },
        {
            time: "12:30",
            timeStr: "12:30",
            type: 1
        },
        {
            time: "01:00",
            timeStr: "13:00",
            type: 1
        },
        {
            time: "01:30",
            timeStr: "13:30",
            type: 1
        },
        {
            time: "02:00",
            timeStr: "13:30",
            type: 1
        },
        {
            time: "19:00",
            timeStr: "7:00",
            type: 2
        },
        {
            time: "19:30",
            timeStr: "7:00",
            type: 2
        },
        {
            time: "20:00",
            timeStr: "8:00",
            type: 2
        },
        {
            time: "20:30",
            timeStr: "8:30",
            type: 2
        },
        {
            time: "21:00",
            timeStr: "8:30",
            type: 2
        }
    ]
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return (
        <div>
            <Tabs value={selectedTab} onChange={handleChange}>
                <Tab label="Lunch" ></Tab>
                <Tab label="Dinner" ></Tab>
            </Tabs>
            {
                selectedTab === 0 && <div>
                    {slotArray.map((item, index) => item.type === 1 ? <button id={index} className={styles.tabs_btn} value={item.time} onClick={props.handletime}>{item.time} PM</button> : null)}
                </div>
            }
            {
                selectedTab === 1 && <div>
                    {slotArray.map((item, index) => item.type === 2 ? <button id={index} className={styles.tabs_btn} value={item.time} onClick={props.handletime}>{item.time} PM</button> : null)}
                </div>
            }
        </div>
    )
}
