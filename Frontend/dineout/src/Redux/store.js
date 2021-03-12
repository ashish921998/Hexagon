import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { restaurantDetailReducer } from "./DetailPage/detailPageReducer";
import { loginReducer } from "./Login/reducer";

const rootReducer = combineReducers({
  restaurantDetail: restaurantDetailReducer,
  loginDetails:loginReducer
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
