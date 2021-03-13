import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Google from "./Google";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useSelector } from "react-redux";
import cx from "classnames";

function getModalStyle() {
  const top = 45;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Navbar() {
  const isAuth = useSelector((state) => state.loginDetails.isAuth);
  const loginData = useSelector((state) => state.loginDetails.loginData);
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: "orangered",
      textAlign: "center",
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "40ch",
      },
    },
  }));
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Log In / Sign Up</h2>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
      </form>
      <button
        style={{
          width: "400px",
          height: "40px",
          backgroundColor: "orangered",
          color: "white",
          fontSize: "16px",
          margin: "10px 0px",
        }}
      >
        continue
      </button>
      <br />
      <span style={{ margin: "10px auto" }}>or login via</span>
      <Google handleClose={handleClose} />
    </div>
  );
  const dropDown_open = cx("dropDown_open", "dropDown");
  const dropDown_close = cx("dropDown_open", "dropDown");

  return (
    <div>
      <div className="fixed">
        <div className="flex">
          <img
            src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
            alt="dineout"
            style={{ width: "98px", height: "35px " }}
          />
          <div style={{ width: "210px ", margin: "1px 15px" }}>
            <span style={{ position: "absolute", padding: "8px" }}>
              <LocationOnIcon />
            </span>
            <input
              type="text"
              value="Bangalore"
              style={{
                width: "160px",
                height: "30px",
                borderRadius: "5px",
                paddingLeft: "30px",
              }}
              readonly
            />
          </div>

          <div>
            <span style={{ position: "absolute", padding: "8px" }}>
              <SearchIcon />
            </span>
            <input
              type="search"
              placeholder="Search for Restaurants cuisines locations"
              style={{
                width: "600px",
                height: "35px",
                borderRadius: "5px",
                paddingLeft: "30px",
              }}
            />
            <button className="navbtn">Search</button>
          </div>

          <div>
            {isAuth ? (
              <>
                <div className="userInfo">
                  <div className="userImg">
                    <img
                      src={loginData.imageUrl}
                      alt={loginData.name}
                      width="32px"
                    />
                  </div>
                  <div
                    className="userDropDown"
                    onClick={() => setState(!state)}
                  >
                    My account <i className="userDropDown_arrow">^</i>
                    {/* <div className={`dropDown ${state ? "dropDown_open" : ''}`}>
                      <p>Profile</p>
                      <p>Log Out</p>
                    </div> */}
                  </div>
                </div>
              </>
            ) : (
              <div>
                <button
                  className="navbtn"
                  onClick={handleOpen}
                  style={{ marginLeft: "15px" }}
                >
                  Login
                </button>
              </div>
            )}
          </div>
          <div>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </div>
          </div>
        </div>
        <hr />
        <div className="links">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/book">Book a table</Link>
          </div>
          <div>
            <Link to="/pay">Dineout Pay</Link>
          </div>
          <div>
            <Link to="/pass">Dineout Passport</Link>
          </div>
          <div>
            <Link to="/success">Booking Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
