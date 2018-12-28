import React, { Component } from 'react';
import { getWeeksForYear } from '../utils/date_calculations.js';
import moment from 'moment';
import FullDay from './FullDay.js';

class FullCalendar extends Component {
  constructor(props) {
    super(props);

    var weeks = getWeeksForYear(2019)
    this.state = { weeks }

  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th width="60" className="text-center">#</th>
            <th width="60" className="text-center">P</th>
            <th width="60" className="text-center">T</th>
            <th width="60" className="text-center">S</th>
            <th width="60" className="text-center">Č</th>
            <th width="60" className="text-center">P</th>
            <th width="60" className="text-center">S</th>
            <th width="60" className="text-center">N</th>
          </tr>
        </thead>
        <tbody>
          {this.state.weeks.map((week, wi) => {
            return <tr key={'w_' + wi}>
              <td key={'wd_' + wi} className="text-center week-no">
                {week.week}
              </td>
              {week.days.map((day, di) => {
                return (
                  <td key={'d_' + di}>
                    <FullDay date={day}></FullDay>
                  </td>)
              })}
            </tr>
          })}
        </tbody>
      </table>

    );
  }
}

export default FullCalendar;