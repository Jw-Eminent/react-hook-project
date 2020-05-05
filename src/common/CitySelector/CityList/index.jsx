import React, { memo } from "react";
import PropTypes from "prop-types";
import CitySection from "./CitySection";
import HotCities from "./HotCities";
import AlphaIndex from "../AlphaIndex";

const CityList = memo(({ hotCities, sections, onSelect }) => {
  return (
    <div className="city-list">
      <div className="city-cate">
        {/* <HotCities
          hotCities={hotCities || []}
          onSelect={onSelect}
        /> */}
        {sections.map(section => (
          <CitySection
            title={section.title}
            cities={section.cities || []}
            onSelect={onSelect}
            key={section.title}
          />
        ))}
      </div>
      <AlphaIndex />
    </div>
  );
});

export default CityList;

CityList.propTypes = {
  sections: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
