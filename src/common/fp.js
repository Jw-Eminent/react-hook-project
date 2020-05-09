/**
 * Get the timestamp of the current day at 0 o'clock
 * @param {*} [timestamp=Date.now()]
 * @returns
 */
export const h0 = (timestamp = Date.now()) => {
  const target = new Date(timestamp);
  target.setHours(0);
  target.setMinutes(0);
  target.setSeconds(0);
  target.setMilliseconds(0);
  return target.getTime();
};

/**
 * get the timestamp of the first day of the three months from the current month
 * @returns
 */
export const m3 = () => {
  const current1stDay = new Date();
  current1stDay.setHours(0);
  current1stDay.setMinutes(0);
  current1stDay.setSeconds(0);
  current1stDay.setMilliseconds(0);
  current1stDay.setDate(1);
  const currentMonth = current1stDay.getTime();

  current1stDay.setMonth(current1stDay.getMonth() + 1);
  const nextMonth = current1stDay.getTime();

  current1stDay.setMonth(current1stDay.getMonth() + 1);
  const next2Month = current1stDay.getTime();

  return [currentMonth, nextMonth, next2Month];
};
