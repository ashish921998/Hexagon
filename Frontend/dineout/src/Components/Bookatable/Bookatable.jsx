import React, { useState } from "react";
import "./Bookatable.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  quickfilters_datalist,
  cuisines_datalist,
  tags_datalist,
  features_datalist,
  dineoutpassport_datalist,
  girf_datalist,
} from "./Bookatable_search_list";
import { Tabledisplaydata } from "./Bookatable_display";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurant } from "../../Redux/DetailPage/detailPageActionsTypes";
import axios from "axios";

const Bookatable = () => {
  let d = useSelector((store) => store.restaurantDetail.restaurantData);
  const [restaurantData, setRestaurantData] = React.useState(d);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  React.useEffect(() => {
    setRestaurantData(d);
  }, [d]);

  const get = (url) => {
    return axios.get(url).then((res) => setRestaurantData(res.data.data));
  };

  const [toggle1, setToggle1] = useState(false);
  const expand1 = toggle1 ? "height1" : "";
  const [toggle2, setToggle2] = useState(false);
  const expand2 = toggle2 ? "height1" : "";
  const [toggle3, setToggle3] = useState(false);
  const expand3 = toggle3 ? "height1" : "";
  const [toggle4, setToggle4] = useState(false);
  const expand4 = toggle4 ? "height1" : "";
  const [toggle5, setToggle5] = useState(false);
  const expand5 = toggle5 ? "height1" : "";
  const [toggle6, setToggle6] = useState(false);
  const expand6 = toggle6 ? "height1" : "";
  let quickfilters = quickfilters_datalist;
  let cuisines = cuisines_datalist;
  let tags = tags_datalist;
  let features = features_datalist;
  let dineoutpassport = dineoutpassport_datalist;
  let girf = girf_datalist;
  const [tagsdata, setTagsdata] = React.useState({
    QSR: false,
    "Casual Dining": false,
    "Dineout Pay": false,
    "Welcome Back": false,
  });
  const [facilities, setFacilities] = React.useState({
    "Cards Accepted": false,
    "Home Delivery": false,
    "Air Conditioned": false,
    "Parking": false,
  });
  const [pass, setPass] = React.useState({
    "25% Dineout Passport": false,
    "Main Course": false,
    "15% Gourmet Takeaway": false,
    "Happy Hours": false,
  });
  const [searchText0, setSearchText0] = useState("");
  const [data0, setData0] = useState(girf);
  const handleChange0 = (value) => {
    setSearchText0(value);
    filterData0(value);
  };
  const filterData0 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData0(girf);
    else {
      const filteredData = girf.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData0(filteredData);
    }
  };
  const [searchText1, setSearchText1] = useState("");
  const [data1, setData1] = useState(quickfilters);
  const handleChange1 = (value) => {
    setSearchText1(value);
    filterData1(value);
  };
  const filterData1 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData1(quickfilters);
    else {
      const filteredData = quickfilters.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData1(filteredData);
    }
  };
  const [searchText2, setSearchText2] = useState("");
  const [data2, setData2] = useState(cuisines);
  const handleChange2 = (value) => {
    setSearchText2(value);
    filterData2(value);
  };
  const filterData2 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData2(cuisines);
    else {
      const filteredData = cuisines.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData2(filteredData);
    }
  };
  const [searchText3, setSearchText3] = useState("");
  const [data3, setData3] = useState(tags);
  const handleChange3 = (value) => {
    setSearchText3(value);
    filterData3(value);
  };
  const filterData3 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData3(tags);
    else {
      const filteredData = tags.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData3(filteredData);
    }
  };
  const [searchText4, setSearchText4] = useState("");
  const [data4, setData4] = useState(features);
  const handleChange4 = (value) => {
    setSearchText4(value);
    filterData4(value);
  };
  const filterData4 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData4(features);
    else {
      const filteredData = features.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData4(filteredData);
    }
  };
  const [searchText5, setSearchText5] = useState("");
  const [data5, setData5] = useState(dineoutpassport);
  const handleChange5 = (value) => {
    setSearchText5(value);
    filterData5(value);
  };
  const filterData5 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData5(dineoutpassport);
    else {
      const filteredData = dineoutpassport.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData5(filteredData);
    }
  };
  const handlecuisines = (e) => {
    const { checked } = e.target;
    if (e.target.value === "North Indian" && checked) {
        let url = new URL('http://localhost:6678/booktables/northindian');
        let params = new URLSearchParams(url.search);
         params.set('North Indian',[1,2,3]);
         params.toString(); 
        //  console.log(url.concat(params))
         console.log(params.get("North Indian"))
        get(url)
    }
    if (e.target.value === "Fast Foods" && checked) {
      get("http://localhost:6678/booktables/fastfoods");
    }
    if (e.target.value === "Chinese" && checked) {
      get("http://localhost:6678/booktables/chinese");
    }
    if (e.target.value === "Multi-Cuisine" && checked) {
      get("http://localhost:6678/booktables/multi");
    }
    if (!checked) {
      get("http://localhost:6678/booktables");
    }
  };
  const handletags = (e) => {
    setTagsdata({ ...tagsdata, [e.target.name]: e.target.checked });
  };
  React.useEffect(() => {
    if (tagsdata.QSR === true) {
      get("http://localhost:6678/booktables/qsr");
    }
    if (tagsdata["Casual Dining"] === true) {
      get("http://localhost:6678/booktables/casualdining");
    }
    if (tagsdata["Dineout Pay"] === true) {
      get("http://localhost:6678/booktables/dineoutpay");
    }
    if (
      tagsdata["Dineout Pay"] === true &&
      tagsdata["Casual Dining"] === true
    ) {
      return get("http://localhost:6678/booktables/casualdining&dineoutpay");
    }
    if (tagsdata["Welcome Back"] === true) {
      get("http://localhost:6678/booktables/welcome");
    }
    if (
      tagsdata.QSR !== true &&
      tagsdata["Casual Dining"] !== true &&
      tagsdata["Dineout Pay"] !== true &&
      tagsdata["Welcome Back"] !== true
    ) {
      get("http://localhost:6678/booktables");
    }
  }, [tagsdata]);

  const handlefacilities = (e) => {
    setFacilities({ ...facilities, [e.target.name]: e.target.checked });
  };
  React.useEffect(() => {
    if (facilities["Cards Accepted"] === true) {
      get("http://localhost:6678/booktables/cards");
    }
    if (facilities["Home Delivery"] === true) {
      get("http://localhost:6678/booktables/delivery");
    }
    if (facilities["Air Conditioned"] === true) {
      get("http://localhost:6678/booktables/ac");
    }
    if (facilities["Parking"] === true) {
      get("http://localhost:6678/booktables/parking");
    }
    if (
      facilities["Cards Accepted"] !== true &&
      facilities["Home Delivery"] !== true &&
      facilities["Air Conditioned"] !== true &&
      facilities["Parking"] !== true
    ) {
      get("http://localhost:6678/booktables");
    }
  }, [facilities]);

  const handlepass = (e) => {
    setPass({ ...pass, [e.target.name]: e.target.checked });
  };

  React.useEffect(() => {
    if (pass["25% Dineout Passport"] === true) {
      get("http://localhost:6678/booktables/25");
    }
    if (pass["Main Course"] === true) {
      get("http://localhost:6678/booktables/main");
    }
    if (pass["15% Gourmet Takeaway"] === true) {
      get("http://localhost:6678/booktables/15");
    }
    if (pass["Happy Hours"] === true) {
      get("http://localhost:6678/booktables/happy");
    }
    if (
      pass["25% Dineout Passport"] !== true &&
      pass["Main Course"] !== true &&
      pass["15% Gourmet Takeaway"] !== true &&
      pass["Happy Hours"] !== true
    ) {
      get("http://localhost:6678/booktables");
    }
  }, [pass]);

  return (
    <>
      <div className="Bookatable_Outerbox">
        <div className="Bookatable_innerbox1">
          <div className="Bookatable_Girf">
            <div className="Bookatable_Girf_inner">
              <div className="Bookatable_girf">
                <img
                  src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jan/10/logo.png"
                  alt="GIRFLOGO"
                />
              </div>
              <div className="Bookatable_New">NEW</div>
            </div>
            <div
              className="Bookatable_Addicon"
              onClick={() => {
                setToggle1(!toggle1);
              }}
            >
              {!toggle1 ? <AddIcon /> : <RemoveIcon />}
            </div>
          </div>
          <div className={`navBox ${expand1}`}>
            <div className="Bookatable_search">
              <input
                className="Bookatable_filter_input"
                placeholder="Search"
                type="text"
                value={searchText0}
                onChange={(e) => handleChange0(e.target.value)}
              />
            </div>
            {searchText0 === "" ? (
              <div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />
                  50% off total bill
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />
                  50% off food bill
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />
                  50% off Alchohol bill
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />
                  50% off Buffet
                </div>
                <div className="Bookatable_div_showmore">All GIRF Deals</div>
              </div>
            ) : (
              <div>
                {data0.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input type="checkbox" />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="Quickfilters">
            <div className="QuickFilters_text">Quick Filters</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle2(!toggle2);
              }}
            >
              {!toggle2 ? <AddIcon /> : <RemoveIcon />}
            </div>
          </div>
          <div className={`navBox ${expand2}`}>
            <div className="Bookatable_search">
              <input
                className="Bookatable_filter_input"
                placeholder="Search"
                type="text"
                value={searchText1}
                onChange={(e) => handleChange1(e.target.value)}
              />
            </div>
            {searchText1 === "" ? (
              <div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />
                  Dineout Pay
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />
                  Pure Veg
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />5 Star
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" />
                  Buffet
                </div>
                <div className="Bookatable_div_showmore">Showmore</div>
              </div>
            ) : (
              <div>
                {data1.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input type="checkbox" />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="Cuisuines">
            <div className="QuickFilters_text">Cuisines</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle3(!toggle3);
              }}
            >
              {!toggle3 ? <AddIcon /> : <RemoveIcon />}
            </div>
          </div>
          <div className={`navBox ${expand3}`}>
            <div className="Bookatable_search">
              <input
                className="Bookatable_filter_input"
                placeholder="Search"
                type="text"
                value={searchText2}
                onChange={(e) => handleChange2(e.target.value)}
              />
            </div>
            {searchText2 === "" ? (
              <div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlecuisines}
                    name="North Indian"
                    value="North Indian"
                  />
                  North Indian
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlecuisines}
                    name="Fast Foods"
                    value="Fast Foods"
                  />
                  Fast Foods
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlecuisines}
                    name="Chinese"
                    value="Chinese"
                  />
                  Chinese
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlecuisines}
                    name="Multi-Cuisine"
                    value="Multi-Cuisine"
                  />
                  Multi-Cuisine
                </div>
                <div className="Bookatable_div_showmore">Showmore</div>
              </div>
            ) : (
              <div>
                {data2.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={handlecuisines}
                        name={d.list}
                        value={d.list}
                      />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="Tags">
            <div className="QuickFilters_text">Tags</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle4(!toggle4);
              }}
            >
              {!toggle4 ? <AddIcon /> : <RemoveIcon />}
            </div>
          </div>
          <div className={`navBox ${expand4}`}>
            <div className="Bookatable_search">
              <input
                className="Bookatable_filter_input"
                placeholder="Search"
                type="text"
                value={searchText3}
                onChange={(e) => handleChange3(e.target.value)}
              />
            </div>
            {searchText3 === "" ? (
              <div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handletags}
                    name="QSR"
                    value="QSR"
                  />
                  QSR
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handletags}
                    name="Casual Dining"
                    value="Casual Dining"
                  />
                  Casual Dining
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handletags}
                    name="Dineout Pay"
                    value="Dineout Pay"
                  />
                  Dineout Pay
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handletags}
                    name="Welcome Back"
                    value="Welcome Back"
                  />
                  Welcome Back
                </div>
                <div className="Bookatable_div_showmore">Showmore</div>
              </div>
            ) : (
              <div>
                {data3.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={handletags}
                        name={d.list}
                        value={d.list}
                      />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="Features">
            <div className="QuickFilters_text">Features</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle5(!toggle5);
              }}
            >
              {!toggle5 ? <AddIcon /> : <RemoveIcon />}
            </div>
          </div>
          <div className={`navBox ${expand5}`}>
            <div className="Bookatable_search">
              <input
                className="Bookatable_filter_input"
                placeholder="Search"
                type="text"
                value={searchText4}
                onChange={(e) => handleChange4(e.target.value)}
              />
            </div>
            {searchText4 === "" ? (
              <div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlefacilities}
                    name="Cards Accepted"
                    value="Cards Accepted"
                  />
                  Cards Accepted
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlefacilities}
                    name="Home Delivery"
                    value="Home Delivery"
                  />
                  Home Delivery
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlefacilities}
                    name="Air Conditioned"
                    value="Air Conditioned"
                  />
                  Air Conditioned
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlefacilities}
                    name="Parking"
                    value="Parking"
                  />
                  Parking
                </div>
                <div className="Bookatable_div_showmore">Showmore</div>
              </div>
            ) : (
              <div>
                {data4.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={handlefacilities}
                        name={d.list}
                        value={d.list}
                      />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="Dineoutpassport">
            <div className="QuickFilters_text">Dineoutpassport</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle6(!toggle6);
              }}
            >
              {!toggle6 ? <AddIcon /> : <RemoveIcon />}
            </div>
          </div>
          <div className={`navBox ${expand6}`}>
            <div className="Bookatable_search">
              <input
                className="Bookatable_filter_input"
                placeholder="Search"
                type="text"
                value={searchText5}
                onChange={(e) => handleChange5(e.target.value)}
              />
            </div>
            {searchText5 === "" ? (
              <div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlepass}
                    name="25% Dineout Passport"
                    value="25% Dineout Passport"
                  />
                  25% Dineout Passport
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlepass}
                    name="Main Course"
                    value="Main Course"
                  />
                  Main Course
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlepass}
                    name="15% Gourmet Takeaway"
                    value="15% Gourmet Takeaway"
                  />
                  15% Gourmet Takeaway
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={handlepass}
                    name="Happy Hours"
                    value="Happy Hours"
                  />
                  Happy Hours
                </div>
                <div className="Bookatable_div_showmore">Showmore</div>
              </div>
            ) : (
              <div>
                {data5.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input type="checkbox" 
                       onChange={handlepass}
                       name= {d.list}
                       value= {d.list}
                       />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="Bookatable_innerbox2">
          <Tabledisplaydata restaurantData={restaurantData} />
        </div>
      </div>
    </>
  );
};

export default Bookatable;
