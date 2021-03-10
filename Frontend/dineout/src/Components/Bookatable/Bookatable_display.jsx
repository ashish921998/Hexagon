import React from "react";
import "./Bookatable_display.css";

const Tabledisplaydata = (props) => {
  console.log(props);
  const { restaurantData } = props;
  console.log(restaurantData);
  return (
    <>
      <div>
        <h2 style={{ marginLeft: "20px" }}>
          Best Restaurants Near Me in Bangalore{" "}
        </h2>
        {restaurantData?.map((item, i) => {
            let cuisine = restaurantData[i].cuisine.split(",")
            cuisine[0]==="CUISINE" && cuisine.shift()
            console.log(cuisine)
          return (
            <>
              <div className="displaytable_card">
                <div>
                  <img
                    className="displaytable_imagesize"
                    src={`${restaurantData[i].image}`}
                    alt="imag"
                  />
                </div>
                <div
                  style={{
                    textAlign: "left",
                    marginLeft: "10px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "230px",
                  }}
                >
                  <b
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {restaurantData[i].resturant_name}
                  </b>
                </div>
                <p className="displaytable_location"> {restaurantData[i].location}</p>
                <div className="displaytable_cuisines"> {`${restaurantData[i].average_cost}(approx)|${[...cuisine]}`}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export { Tabledisplaydata };