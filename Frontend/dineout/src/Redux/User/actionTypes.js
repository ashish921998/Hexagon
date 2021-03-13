import axios from "axios";
import {
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
} from "./action";

const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

const userSuccess = (payload) => {
  return {
    type: USER_SUCCESS,
    payload,
  };
};

const userFailure = (err) => {
  return {
    type: USER_FAILURE,
    error: err,
  };
};
const getusers = () => (dispatch) => {
    dispatch((userRequest()));
    return axios
      .get("http://localhost:6878/users")
      .then((res) => {
          console.log(res);
        dispatch(userSuccess(res.data.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(userFailure(err));
      });
  };

export { getusers};
