import React from "react";
import PropTypes from "prop-types";
import switchImg from "../imgs/switch.svg";
import "./Journey.scss";

const Journey = props => {
  const { from, to, exchangeFromTo, showCitySelector } = props;
  return (
    <div className="train-ticket-journey">
      <div
        className="train-ticket-journey-station"
        onClick={() => showCitySelector(true)}
      >
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          className="station-input station-from"
        />
      </div>
      <div
        className="train-ticket-journey-switch"
        onClick={() => exchangeFromTo()}
      >
        <img src={switchImg} width="70" height="44" alt="switch" />
      </div>
      <div
        className="train-ticket-journey-station"
        onClick={() => showCitySelector(false)}
      >
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          className="station-input station-to"
        />
      </div>
    </div>
  );
};

export default Journey;

Journey.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  exchangeFromTo: PropTypes.func.isRequired,
  showCitySelector: PropTypes.func.isRequired
};
