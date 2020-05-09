import React from "react";
import PropTypes from "prop-types";
import Week from "./Week";

const Month = ({ startingTimeMonth, onSelect }) => {
  let days = [];
  const startDay = new Date(startingTimeMonth);
  const currentDay = new Date(startingTimeMonth);

  // 获取当前月有多少天
  while (currentDay.getMonth() === startDay.getMonth()) {
    days.push(currentDay.getTime());
    currentDay.setDate(currentDay.getDate() + 1);
  }

  // 获取日历每个月1号前需要补齐的空位数量
  days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
    .fill(null)
    .concat(days);

  // 获取日历每个月最后一天后面需要补齐的空位数量
  const lastDay = new Date(days[days.length - 1]);
  days = days.concat(
    new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
  );

  const weeks = [];
  for (let row = 0; row < days.length / 7; row++) {
    const week = days.slice(row * 7, (row + 1) * 7);
    weeks.push(week);
  }
  return (
    <table className="date-table">
      <thead>
        <tr>
          <td colSpan="7">
            <h5>
              {startDay.getFullYear()}年{startDay.getMonth() + 1}月
            </h5>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr className="date-table-weeks">
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th className="weekend">周六</th>
          <th className="weekend">周日</th>
        </tr>
        {weeks.map((days, index) => (
          <Week days={days} key={index} onSelect={onSelect} />
        ))}
      </tbody>
    </table>
  );
};

export default Month;

Month.propTypes = {
  startingTimeMonth: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};
