import React from "react";
import Proptypes from "prop-types";
import { h0 } from "../../fp";

const Day = ({ day, onSelect }) => {
  const classes = [];
  const now = h0();
  if (day < now) {
    classes.push("disabled");
  }
  if ([6, 0].includes(new Date(day).getDay())) {
    classes.push("weekend");
  }

  const dateString = now === day ? "今天" : new Date(day).getDate();
  return !day ? (
    <td className="null"></td>
  ) : (
    <td className={classes.join(" ")} onClick={() => onSelect(day)}>
      {dateString}
    </td>
  );
};

export default Day;

Day.propTypes = {
  day: Proptypes.number,
  onSelect: Proptypes.func.isRequired
};
