import * as Action from "./actionTypes";

export default {
  from(state = "北京", action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_FROM:
        return payload;
      default:
        return state;
    }
  },
  to(state = "上海", action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_TO:
        return payload;
      default:
        return state;
    }
  },
  isCitySelectorVisible(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_IS_CITY_SELECTOR_VISIBLE:
        return payload;
      default:
        return state;
    }
  },
  currentSelectingLeftCity(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_CURRENT_SELECTING_LEFT_CITY:
        return payload;
      default:
        return state;
    }
  },
  cityData(state = null, action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_CITY_DATA:
        return payload;
      default:
        return state;
    }
  },
  isLoadingCityData(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_IS_LOADING_CITY_DATA:
        return payload;
      default:
        return state;
    }
  },
  isDateSelectorVisible(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_IS_DATE_SELECTOR_VISIBLE:
        return payload;
      default:
        return state;
    }
  },
  highSpeed(state = false, action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_HIGH_SPEEDE:
        return payload;
      default:
        return state;
    }
  },
  departDate(state = Date.now(), action) {
    const { type, payload } = action;
    switch (type) {
      case Action.SET_DEPART_DATE:
        return payload;
      default:
    }

    return state;
  }
};
