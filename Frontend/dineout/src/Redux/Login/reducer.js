import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./action";

const initialData = {
  loginData: {},
  isLoading: true,
  isError: false,
  isAuth: false,
};

export const loginReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        loginData: { ...payload },
        isAuth: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }
    default:
      return state;
  }
};
