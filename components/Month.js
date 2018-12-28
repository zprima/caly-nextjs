import React, { Component } from 'react'
import moment from 'moment'
import { getWeeksInMonth } from '../utils/date_calculations'

import Week from './Week.js'

class Month extends Component {

  constructor(props) {
    super(props)

    const month = props.month || 0
    const date = new Date(2019, month, 1)
    const weeksInMonth = getWeeksInMonth(date.getMonth(), 2019)

    this.state = {
      month: month,
      date: date,
      weeksInMonth: weeksInMonth
    }
  }


  fullDate = () => (
    moment(this.state.date).format("MMMM")
  )

  render() {
    return (
      <div className="month">
        <div className="title">{this.fullDate()} - {this.state.date.getMonth()}</div>
        <div>
          <table>
            <thead>
              <tr>
                <th>P</th>
                <th>T</th>
                <th>S</th>
                <th>Č</th>
                <th>P</th>
                <th>S</th>
                <th>N</th>
              </tr>
            </thead>
            <tbody>
              {this.state.weeksInMonth.map((week, wi) =>
                <tr key={"m_" + wi}>
                  <Week month={this.state.month} week={week}></Week>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Month;