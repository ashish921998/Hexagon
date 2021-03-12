import React from "react";
// import { useState } from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Google from "./Google";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

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
      <Google />
    </div>
  );
  return (
    <div>
      <div className={styles.fixed}>
        <div className={styles.flex}>
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
            <button className={styles.navbtn}>Search</button>
          </div>

          <div>
            {state ? (
              <div>My account</div>
            ) : (
              <div>
                <button
                  className={styles.navbtn}
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
        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/book">Book a table</Link>
          <Link to="/pay">Dineout Pay</Link>
          <Link to="/pass">Dineout Passport</Link>
          <Link to="/super">Super Saver</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;