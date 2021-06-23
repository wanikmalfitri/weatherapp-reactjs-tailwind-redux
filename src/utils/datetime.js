import moment from "moment-timezone";

const dayHourTz = (dt, tz) => {
  return moment(dt, "X").tz(tz).format("ddd, hA");
};

export { dayHourTz };
