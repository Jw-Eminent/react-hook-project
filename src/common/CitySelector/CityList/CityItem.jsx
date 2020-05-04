import React, { memo } from "react";
import PropTypes from "prop-types";

const CityItem = memo(({ name, onSelect }) => {
  return (
    <li className="city-list-item" onClick={() => onSelect(name)}>
      {name}
    </li>
  );
});

export default CityItem;

CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
