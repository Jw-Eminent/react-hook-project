import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../common/Header/Header";
import CitySelector from "../common/CitySelector/CitySelector";

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
  showDateSelector
} from "./Model/actions";

const App = props => {
  const {
    from,
    to,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    departDate,
    dispatch
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
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
