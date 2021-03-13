import {
    USER_FAILURE,
    USER_REQUEST,
    USER_SUCCESS,
  } from "./action";
  
  const initialData = {
    userData: {},
    isLoading: true,
    isError: false,
  };
  
  export const UserReducer = (
    state = initialData,
    { type, payload }
  ) => {
    switch (type) {
      case USER_REQUEST: {
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      }
      case USER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
          userData: {...payload},
        };
      }
      case USER_FAILURE: {
        return {
          ...state,
          isError: true,
        };
      }
      default:
        return state;
    }
  };
  
  