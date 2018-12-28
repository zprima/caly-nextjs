import React, { Component } from 'react';
import { holidays } from '../consts/holidays.js';
import { vacations } from '../consts/vacations.js';
import moment from 'moment';

const Day = ({ month, date }) => {


  const paintDate = () => {

    if (month != date.getMonth()) {
      return '';
    }

    const foundHoliday = holidays.find((holiday) => {
      if (holiday.getTime() == date.getTime()) {
        return true
      } else {
        return false
      }
    })

    const foundVacation = vacations.find((vacation) => {
      if (vacation.getTime() == date.getTime()) {
        return true
      } else {
        return false
      }
    })


    var d = moment(date).format('D')

    var cName = ''
    // console.log(date, date.getDay(), 6)
    if (date.getDay() == 6 || date.getDay() == 0) {
      cName = 'blue'
    }
    else if (foundHoliday) {
      cName = 'green'
    }
    else if (foundVacation) {
      cName = 'red';
    }

    // console.log(cName);

    return <div className={"day " + cName}>{d}</div>
  }

  return (
    <div className="text-center">{paintDate()}</div>
  );
}

export default Day;
