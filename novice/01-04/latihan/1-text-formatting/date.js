const now = Date.now();
const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short"
};
const indoDateTime = new Intl.DateTimeFormat("id", options).format;

console.log(indoDateTime(now)); // 07/16/14, 5:00 PM PDT
