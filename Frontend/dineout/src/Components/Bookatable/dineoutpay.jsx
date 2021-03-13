import React, { useState } from "react";
import "./Bookatable.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Tabledisplaydata } from "./Bookatable_display";
import {
  cuisines_datalist,
  tags_datalist,
  features_datalist,
  dineoutpassport_datalist,
  girf_datalist,
} from "./Bookatable_search_list";
import { useSelector, useDispatch } from "react-redux";
import {
  getRestaurant,
  filterRestaurant,
} from "../../Redux/DetailPage/detailPageActionsTypes";
import axios from "axios";

const Dineoutpay = () => {
  let d = useSelector((store) =>
    store.restaurantDetail.restaurantData.filter((item) =>
      item.dineoutPay === true ? item : null
    )
  );

  const [restaurantData, setRestaurantData] = React.useState(d);
  const [category, setCategory] = React.useState("");
  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState({
    cuisines: [],
    features: [],
    tags: [],
    dineoutpassport: [],
    girfs: [],
  });
  React.useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  React.useEffect(() => {
    setRestaurantData(d);
  }, [d]);

  React.useEffect(() => {
    dispatch(filterRestaurant());
  }, [filters]);

  const get = (url) => {
    return axios.get(url).then((res) => setRestaurantData(res.data.data));
  };
  const handlesort = (e) => {
    setCategory(e.target.value);
    let x = e.target.value;
    return axios
      .post(`http://localhost:6878/sorting`, { x: x })
      .then((res) => setRestaurantData(res.data.data));
  };
  const [toggle1, setToggle1] = useState(false);
  const expand1 = toggle1 ? "height1" : "";
  const [toggle3, setToggle3] = useState(false);
  const expand3 = toggle3 ? "height1" : "";
  const [toggle4, setToggle4] = useState(false);
  const expand4 = toggle4 ? "height1" : "";
  const [toggle5, setToggle5] = useState(false);
  const expand5 = toggle5 ? "height1" : "";
  const [toggle6, setToggle6] = useState(false);
  const expand6 = toggle6 ? "height1" : "";

  let cuisines = cuisines_datalist;
  let tags = tags_datalist;
  let features = features_datalist;
  let dineoutpassport = dineoutpassport_datalist;
  let girf = girf_datalist;

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
  const handlefilter = (e, type) => {
    let count = 0;
    let index = 0;
    let filtersCopy = { ...filters };
    let extra = [];
    if (type === "cuisines") {
      for (let i = 0; i < filters["cuisines"].length; i++) {
        if (filters["cuisines"][i] === e.target.value) {
          count++;
          index = i;
        }
      }
      if (count === 0) {
        filtersCopy["cuisines"].push(e.target.value);
        console.log(filtersCopy, "extra0");
      } else if (count > 0) {
        for (let m = 0; m < filtersCopy["cuisines"].length; m++) {
          if (m !== index) {
            extra.push(filtersCopy["cuisines"][m]);
          }
        }
        filtersCopy["cuisines"] = extra;
        setFilters(filtersCopy);
      }
    }
    console.log(e.target.checked);

    console.log(filtersCopy, "extra1");
    count = 0;
    index = 0;
    extra = [];
    if (type === "features") {
      for (let i = 0; i < filters["features"].length; i++) {
        if (filters["features"][i] === e.target.value) {
          count++;
        }
      }
      if (count === 0) {
        filtersCopy["features"].push(e.target.value);
      } else if (count > 0) {
        for (let m = 0; m < filtersCopy["features"].length; m++) {
          if (m !== index) {
            extra.push(filtersCopy["features"][m]);
          }
        }
        filtersCopy["features"] = extra;
        setFilters(filtersCopy);
      }
      console.log(filtersCopy, "extra1");
    }
    count = 0;
    index = 0;
    extra = [];
    if (type === "tags") {
      for (let i = 0; i < filters["tags"].length; i++) {
        if (filters["tags"][i] === e.target.value) {
          count++;
        }
      }
      if (count === 0) {
        filtersCopy["tags"].push(e.target.value);
      } else if (count > 0) {
        for (let m = 0; m < filtersCopy["tags"].length; m++) {
          if (m !== index) {
            extra.push(filtersCopy["tags"][m]);
          }
        }
        filtersCopy["tags"] = extra;
        setFilters(filtersCopy);
      }
      console.log(filtersCopy, "extra1");
    }
    count = 0;
    index = 0;
    extra = [];
    if (type === "dineoutpassport") {
      for (let i = 0; i < filters["dineoutpassport"].length; i++) {
        if (filters["dineoutpassport"][i] === e.target.value) {
          count++;
        }
      }
      if (count === 0) {
        filtersCopy["dineoutpassport"].push(e.target.value);
      } else if (count > 0) {
        for (let m = 0; m < filtersCopy["dineoutpassport"].length; m++) {
          if (m !== index) {
            extra.push(filtersCopy["dineoutpassport"][m]);
          }
        }
        filtersCopy["dineoutpassport"] = extra;
        setFilters(filtersCopy);
      }
      console.log(filtersCopy, "extra1");
    }
    count = 0;
    index = 0;
    extra = [];
    if (type === "girfs") {
      for (let i = 0; i < filters["girfs"].length; i++) {
        if (filters["girfs"][i] === e.target.value) {
          count++;
        }
      }
      if (count === 0) {
        filtersCopy["girfs"].push(e.target.value);
      } else if (count > 0) {
        for (let m = 0; m < filtersCopy["girfs"].length; m++) {
          if (m !== index) {
            extra.push(filtersCopy["girfs"][m]);
          }
        }
        filtersCopy["girfs"] = extra;
        setFilters(filtersCopy);
      }
      console.log(filtersCopy, "extra1");
    }
    console.log("filters", filters);
    setFilters(filtersCopy);
    console.log("filters", filters);
    let filtersObj = {};
    console.log("filterobj", filtersObj, filters);
    Object.keys(filtersCopy).map((filter) => {
      //  debugger
      if (filtersCopy[filter].length > 0) {
        filtersObj[filter] = filtersCopy[filter];
      }
    });
    const sorting = (data) => {
      if (!category || category === "none") {
        setRestaurantData(data);
      } else if (category === "Rating") {
        data = data.sort((a, b) => Number(b.rating) - Number(a.rating));
        setRestaurantData(data);
      } else if (category === "High to Low") {
        data = data.sort(
          (a, b) => Number(b.average_cost) - Number(a.average_cost)
        );
        setRestaurantData(data);
      } else if (category === "Low to High") {
        data = data.sort(
          (a, b) => Number(a.average_cost) - Number(b.average_cost)
        );
        setRestaurantData(data);
      }
    };
    if (Object.keys(filtersObj).length !== 0) {
      console.log("filterobj", "if", filtersObj);

      return axios
        .post(`http://localhost:6878/filters`, filtersObj)
        .then((res) => sorting(res.data.data));
    } else {
      console.log("filterobj", "else", filtersObj);
      return dispatch(getRestaurant());
    }
  };
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
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "girfs")}
                    name="50% off Total bill"
                    value="604a54e12867685f7c78e6e9"
                  />
                  50% off Total bill
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "girfs")}
                    name="50% off Food bill"
                    value="604a55082867685f7c78e6ea"
                  />
                  50% off Food bill
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "girfs")}
                    name="50% off Alchohol bill"
                    value="604a552a2867685f7c78e6eb"
                  />
                  50% off Alchohol bill
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "girfs")}
                    name="50% off Lunch Buffet"
                    value="604a55972867685f7c78e6ec"
                  />
                  50% off Lunch Buffet
                </div>
              </div>
            ) : (
              <div>
                {data0.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={(e) => handlefilter(e, "girfs")}
                        name={d.list}
                        value={d.id}
                      />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div
            className="Cuisuines"
            style={{
              border: "1px solid gray",
              backgroundColor: "white",
              width: "100%",
              height: "40px",
              lineHeight: "230%",
            }}
          >
            <div className="QuickFilters_text">Cuisines</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle3(!toggle3);
              }}
              style={{ lineHeight: "300%" }}
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
                    onChange={(e) => handlefilter(e, "cuisines")}
                    name="North Indian"
                    value="604a538b2867685f7c78e6e4"
                  />
                  North Indian
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "cuisines")}
                    name="Fast Foods"
                    value="604a53c52867685f7c78e6e7"
                  />
                  Fast Foods
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "cuisines")}
                    name="Chinese"
                    value="604a53982867685f7c78e6e5"
                  />
                  Chinese
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "cuisines")}
                    name="Multi-Cuisine"
                    value="604a53ae2867685f7c78e6e6"
                  />
                  Multi-Cuisine
                </div>
              </div>
            ) : (
              <div>
                {data2.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={(e) => handlefilter(e, "cuisines")}
                        name={d.list}
                        value={d.id}
                      />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div
            className="Tags"
            style={{
              border: "1px solid gray",
              backgroundColor: "white",
              width: "100%",
              height: "40px",
              lineHeight: "230%",
            }}
          >
            <div className="QuickFilters_text">Tags</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle4(!toggle4);
              }}
              style={{ lineHeight: "300%" }}
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
                    onChange={(e) => handlefilter(e, "tags")}
                    name=" QSR"
                    value="604a53512867685f7c78e6e3"
                  />
                  QSR
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "tags")}
                    name="Casual Dining"
                    value="604a53252867685f7c78e6e0"
                  />
                  Casual Dining
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "tags")}
                    name="Dineout Pay"
                    value="604a53352867685f7c78e6e1"
                    checked={true}
                  />
                  Dineout Pay
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "tags")}
                    name="Welcome Back"
                    value="604a53432867685f7c78e6e2"
                  />
                  Welcome Back
                </div>
              </div>
            ) : (
              <div>
                {data3.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={(e) => handlefilter(e, "tags")}
                        name={d.list}
                        value={d.id}
                      />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div
            className="Features"
            style={{
              border: "1px solid gray",
              backgroundColor: "white",
              width: "100%",
              height: "40px",
              lineHeight: "230%",
            }}
          >
            <div className="QuickFilters_text">Features</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle5(!toggle5);
              }}
              style={{ lineHeight: "300%" }}
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
                    onChange={(e) => handlefilter(e, "features")}
                    name="Cards Accepted"
                    value="604a52252867685f7c78e6db"
                  />
                  Cards Accepted
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "features")}
                    name="Home Delivery"
                    value="604a52712867685f7c78e6dd"
                  />
                  Home Delivery
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "features")}
                    name=" Air Conditioned"
                    value="604a52bc2867685f7c78e6de"
                  />
                  Air Conditioned
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "features")}
                    name="Parking"
                    value="604a52dc2867685f7c78e6df"
                  />
                  Parking
                </div>
              </div>
            ) : (
              <div>
                {data4.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={(e) => handlefilter(e, "features")}
                        name={d.list}
                        value={d.id}
                      />
                      {d.list}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div
            className="Dineoutpassport"
            style={{
              border: "1px solid gray",
              backgroundColor: "white",
              width: "100%",
              height: "40px",
              lineHeight: "230%",
              borderRadius: "0px  0px 15px 15px",
            }}
          >
            <div className="QuickFilters_text">Dineout Passport</div>
            <div
              className="QuickFilters_Addicon"
              onClick={() => {
                setToggle6(!toggle6);
              }}
              style={{ lineHeight: "300%" }}
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
                    onChange={(e) => handlefilter(e, "dineoutpassport")}
                    name="25% Dineout Passport"
                    value="604a511c2d82556eb86bd9b9"
                  />
                  25% Dineout Passport
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "dineoutpassport")}
                    name="Main Course"
                    value="604a512e2d82556eb86bd9ba"
                  />
                  Main Course
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "dineoutpassport")}
                    name="15% Gourmet Takeaway"
                    value="604a513e2d82556eb86bd9bb"
                  />
                  15% Gourmet Takeaway
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "dineoutpassport")}
                    name="Happy Hours"
                    value="604a514b2d82556eb86bd9bc"
                  />
                  Happy Hours
                </div>
              </div>
            ) : (
              <div>
                {data5.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input
                        type="checkbox"
                        onChange={(e) => handlefilter(e, "dineoutpassport")}
                        name={d.list}
                        value={d.id}
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
          <Tabledisplaydata
            restaurantData={restaurantData}
            handlesort={handlesort}
            category={category}
          />
        </div>
      </div>
    </>
  );
};

export default Dineoutpay;
