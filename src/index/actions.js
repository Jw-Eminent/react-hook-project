import * as Action from "./actionTypes";

export const setFrom = payload => ({
  type: Action.SET_FROM,
  payload
});

export const setTo = payload => ({
  type: Action.SET_TO,
  payload
});

export const setIsLoadingCityData = payload => ({
  type: Action.SET_IS_LOADING_CITY_DATA,
  payload
});

export const setCityData = payload => ({
  type: Action.SET_CITY_DATA,
  payload
});

export const toggleHighSpeed = () => {
  return (dispatch, getState) => {
    const { highSpeed } = getState();
    dispatch({
      type: Action.SET_HIGH_SPEEDE,
      payload: !highSpeed
    });
  };
};

export const showCitySelector = payload => {
  return dispatch => {
    dispatch({
      type: Action.SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    });

    dispatch({
      type: Action.SET_CURRENT_SELECTING_LEFT_CITY,
      payload
    });
  };
};

export const hideCitySelector = payload => ({
  type: Action.SET_IS_CITY_SELECTOR_VISIBLE,
  payload: false
});

export const setSelectedCity = city => {
  return (dispatch, getState) => {
    const { currentSelectingLeftCity } = getState();
    if (currentSelectingLeftCity) {
      dispatch(setFrom(city));
    } else {
      dispatch(setTo(city));
    }
  };
};

export const showDateSelector = () => ({
  type: Action.SET_IS_DATE_SELECTOR_VISIBLE,
  payload: true
});

export const hideDateSelector = () => ({
  type: Action.SET_IS_DATE_SELECTOR_VISIBLE,
  payload: false
});

export const exchangeFromTo = () => {
  return (dispatch, getState) => {
    const { from, to } = getState();
    dispatch(setFrom(to));
    dispatch(setTo(from));
  };
};
