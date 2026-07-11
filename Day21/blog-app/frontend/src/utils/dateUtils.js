const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

const getTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const time = date.getTime();

  return Number.isNaN(time) ? null : time;
};

const pluralize = (value, unit) => `${value} ${unit}${value === 1 ? "" : "s"}`;

export const isWithinLastHours = (timestamp, hours, now = Date.now()) => {
  const time = getTimestamp(timestamp);

  if (!time) return false;

  const age = now - time;

  return age >= 0 && age <= hours * HOUR;
};

export const formatRelativeCreatedTime = (timestamp, now = Date.now()) => {
  const time = getTimestamp(timestamp);

  if (!time) return "Created at an unknown time";

  const age = Math.max(0, now - time);

  if (age < MINUTE) return "Created just now";
  if (age < HOUR) return `Created ${pluralize(Math.floor(age / MINUTE), "minute")} ago`;
  if (age < DAY) return `Created ${pluralize(Math.floor(age / HOUR), "hour")} ago`;
  if (age < 2 * DAY) return "Created yesterday";
  if (age < WEEK) return `Created ${pluralize(Math.floor(age / DAY), "day")} ago`;
  if (age < MONTH) return `Created ${pluralize(Math.floor(age / WEEK), "week")} ago`;
  if (age < YEAR) return `Created ${pluralize(Math.floor(age / MONTH), "month")} ago`;

  return `Created ${pluralize(Math.floor(age / YEAR), "year")} ago`;
};
