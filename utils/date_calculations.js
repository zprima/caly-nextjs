//note: month is 0 based, just like Dates in js
export function getWeeksInMonth(month, year) {
  var weeks = [],
    firstDate = new Date(year, month, 1),
    lastDate = new Date(year, month + 1, 0),
    numDays = lastDate.getDate(),
    days = [];

  var start = 1;
  var end = 7 - firstDate.getUTCDay();

  while (start <= numDays) {
    days = []
    for (var i = start; i <= end; i++) {
      days.push(new Date(year, month, i))
    }

    weeks.push({ start: start, end: end, days: days });

    start = end + 1;
    end = end + 7;
    if (end > numDays)
      end = numDays;
  }

  //pre-fill days
  var week = weeks[0]
  var missingDays = 8 - week.days.length
  if (missingDays > 0) {
    var firstDay = week.days[0];
    for (var i = 1; i < missingDays; i++) {
      var prevDay = subDays(firstDay, i)
      week.days.unshift(prevDay)
    }
  }

  return weeks;
}

export function findDateInArray(date, ar) {
  return ar.find((item) => {
    if (item.getTime() == date.getTime()) {
      return true
    } else {
      return false
    }
  })
}

export function isWeekend(date) {
  if (date.getDay() == 6 || date.getDay() == 0) {
    return true
  } else {
    return false
  }
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function subDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}