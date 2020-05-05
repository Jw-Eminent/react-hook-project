import React, { memo } from "react";
import PropTypes from "prop-types";

const HostCities = memo(({ hotCities = [], onSelect }) => {
  return (
    <React.Fragment>
      <div className="city-hot-title" data-cate="hot_city" key="hot_city">
        热门城市
      </div>
      <ul className="city-list-hot">
        {hotCities.map(city => (
          <li
            key={`hot_${city.name}`}
            className="city-hot-item"
            onClick={() => onSelect(city.name)}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
});

export default HostCities;

HostCities.propTypes = {
  hotCities: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
