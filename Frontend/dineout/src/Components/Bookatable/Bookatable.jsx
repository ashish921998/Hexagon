import React, { useState } from "react";
import "./Bookatable.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {quickfilters_datalist,cuisines_datalist,tags_datalist,features_datalist,dineoutpassport_datalist} from "./Bookatable_search_list"
const Bookatable = () => {
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
  let cuisines= cuisines_datalist;
  let tags = tags_datalist;
  let features = features_datalist;
  let dineoutpassport = dineoutpassport_datalist;
  const [searchText1, setSearchText1] = useState("");
  const [data1, setData1] = useState(quickfilters);
  const handleChange1 = value => {
    setSearchText1(value);
    filterData1(value);
  };
  const filterData1 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData1(quickfilters);
    else {
      const filteredData = quickfilters.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData1(filteredData);
    }
  }
  const [searchText2, setSearchText2] = useState("");
  const [data2, setData2] = useState(cuisines);
  const handleChange2 = value => {
    setSearchText2(value);
    filterData2(value);
  };
  const filterData2 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData2(cuisines);
    else {
      const filteredData = cuisines.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData2(filteredData);
    }
  }
  const [searchText3, setSearchText3] = useState("");
  const [data3, setData3] = useState(tags);
  const handleChange3 = value => {
    setSearchText3(value);
    filterData3(value);
  };
  const filterData3 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData3(tags);
    else {
      const filteredData = tags.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData3(filteredData);
    }
  }
  const [searchText4, setSearchText4] = useState("");
  const [data4, setData4] = useState(features);
  const handleChange4 = value => {
    setSearchText4(value);
    filterData4(value);
  };
  const filterData4 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData4(features);
    else {
      const filteredData = features.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData4(filteredData);
    }
  }
  const [searchText5, setSearchText5] = useState("");
  const [data5, setData5] = useState(dineoutpassport);
  const handleChange5 = value => {
    setSearchText5(value);
    filterData5(value);
  };
  const filterData5 = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData5(dineoutpassport);
    else {
      const filteredData = dineoutpassport.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData5(filteredData);
    }
  }
  
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
            <div>50% off total bill</div>
            <div>50% off total bill</div>
            <div>50% off total bill</div>
            <div>50% off total bill</div>
            <div>50% off total bill</div>
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
            <div className="Bookatable_search"><input className="Bookatable_filter_input" placeholder="Search"  type="text"
        value={searchText1}
        onChange={e => handleChange1(e.target.value)}/></div>
        { searchText1==="" ? <div>
            <div className="Bookatable_div_input"><input type="checkbox"/>Dineout Pay</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Pure Veg</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>5 Star</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Buffet</div>
             <div className="Bookatable_div_showmore">Showmore</div>
             </div> : <div>{data1.map((d, i) => {
          return <div key={i} className="Bookatable_div_input">
           <input type="checkbox"/>{d.list}
          </div>
        })}</div>
        }
            
          </div>
          <div className="Cuisuines" >
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
          
          <div className="Bookatable_search"><input className="Bookatable_filter_input" placeholder="Search"  type="text"
        value={searchText2}
        onChange={e => handleChange2(e.target.value)}/></div>
        { searchText2==="" ? <div>
            <div className="Bookatable_div_input"><input type="checkbox"/>North Indian</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Fast Foods</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Chinese</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Desserts</div>
             <div className="Bookatable_div_showmore">Showmore</div>
             </div> : <div>{data2.map((d, i) => {
          return <div key={i} className="Bookatable_div_input">
           <input type="checkbox"/>{d.list}
          </div>
        })}</div>
        }
            
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
          <div className="Bookatable_search"><input className="Bookatable_filter_input" placeholder="Search"  type="text"
        value={searchText3}
        onChange={e => handleChange3(e.target.value)}/></div>
        { searchText3==="" ? <div>
            <div className="Bookatable_div_input"><input type="checkbox"/>QSR</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Casual Dining</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Dineout Pay</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Welcome Back</div>
             <div className="Bookatable_div_showmore">Showmore</div>
             </div> : <div>{data3.map((d, i) => {
          return <div key={i} className="Bookatable_div_input">
           <input type="checkbox"/>{d.list}
          </div>
        })}</div>
        }
            
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
          <div className="Bookatable_search"><input className="Bookatable_filter_input" placeholder="Search"  type="text"
        value={searchText4}
        onChange={e => handleChange4(e.target.value)}/></div>
        { searchText4==="" ? <div>
            <div className="Bookatable_div_input"><input type="checkbox"/>Cards Accepted</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Home Delivery</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Air Conditioned</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Parking</div>
             <div className="Bookatable_div_showmore">Showmore</div>
             </div> : <div>{data4.map((d, i) => {
          return <div key={i} className="Bookatable_div_input">
           <input type="checkbox"/>{d.list}
          </div>
        })}</div>
        }
            
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
          <div className="Bookatable_search"><input className="Bookatable_filter_input" placeholder="Search"  type="text"
        value={searchText5}
        onChange={e => handleChange5(e.target.value)}/></div>
        { searchText5==="" ? <div>
            <div className="Bookatable_div_input"><input type="checkbox"/>25% Dineout Passport</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Main Course</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>15% Gourmet Takeaway</div>
             <div className="Bookatable_div_input"><input type="checkbox"/>Happy Hours</div>
             <div className="Bookatable_div_showmore">Showmore</div>
             </div> : <div>{data5.map((d, i) => {
          return <div key={i} className="Bookatable_div_input">
           <input type="checkbox"/>{d.list}
          </div>
        })}</div>
        }
            
          </div>
          
        </div>
        {searchText2!=="" && <div className="Bookatable_innerbox2">{data2.map((d,i)=> {
           return <div>{d.list}</div>
        })} </div>}
      </div>
    </>
  );
};

export default Bookatable;
