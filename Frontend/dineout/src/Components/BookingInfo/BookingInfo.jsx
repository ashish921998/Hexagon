import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../../Redux/User/actionTypes";
import { useParams } from "react-router";

import "./BookingInfo.css";
import { v4 as uuid } from "uuid";
const BookingInfo = () => {
  const [restdata, setRestdata] = React.useState([]);

  const { name } = useParams();
  console.log(name);

  React.useEffect(() => {
    return axios
      .get("http://localhost:6878/booking")
      .then((res) => setRestdata(res.data.data));
  }, []);
  return (
    <div style={{ marginTop: "130px", marginBottom: "30px" }}>
      {restdata.map((item) => {
        return (
          <>
            <div
              style={{
                width: "50%",
                margin: "auto",
                height: "600px",
                marginTop: "10px",
                marginBottom: "30px",
              }}
            >
              <div className="rest_name">{item.restaurantname}</div>
              <div className="details_box1">
                <div style={{ fontSize: "28px" }}>Guest Details</div>
                <br />
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <p>Guest Name</p>
                    <p>Phone No</p>
                    <p>Email Id</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <p>{item.name}</p>
                    <p>{item.mobile}</p>
                    <p>{item.email}</p>
                  </div>
                </div>
              </div>
              <div className="details_box2">
                <div style={{ fontSize: "28px" }}>Booking Summary</div>
                <br />
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <p>Table Status - Confirmed</p>
                    <p>Date & Time</p>
                    <p>Guest Count</p>
                    <p>Booking Id</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <p>Your Reservation is Confirmed.Happy Dining!</p>
                    <p>{`${item.timings[0]} at ${item.timings[1]}`}</p>
                    <p>{item.guest}</p>
                    <p>{uuid()}</p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
};

export { BookingInfo };
