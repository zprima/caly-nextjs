import React, { Component } from 'react';

import Day from './Day.js'

const Week = ({ month, week }) => {

  return (
    <React.Fragment>
      {
        week.days.map((date, di) => {
          return <td key={di}>
            <Day month={month} date={date}></Day>
          </td>
        })
      }
    </React.Fragment>
  );
}

export default Week;