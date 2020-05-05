import React, { useState, useMemo, useEffect, memo } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import CityList from "./CityList/index";
import "./CitySelector.scss";

const CitySelector = memo(
  ({ show, cityData, isLoading, onBack, onSelect, fetchCityData }) => {
    const [searchKey, setSearchKey] = useState("");

    const key = useMemo(() => searchKey.trim(), [searchKey]);

    const containerClass = classnames("train-ticket-citySelector", {
      hidden: !show
    });
    const cleanIconClass = classnames("city-search-clean", {
      hidden: searchKey.length === 0
    });

    useEffect(() => {
      if (!show || cityData || isLoading) {
        return;
      }
      fetchCityData();
    }, [show, cityData, isLoading]);

    const outputCitySections = () => {
      if (isLoading) {
        return <div>Loading</div>;
      }
      if (cityData) {
        return (
          <CityList
            hotCities={cityData.hotCities}
            sections={cityData.cityList}
            onSelect={onSelect}
          />
        );
      }
      return <div>Error</div>;
    };

    return (
      <div className={containerClass}>
        <div className="city-search">
          <div className="city-search-back" onClick={onBack}>
            <svg width="42" height="42">
              <polyline
                points="25,13 16,21 25,29"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <div className="city-search-input-wrapper">
            <input
              type="text"
              value={key}
              onChange={e => setSearchKey(e.target.value)}
              className="city-search-input"
              placeholder="城市、车站的中文或拼音"
            />
          </div>
          <i className={cleanIconClass} onClick={() => setSearchKey("")}>
            &#xf063;
          </i>
        </div>
        {outputCitySections()}
      </div>
    );
  }
);

export default CitySelector;

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  fetchCityData: PropTypes.func.isRequired
};
