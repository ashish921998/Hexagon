import React from "react";
import { GoogleLogin } from "react-google-login";
function Google() {
  return (
    <div>
      <GoogleLogin
        clientId="557307752378-760brtdpuod7pae3vk6kmb1lki9i2cl9.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={(res) => {
          console.log(res);
        }}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        className="signbtn"
      />
    </div>
  );
}

export default Google;
