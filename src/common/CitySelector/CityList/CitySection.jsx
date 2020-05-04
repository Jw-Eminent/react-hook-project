import React, { memo } from "react";
import PropTypes from "prop-types";
import CityItem from "./CityItem";

const CitySection = memo(({ title, cities, onSelect }) => {
  return (
    <ul className="city-list-section">
      <li className="city-list-item" data-cate={title} key="title">
        {title}
      </li>
      {cities.map(city => (
        <CityItem key={city.name} name={city.name} onSelect={onSelect} />
      ))}
    </ul>
  );
});

export default CitySection;

CitySection.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
