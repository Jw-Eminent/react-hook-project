import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = props => {
  const { onBack, title } = props;
  return (
    <div className="train-ticket-header">
      <div className="train-ticket-header-back" onClick={onBack}>
        <svg width="42" height="42">
          <polyline
            points="25,13 16,21 25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      <h1 className="train-ticket-header-title">{title}</h1>
    </div>
  );
};

export default Header;

Header.propTypes = {
  onBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};