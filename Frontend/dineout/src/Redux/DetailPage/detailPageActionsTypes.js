import axios from "axios";
import {
  GET_RESTAURANT_FAILURE,
  GET_RESTAURANT_REQUEST,
  GET_RESTAURANT_SUCCESS,
 
} from "./detailPageActions";

const getRestaurantRequest = () => {
  return {
    type: GET_RESTAURANT_REQUEST,
  };
};

const getRestaurantSuccess = (payload) => {
  return {
    type: GET_RESTAURANT_SUCCESS,
    payload,
  };
};

const getRestaurantFailure = (err) => {
  return {
    type: GET_RESTAURANT_FAILURE,
    error: err,
  };
};


const getRestaurant = () => (dispatch) => {
  dispatch(getRestaurantRequest());
  return axios
    .get("http://localhost:6678/booktables")
    .then((res) => {
      //   console.log(res);
      dispatch(getRestaurantSuccess(res.data.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getRestaurantFailure(err));
    });
};

export { getRestaurant };
