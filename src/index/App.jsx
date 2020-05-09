import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../common/Header/Header";
import CitySelector from "../common/CitySelector/CitySelector";
import DateSelector from "../common/DateSelector/DateSelector";

import DepartDate from "./DepartDate";
// import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
// import Submit from "./Submit";

import "./App.scss";

import {
  showCitySelector,
  hideCitySelector,
  exchangeFromTo,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate
} from "./Model/actions";

import { h0 } from "../common/fp";

const App = props => {
  const {
    from,
    to,
    isCitySelectorVisible,
    isDateSelectorVisible,
    cityData,
    isLoadingCityData,
    departDate,
    dispatch
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const handleDateSelect = useCallback(day => {
    if (!day || day < h0()) {
      return;
    }
    dispatch(setDepartDate(day));
    dispatch(hideDateSelector());
  }, []);
  // const doExchangeFromTo = useCallback(() => {
  //   dispatch(exchangeFromTo());
  // }, []);

  // const doShowCitySelector = useCallback((m) => {
  //   dispatch(showCitySelector(m));
  // }, []);

  const journeyCbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        onSelect: setSelectedCity,
        fetchCityData
      },
      dispatch
    );
  }, []);

  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector
      },
      dispatch
    );
  });

  const dateSelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideDateSelector
      },
      dispatch
    );
  });

  return (
    <div>
      <div className="train-ticket-header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form className="train-ticket-form">
        <Journey
          from={from}
          to={to}
          {...journeyCbs}
          // exchangeFromTo={doExchangeFromTo}
          // showCitySelector={doShowCitySelector}
        />
        <DepartDate time={departDate} {...departDateCbs} />
        {/* <HighSpeed />
        <Submit /> */}
      </form>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
      <DateSelector
        show={isDateSelectorVisible}
        onSelect={handleDateSelect}
        {...dateSelectorCbs}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
