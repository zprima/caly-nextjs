import React, { Component } from 'react';
import { holidays } from '../consts/holidays.js';
import { vacations } from '../consts/vacations.js';
import moment from 'moment';
import { findDateInArray, isWeekend, isInPast } from '../utils/date_calculations.js';

const Day = ({ month, date }) => {

  const paintDate = () => {
    if (month != date.getMonth()) {
      return '';
    }

    var cName = ''
    if (isWeekend(date)) {
      cName = 'weekend'
    }
    else if (findDateInArray(date, holidays)) {
      cName = 'holiday'
    }
    else if (findDateInArray(date, vacations)) {
      cName = 'vacation';
    }

    if (isInPast(date)) {
      cName += ' past'
    }

    return <div className={"day " + cName}>{moment(date).format('D')}</div>
  }

  return (
    <div className="text-center">{paintDate()}</div>
  );
}

export default Day;
