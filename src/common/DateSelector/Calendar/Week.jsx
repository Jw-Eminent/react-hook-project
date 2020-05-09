import React from "react";
import Proptypes from "prop-types";
import Day from "./Day";

const Week = ({ days, onSelect }) => {
  return (
    <tr className="date-table-days">
      {days.map((day, index) => (
        <Day key={index} day={day} onSelect={onSelect} />
      ))}
    </tr>
  );
};

export default Week;

Week.propTypes = {
  days: Proptypes.array.isRequired,
  onSelect: Proptypes.func.isRequired
};
