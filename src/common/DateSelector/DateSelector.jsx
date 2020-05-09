import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { m3 } from "../fp";

import Month from "./Calendar/Month";

import "./DateSelector.scss";

import Header from "../Header/Header";

const DateSelecotr = props => {
  const { show, onSelect, onBack } = props;
  const months = m3();
  return (
    <div
      className={classnames("train-ticket-date-selector", { hidden: !show })}
    >
      <Header title="日期选择" onBack={onBack} />
      <div className="train-ticket-date-selector-tables">
        {months.map(month => (
          <Month key={month} startingTimeMonth={month} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
};

export default DateSelecotr;

DateSelecotr.propTypes = {
  show: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
