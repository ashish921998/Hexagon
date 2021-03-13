import {
  GET_RESTAURANT_FAILURE,
  GET_RESTAURANT_REQUEST,
  GET_RESTAURANT_SUCCESS,
} from "./detailPageActions";

const initialData = {
  restaurantData: [],
  isLoading: true,
  isError: false,
};

export const restaurantDetailReducer = (
  state = initialData,
  { type, payload }
) => {
  switch (type) {
    case GET_RESTAURANT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_RESTAURANT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        restaurantData: payload,
      };
    }
    case GET_RESTAURANT_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
