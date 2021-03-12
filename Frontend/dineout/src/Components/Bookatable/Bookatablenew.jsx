import React, { useState } from "react";
import "./Bookatable.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {Tabledisplaydata} from "./Bookatable_display"
import {
  cuisines_datalist,
  tags_datalist,
  features_datalist,
  dineoutpassport_datalist,
  girf_datalist,
} from "./Bookatable_search_list";
// import { Tabledisplaydata } from "./Bookatable_display";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurant, filterRestaurant } from "../../Redux/DetailPage/detailPageActionsTypes";
import axios from "axios";


const Bookatablenew = () => {
  let d = useSelector((store) => store.restaurantDetail.restaurantData);
  const [restaurantData, setRestaurantData] = React.useState(d);
  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState({ cuisine: [], facilities: [], tag: [], dineoutpassport: [], girfs: [] })
  React.useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);

  React.useEffect(() => {
    setRestaurantData(d);
  }, [d]);

<<<<<<< HEAD
  // const get = (url) => {
  //   return axios.get(url).then((res) => setRestaurantData(res.data.data));
  // };
=======
  React.useEffect(() => {
    dispatch(filterRestaurant())
  }, [filters])

  const get = (url) => {
    return axios.get(url).then((res) => setRestaurantData(res.data.data));
  };
>>>>>>> 59e05218a79d970e4b65304d0fb3e16488aa7148

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
    let filtersCopy = { ...filters }
    if (type === "cuisine") {
      for (let i = 0; i < filters["cuisine"].length; i++) {
        if (filters["cuisine"][i] === e.target.value) {
          count++
        }
      }
      if (count === 0) {

        filtersCopy["cuisine"].push(e.target.value)
      }

    }
    count = 0;
    if (type === "facilities") {
      for (let i = 0; i < filters["facilities"].length; i++) {
        if (filters["facilities"][i] === e.target.value) {
          count++
        }
      }
      if (count === 0) {
        filtersCopy["facilities"].push(e.target.value)

      }

    }
    count = 0;
    if (type === "tag") {
      for (let i = 0; i < filters["tag"].length; i++) {
        if (filters["tag"][i] === e.target.value) {
          count++
        }
      }
      if (count === 0) {
        filtersCopy["tag"].push(e.target.value)

      }

    }
    count = 0;
    if (type === "dineoutpassport") {
      for (let i = 0; i < filters["dineoutpassport"].length; i++) {
        if (filters["dineoutpassport"][i] === e.target.value) {
          count++
        }
      }
      if (count === 0) {
        filtersCopy["dineoutpassport"].push(e.target.value)

      }

    }
    count = 0;
    if (type === "girfs") {
      for (let i = 0; i < filters["girfs"].length; i++) {
        if (filters["girfs"][i] === e.target.value) {
          count++
        }
      }
      if (count === 0) {
        filtersCopy["girfs"].push(e.target.value)

      }

    }
    let temp = []
    for (let key in filtersCopy) {
      if (filtersCopy[key].length > 0) {
        temp.push({ key: filtersCopy[key] })
      }
    }
    setFilters(filtersCopy)
    // console.log(temp)
    // let url = new URL('http://localhost:6878/filters');
    // let params = new URLSearchParams(url.search);
    // params.set("filters", temp);
    // params.toString();
    // //  console.log(url.concat(params))
    // // console.log(params.get("North Indian"))
    // // get(url)
    // console.log(url)
    return axios.post(`http://localhost:6878/filters`, filters)
      .then((res) => console.log(res))

  }
  // console.log(restaurantData)
  // console.log(filters)
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
                  <input type="checkbox" onChange={(e) => handlefilter(e, "girfs")} name="50% off Total bill" value="604a54e12867685f7c78e6e9" />
                  50% off Total bill
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" onChange={(e) => handlefilter(e, "girfs")} name="50% off Food bill" value="604a55082867685f7c78e6ea" />
                  50% off Food bill
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" onChange={(e) => handlefilter(e, "girfs")} name="50% off Alchohol bill" value="604a552a2867685f7c78e6eb" />
                  50% off Alchohol bill
                </div>
                <div className="Bookatable_div_input">
                  <input type="checkbox" onChange={(e) => handlefilter(e, "girfs")} name="50% off Lunch Buffet" value="604a55972867685f7c78e6ec" />
                  50% off Lunch Buffet
                </div>
              </div>
            ) : (
              <div>
                {data0.map((d, i) => {
                  return (
                    <div key={i} className="Bookatable_div_input">
                      <input type="checkbox" onChange={(e) => handlefilter(e, "girfs")} name={d.list} value={d.id} />
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
                    onChange={(e) => handlefilter(e, "cuisine")} name="North Indian" value="604a538b2867685f7c78e6e4"
                  />
                  North Indian
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "cuisine")} name="Fast Foods" value="604a53c52867685f7c78e6e7"
                  />
                  Fast Foods
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "cuisine")} name="Chinese" value="604a53982867685f7c78e6e5"
                  />
                  Chinese
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "cuisine")} name="Multi-Cuisine" value="604a53ae2867685f7c78e6e6"
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
                        onChange={(e) => handlefilter(e, "cuisine")}
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
                    onChange={(e) => handlefilter(e, "tag")}
                    name=" QSR"
                    value="604a53512867685f7c78e6e3"
                  />
                  QSR
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "tag")}
                    name="Casual Dining"
                    value="604a53252867685f7c78e6e0"
                  />
                  Casual Dining
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "tag")}
                    name="Dineout Pay"
                    value="604a53352867685f7c78e6e1"
                  />
                  Dineout Pay
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "tag")}
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
                        onChange={(e) => handlefilter(e, "tag")}
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
                    onChange={(e) => handlefilter(e, "facilities")}
                    name="Cards Accepted"
                    value="604a52252867685f7c78e6db"
                  />
                  Cards Accepted
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "facilities")}
                    name="Home Delivery"
                    value="604a52712867685f7c78e6dd"
                  />
                  Home Delivery
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "facilities")}
                    name=" Air Conditioned"
                    value="604a52bc2867685f7c78e6de"
                  />
                  Air Conditioned
                </div>
                <div className="Bookatable_div_input">
                  <input
                    type="checkbox"
                    onChange={(e) => handlefilter(e, "facilities")}
                    name="Parking"
                    value="604a52dc2867685f7c78e6df"
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
                        onChange={(e) => handlefilter(e, "facilities")}
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
                      <input type="checkbox"
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
          <Tabledisplaydata restaurantData={restaurantData} />
        </div>
      </div>
    </>
  );
};

export default Bookatablenew;
