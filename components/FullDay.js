import React, { Component } from 'react';
import moment from 'moment';
import { holidays } from '../consts/holidays.js';
import { vacations } from '../consts/vacations.js';
import { findDateInArray, isWeekend } from '../utils/date_calculations.js';

const FullDay = ({ date }) => {

  const painDay = () => {
    console.log(date, date.getUTCFullYear())
    if (date.getFullYear() == 2019) {

      var cName = ''
      if (isWeekend(date)) {
        cName = 'blue'
      }
      else if (findDateInArray(date, holidays)) {
        cName = 'green'
      }
      else if (findDateInArray(date, vacations)) {
        cName = 'red';
      }

      return <div className={"text-center " + cName}>{moment(date).format("MM.DD")}</div>
    } else {
      return <div></div>
    }
  }

  return (
    painDay()
  );
}

export default FullDay;