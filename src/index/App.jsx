import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../common/Header/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import "./App.scss";

import { showCitySelector, exchangeFromTo } from "./actions";

const App = props => {
  const { from, to, dispatch } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  // const doExchangeFromTo = useCallback(() => {
  //   dispatch(exchangeFromTo());
  // }, []);

  // const doShowCitySelector = useCallback((m) => {
  //   dispatch(showCitySelector(m));
  // }, []);

  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
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
          {...cbs}
          // exchangeFromTo={doExchangeFromTo}
          // showCitySelector={doShowCitySelector}
        />
        <DepartDate />
        <HighSpeed />
        <Submit />
      </form>
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
