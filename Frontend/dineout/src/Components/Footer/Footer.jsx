import React from "react";
import "./Footer.css"



const Footer=()=>{
    return (
        <>
       <div className="Footer_outer">
          <div className="Footer_inner">
          <table>
  <tr>
  {["Available in"].map(item=>(
          <th>{item}</th>
      ))}
  </tr>
  <br/>
  <tr>
      {["Delhi","Mumbai","Bangalore","Chennai","Hyderabad"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {["Pune","Kolkata","Ahmedabad","Chandigarh","Goa"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {["Jaipur","Lucknow","Indore","Udaipur","Agra"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {["Vadodara","Nagpur","Kochi","Surat","Ludiana"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
</table>

          </div>
          <div><hr/></div>
          <div className="Footer_inner">
          <table>
  <tr>
  {["Discover","About","Top Cuisines","Top Facilities","Top Locations"].map(item=>(
          <th>{item}</th>
      ))}
  </tr>
  <br/>
  <tr>
      {["Trending Restaurants","About us","Chinese","Romantic","Koramangala"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {["Super Savers","Blog","Italian","Fine Dining","Indiranagar"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {["Dineout Pay","Add Restaurant","North Indian","Fine Dining","Jayanagar"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {["Dineout Passport","Terms and conditions","Kerala","5 star","White Field"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {["Contactless Dining","Privacy and Policy","Bengali","Pure Veg","Marathahalli"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
  <tr>
  {[" "," ","Thai","Sea Food","HSR Layout"].map(item=>(
          <td>{item}</td>
      ))}
  </tr>
</table>
          </div>
          <div><hr/></div>
          <div className="Footer_inner">
             <div className="Footer_box">
                <div style={{margin:"auto",width:"fit-content"}}><img style={{width:"130px"}} src="https://st1.dineout-cdn.co.in/images/uploads/misc/2019/Jul/25/website-logo.png" alt="logo"/></div>
                <div style={{fontSize:"12px",textAlign:"center",color:"gray"}}>Find the best Restaurants, Deals, Discounts & Offers</div>
                <br/>
                <div style={{fontSize:"15px",textAlign:"center",color:"gray"}}>Contact: <b>+91-9212340202</b></div>
                <div style={{width:"fit-content",margin:"auto",marginTop:"10px"}}>
                 {["https://www.flaticon.com/svg/vstatic/svg/2111/2111463.svg?token=exp=1615547947~hmac=86f923c453c54b6c7aa6a67bc6834670","https://www.flaticon.com/svg/vstatic/svg/733/733547.svg?token=exp=1615548145~hmac=fd504f699dd5f4125acc0756148aac13","https://www.flaticon.com/svg/vstatic/svg/2111/2111748.svg?token=exp=1615548233~hmac=f7756e5c50e2e2b3f0c6b22b21320507","https://www.flaticon.com/svg/vstatic/svg/889/889147.svg?token=exp=1615548291~hmac=5c7b4e8d18a3198edcabd8dd68868c41"].map(item=>(
                     <img style={{height:"30px",width:"30px",marginRight:"10px"}} src={item} alt="imm"/>
                 ))}
                </div>
                <p style={{color:"gray",fontSize:"12px",textAlign:"center"}}><b>&copy; 2017, dineout.co.in. All Rights Reserved.</b></p>
             </div>
          </div>
          <hr/>
       </div>
        </>
    )
}
export default Footer 