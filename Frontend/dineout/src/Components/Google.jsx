import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios"
function Google() {
  const [des,setDes]=React.useState("")
  console.log(des.profileObj,"des")
  return (
    <div>
      <GoogleLogin
        clientId="557307752378-760brtdpuod7pae3vk6kmb1lki9i2cl9.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={(res) => {
          setDes(res)
          return axios.post("http://localhost:6878/users",res.profileObj)
                 .then((res)=>console.log(res))
        }}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="signbtn"
      />
    </div>
  );
}

export default Google;
