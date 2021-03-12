import React from "react";
import { useHistory } from "react-router";
import "./Bookatable_display.css";

const Tabledisplaydata = (props) => {
  
  console.log(props);
  const { restaurantData,handlesort,category } = props;
  console.log(restaurantData);
  const history = useHistory()
  const handleroute = (x)=>{
    history.push(`/book/${x}`)
  }
 
  console.log(restaurantData)
  return (
    <>
      <div>
        <div style={{display:"flex",flexDirection:"row"}}>
        <h2 style={{ marginLeft: "20px" }}>
          Best Restaurants Near Me in Bangalore{" "}
        </h2>
        {/* <select value={category} onChange={handlesort}>
           <option value="none">Select</option>
            <option value="Rating">Rating</option>
            <option value="Price :Low to High">Price :Low to High</option>
            <option value="Price :High to Low">Price :High to Low</option>

          </select> */}
        </div>
        {restaurantData?.map((item, i) => {
          let cuisinestr=[]
          let cuisine = restaurantData[i].cuisines.map((item,i)=>{
           cuisinestr.push(item.cuisine)
          });
          console.log(cuisinestr.join(","))
          let style= restaurantData[i].rating>4 ? "green":(restaurantData[i].rating>=3 && restaurantData[i].rating<4) ? "yellow":"red"
          return (
            <>
              <div className="displaytable_card" onClick={()=>handleroute(item.resturant_name)}>
                <div>
                  <img
                    className="displaytable_imagesize"
                    src={`${item.image}`}
                    alt="imag"
                  />
                </div>
                <div className={style}>{item.rating}</div>
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
                    {item.resturant_name}
                  </b>
                </div>
                <p className="displaytable_location">
                  {" "}
                  {item.location}
                </p>

                <div className="displaytable_cuisines">
                  {" "}
                  {`₹${item.average_cost} for two(approx) | ${cuisinestr}`}
                </div>

                {item.dineoutPay && (
                  <div className="displaytable_dineoutpay">Dineout Pay</div>
                )}
                {item.girfs.length > 0 &&
                  item.free_offer.length &&
                  item.resturant_name !== "The Big Barbeque" && (
                    <div className="displaytable_offers">{`${
                      item.girfs.length > 0 &&
                      item.girfs.length
                    } ${
                      item.girfs.length > 1 ? "deals" : "deal"
                    } and ${
                      item.free_offer.length > 0 &&
                      item.free_offer.length
                    } ${
                      item.free_offer.length > 1
                        ? "offers"
                        : "offer"
                    } are available`}</div>
                  )}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export { Tabledisplaydata };
