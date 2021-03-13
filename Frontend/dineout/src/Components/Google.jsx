import React from "react";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Login/actionTypes";
import { getusers } from "../Redux/User/actionTypes";

function Google({ handleClose }) {
  const [des, setDes] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <GoogleLogin
        clientId="557307752378-760brtdpuod7pae3vk6kmb1lki9i2cl9.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={(res) => {
          handleClose();
          dispatch(loginSuccess(res.profileObj));
          setDes(res);
          return axios
            .post("http://localhost:6878/users", res.profileObj)
            .then((res) => dispatch(getusers()));
        }}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="signbtn"
      />
    </div>
  );
}

export default Google;
