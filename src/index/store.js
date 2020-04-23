import { combineReducers, applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers(reducers),
  {
    from: "北京",
    to: "上海",
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    // departDate: '',
    highSpeed: false
  },
  applyMiddleware(thunk)
);

export default store;
