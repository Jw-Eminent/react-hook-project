import React from "react";
import { connect } from "react-redux";
import Header from "../common/Header/Header";
import DepartDate from "./DepartDate";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import "./App.scss";

const App = props => {
  return (
    <div>
      <Header />
      <Journey />
      <DepartDate />
      <HighSpeed />
      <Submit />
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
