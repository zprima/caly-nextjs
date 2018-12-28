import React, { Component } from 'react';
import { holidays } from '../consts/holidays.js';
import { vacations } from '../consts/vacations.js';
import moment from 'moment';
import { findDateInArray, isWeekend } from '../utils/date_calculations.js';

const Day = ({ month, date }) => {

  const paintDate = () => {
    if (month != date.getMonth()) {
      return '';
    }

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

    return <div className={"day " + cName}>{moment(date).format('D')}</div>
  }

  return (
    <div className="text-center">{paintDate()}</div>
  );
}

export default Day;
