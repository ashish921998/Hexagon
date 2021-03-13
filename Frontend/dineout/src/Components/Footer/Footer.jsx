import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="Footer_outer">
        <div className="Footer_inner">
          <table>
            <tr>
              {["Available in"].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
            <br />
            <tr>
              {["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
            <tr>
              {["Pune", "Kolkata", "Ahmedabad", "Chandigarh", "Goa"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
            <tr>
              {["Jaipur", "Lucknow", "Indore", "Udaipur", "Agra"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
            <tr>
              {["Vadodara", "Nagpur", "Kochi", "Surat", "Ludiana"].map(
                (item) => (
                  <td>{item}</td>
                )
              )}
            </tr>
          </table>
        </div>
        <div>
          <hr />
        </div>
        <div className="Footer_inner">
          <table>
            <tr>
              {[
                "Discover",
                "About",
                "Top Cuisines",
                "Top Facilities",
                "Top Locations",
              ].map((item) => (
                <th>{item}</th>
              ))}
            </tr>
            <br />
            <tr>
              {[
                "Trending Restaurants",
                "About us",
                "Chinese",
                "Romantic",
                "Koramangala",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Super Savers",
                "Blog",
                "Italian",
                "Fine Dining",
                "Indiranagar",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Dineout Pay",
                "Add Restaurant",
                "North Indian",
                "Fine Dining",
                "Jayanagar",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Dineout Passport",
                "Terms and conditions",
                "Kerala",
                "5 star",
                "White Field",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[
                "Contactless Dining",
                "Privacy and Policy",
                "Bengali",
                "Pure Veg",
                "Marathahalli",
              ].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
            <tr>
              {[" ", " ", "Thai", "Sea Food", "HSR Layout"].map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          </table>
        </div>
        <div>
          <hr />
        </div>
        <div className="Footer_inner">
          <div className="Footer_box">
            <div style={{ margin: "auto", width: "fit-content" }}>
              <img
                style={{ width: "130px" }}
                src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
                alt="logo"
              />
            </div>
            <div
              style={{ fontSize: "12px", textAlign: "center", color: "gray" }}
            >
              Find the best Restaurants, Deals, Discounts & Offers
            </div>
            <br />
            <div
              style={{ fontSize: "15px", textAlign: "center", color: "gray" }}
            >
              Contact: <b>+91-9212340202</b>
            </div>
            <div
              style={{
                width: "fit-content",
                margin: "auto",
                marginTop: "10px",
              }}
            >
              {[
                "https://1.bp.blogspot.com/-qdRfUNOtjkM/XeI_00z9pzI/AAAAAAAAF4E/FeD2SvVFnKUjPAKQ_cNM6-D2ahjKb0HkQCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340-2.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png",
                "https://logo-logos.com/wp-content/uploads/2016/10/Instagram_logo_icon.png",
                "https://th.bing.com/th/id/Rba9b117ff54a48bd2c403003c72f3ba0?rik=%2bSzQteWIuhTbww&riu=http%3a%2f%2fwww.pressassociation.com%2fwp-content%2fthemes%2fbridge-child%2fimages%2fTwitter_Logo_Blue.png&ehk=ZkfnOBplQQxgFBPZtDuoeAzxGfNaS25PGTylU9rfEVI%3d&risl=&pid=ImgRaw",
              ].map((item) => (
                <img
                  style={{ height: "30px", width: "30px", marginRight: "10px" }}
                  src={item}
                  alt="imm"
                />
              ))}
            </div>
            <p style={{ color: "gray", fontSize: "12px", textAlign: "center" }}>
              <b>&copy; 2017, dineout.co.in. All Rights Reserved.</b>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Footer;
