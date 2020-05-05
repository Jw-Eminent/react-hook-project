import React, { useMemo } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { h0 } from "../../common/fp";
import "./DepartDate.scss";

const DepartDate = ({ time, onClick }) => {
  const h0OfDepart = h0(time);

  const departDateString = useMemo(() => {
    return dayjs(h0OfDepart).format("YYYY-MM-DD");
  }, [h0OfDepart]);

  const isToday = h0OfDepart === h0();

  const currentDay = new Date(h0OfDepart).getDay();
  const currentWeenk = `
    周${["日", "一", "二", "三", "四", "五", "六"][currentDay]}
    ${isToday ? "(今天)" : ""}
  `;

  return (
    <div className="train-ticket-depart-date" onClick={onClick}>
      <input type="hidden" name="date" value={departDateString} />
      {departDateString}
      <span className="train-ticket-depart-date-week">{currentWeenk}</span>
    </div>
  );
};

export default DepartDate;

DepartDate.propTypes = {
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
