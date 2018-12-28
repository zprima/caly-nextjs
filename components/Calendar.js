import { Component } from 'react'
import Month from './Month'
import Col from '../components/Col.js'
import Row from '../components/Row.js'

const Calendar = () => {

  return (
    <div>
      <Row>
        <Col>
          <Month month={0}></Month>
        </Col>
        <Col>
          <Month month={1}></Month>
        </Col>
        <Col>
          <Month month={2}></Month>
        </Col>
        <Col>
          <Month month={3}></Month>
        </Col>
        <Col>
          <Month month={4}></Month>
        </Col>
        <Col>
          <Month month={5}></Month>
        </Col>
      </Row >

      <Row>
        <Col>
          <Month month={6}></Month>
        </Col>
        <Col>
          <Month month={7}></Month>
        </Col>
        <Col>
          <Month month={8}></Month>
        </Col>
        <Col>
          <Month month={9}></Month>
        </Col>
        <Col>
          <Month month={10}></Month>
        </Col>
        <Col>
          <Month month={11}></Month>
        </Col>
      </Row >
    </div>
  );
}

export default Calendar;