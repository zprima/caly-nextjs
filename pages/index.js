import App from '../layouts/App.js'
import Col from '../components/Col.js'
import Row from '../components/Row.js'
import Calendar from '../components/Calendar.js'
import { holidays } from '../consts/holidays.js';
import { vacations, vacationsLeft } from '../consts/vacations.js';
import moment from 'moment';
import Link from 'next/link'

const Index = () => (
  <App>
    <Row>
      <Col>
        <Calendar></Calendar>
      </Col>
    </Row>

    <br></br>

    <Row>
      <Col>
        <ul> Holidays
          {holidays.map((holiday, hi) => {
          return <li key={'h_' + hi}>{moment(holiday).format('DD.MM.YYYY')}</li>
        })}
        </ul>
      </Col>

      <Col>
        <ul> Vacations
          {vacations.map((vacation, vi) => {
          return <li key={'v_' + vi}>{moment(vacation).format('DD.MM.YYYY')}</li>
        })}
        </ul>
      </Col>

      <Col>
        <div>Vacations left: {vacationsLeft()}</div>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td>Weekends</td>
              <td><div className="blue">&nbsp;&nbsp;&nbsp;</div></td>
            </tr>
            <tr>
              <td>Holidays</td>
              <td><div className="green">&nbsp;&nbsp;&nbsp;</div></td>
            </tr>
            <tr>
              <td>Vacations</td>
              <td><div className="red">&nbsp;&nbsp;&nbsp;</div></td>
            </tr>
          </tbody>
        </table>

        <br></br>

        <Link href="/flow">
          <a>Full calendar view</a>
        </Link>

      </Col>

    </Row>
  </App>
)

export default Index