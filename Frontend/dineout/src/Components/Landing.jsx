import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "400px",
    },
  },
}));
function Landing() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <img
          src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/23/webherobannergirffinal.jpg"
          alt="img"
          style={{ width: "100% ", margin: "130px auto" }}
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/25/foodbill3xfinal.png"
              alt="hi"
              className={styles.gridImg}
            />
          </Link>
          <Link to="/">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/25/alcoholbill3xfinal.png"
              alt="hi"
              className={styles.gridImg}
            />
          </Link>
          <Link to="/">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/25/buffet3xfinal.png"
              alt="hi"
              className={styles.gridImg}
            />
          </Link>
          <Link to="/">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/25/buffet3xfinal.png"
              alt="hi"
              className={styles.gridImg}
            />
          </Link>
          <Link to="/">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/25/alldeal3xfinal.png"
              alt="hi"
              className={styles.gridImg}
            />
          </Link>
          <Link to="/">
            <img
              src="https://im1.dineout.co.in/images/uploads/misc/2021/Feb/25/luxury_dining_final.png"
              alt="hi"
              className={styles.gridImg}
            />
          </Link>
        </div>
        <div
          style={{
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src="https://im1.dineout.co.in/images/uploads/misc/2021/Mar/2/hdfcweb.jpg?tr=tr:n-xlarge"
            alt="hdfc"
            className={styles.hdfc}
          />
          <img
            src="https://im1.dineout.co.in/images/uploads/misc/2021/Mar/2/intermiles.png?tr=tr:n-xlarge"
            alt="hdfc"
            className={styles.hdfc}
          />
          <img
            src="https://im1.dineout.co.in/images/uploads/misc/2021/Mar/2/homepage_bannerkingfisherwebsite.png?tr=tr:n-xlarge"
            alt="hdfc"
            className={styles.hdfc}
          />
        </div>

        <div className={styles.cats}>
          <Link to="/">
            <div className={styles.linkbtn}>
              <div style={{ display: "flex" }}>
                <img
                  src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/micro_brewery.png"
                  alt="hi"
                />
              </div>
              <p>Micro Breweries</p>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.linkbtn}>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pocket_friendly.png"
                alt="hi"
              />
              <p>Pocket Friendly</p>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.linkbtn}>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/romantic_rooftop.png"
                alt="hi"
              />
              <p>Romantic Rooftops</p>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.linkbtn}>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/new_on_dineout.png"
                alt="hi"
              />
              <p>New on Dineout</p>
            </div>
          </Link>
        </div>
        <div className={styles.cats}>
          <Link to="/">
            <div className={styles.linkbtn}>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                alt="hi"
              />
              <p>Buffet</p>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.linkbtn}>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pure_veg.png"
                alt="hi"
              />
              <p>Pure Veg</p>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.linkbtn}>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/pet_friendly.png"
                alt="hi"
              />
              <p>Pet Friendly</p>
            </div>
          </Link>
          <Link to="/">
            <div className={styles.linkbtn}>
              <img
                src="https://im1.dineout.co.in/images/uploads/misc/2020/May/8/vest_bars.png"
                alt="hi"
              />
              <p>Best Bars</p>
            </div>
          </Link>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "50px 50px" }}>
          <h4>Explore more food with</h4>
          <br />
          <div style={{ display: "flex" }}>
            <img
              src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
              alt="dineout"
            />
            <p
              style={{
                color: "orangered",
                fontSize: "20px",
                marginLeft: "50px",
              }}
            >
              Mobile App
            </p>
          </div>
          <p>
            Download the Dineout App to get latest updates on offers, deals and{" "}
            <br />
            trending restaurants. Also get Rs.200 in your Dineout Wallet.
          </p>
          <div style={{ display: "flex" }}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Mobile" />
            </form>
            <button className={styles.navbtn}>send link</button>
          </div>
          <div style={{ display: "flex" }}>
          <img
            src="https://st1.dineout-cdn.co.in/images/uploads/mailer/2019/Dec/18/google-playstore.png"
            alt="dineout"
          />
           <img
            src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Dec/18/app-store.png"
            alt="dineout"
          />
          </div>
        </div>
        <div style={{ margin: "50px 50px" }}>
          <img
            src="https://im1.dineout.co.in/images/uploads/misc/2019/Dec/4/screenshot.png"
            alt="dineout"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
