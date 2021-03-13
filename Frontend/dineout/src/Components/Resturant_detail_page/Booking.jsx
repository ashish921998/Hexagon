import React from "react";
import styles from "./Booking.module.css";
import DatePicker from "./Datepicker";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BTimePicker } from "./BTimePicker";
import axios from "axios";

export const Booking = (props) => {
  console.log(props.id);
  const details = useSelector((store) => store.loginDetails.loginData);
  const userdetails = useSelector((store) => store.userDetails.userData);
  const history = useHistory();
  let userId = "";
  for (let key in userdetails) {
    if (userdetails[key].googleId === details.googleId) {
      userId = userdetails[key]._id;
    } else {
      console.log(userdetails[key].name);
    }
  }
  console.log(userdetails);
  console.log(details.googleId, details.email);
  const initialData = {
    name: details.name,
    mobile: "",
    email: details.email,
    special: "",
  };
  const [date, setDate] = React.useState("");
  const [total, setTotal] = React.useState("");
  const [guestCount, setGuestCount] = React.useState(0);
  const [visitor, setVisitor] = React.useState(initialData);
  const [timearr, setTimearr] = React.useState("");
  const selectedDay = (val) => {
    let date = val.toString().split(" ");
    console.log(date);
    setDate(`${date[0]}, ${date[2]} ${date[1]} ${date[3]}`);
  };
  console.log(date);

  const handleVisitorCount = (operation) => {
    console.log(operation);
    if (operation === "+") {
      setGuestCount(guestCount + 1);
    }
    if (operation === "-") {
      if (guestCount > 0) {
        setGuestCount(guestCount - 1);
      }
    }
  };
  const handletime = (e) => {
    setTimearr(e.target.value);
  };
  const visitorData = (e) => {
    let { name, value } = e.target;
    setVisitor({ ...visitor, [name]: value });
  };
  let cont = {};
  const handlecontinue = (e) => {
    cont["name"] = visitor.name;
    cont["email"] = visitor.email;
    cont["restaurantname"] = props.name;
    cont["timings"] = [date, timearr];
    cont["guest"] = guestCount;
    cont["specialRequest"] = visitor.special;
    cont["mobile"] = visitor.mobile;
    console.log(cont);

    return axios
      .post("http://localhost:6878/booking", cont)
      .then((res) => history.push(`/success`));
  };
  console.log(visitor);
  console.log(timearr);
  return (
    <div className={styles.container}>
      <div className={styles.container_head}>Book your table</div>
      <div className={styles.content_head}>
        <div className={styles.calender_block}>
          <p>Select Date</p>
          <div className={styles.calender_block_head}>
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
          <BTimePicker handletime={handletime} />
        </div>
        <div className={styles.guest_details}>
          <p>Select Guest/s</p>
          <p>Choose the number of going to guests going</p>
          <div className={styles.guest_details_head}>
            <div className={styles.guest_details_label}>Guests:</div>
            <br />
            <div className={styles.guest_details_count}>
              <div
                symbol="-"
                onClick={() => handleVisitorCount("-")}
                className={styles.visitorCountOperation}
              >
                -
              </div>
              <div className={styles.visitorsCount}>{guestCount}</div>
              <div
                symbol="+"
                onClick={() => handleVisitorCount("+")}
                className={styles.visitorCountOperation}
              >
                +
              </div>
            </div>
          </div>
          <p>Enter Guest Details</p>
          <div className={styles.guest_details_input}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={details.name}
              onChange={visitorData}
            />
            <input
              type="text"
              placeholder="Mobile Number"
              name="mobile"
              value={visitor.mobile}
              onChange={visitorData}
            />
            <input
              type="text"
              placeholder="Email Address (Optional)"
              name="email"
              value={details.email}
              onChange={visitorData}
            />
            <input
              type="text"
              placeholder="Special Request (Optional)"
              name="special"
              value={visitor.special}
              onChange={visitorData}
            />
            {guestCount > 0 && (
              <button
                className={styles.data_collection}
                onClick={handlecontinue}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
