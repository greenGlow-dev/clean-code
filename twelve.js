// Don't ❌3
let date1 = "21-8-2021";

function splitIntoDayMonthYear() {
  date = date.split("-");
}

splitIntoDayMonthYear();

// Another function could be expecting date as a string
console.log(date); // ['21', '8', '2021'];

// Do ✅
function splitIntoDayMonthYear(date) {
  return date.split("-");
}

const date2 = "21-8-2021";
const newDate = splitIntoDayMonthYear(date);

// Original vlaue is intact
console.log(date); // '21-8-2021';
console.log(newDate); // ['21', '8', '2021'];