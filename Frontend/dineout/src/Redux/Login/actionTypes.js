import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

const loginFailure = (err) => {
  return {
    type: LOGIN_FAILURE,
    error: err,
  };
};

// const login = () => (dispatch) => {
//   dispatch(loginRequest());
//   return axios
//     .get("http://localhost:6878/users")
//     .then((res) => {
//       //   console.log(res);
//       dispatch(loginSuccess(res.data.data));
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch(loginFailure(err));
//     });
// };

export { loginRequest, loginFailure, loginSuccess };
