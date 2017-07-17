import React, { Component } from 'react';
let moment = require('moment');

require('./Timer.css');

const MS_IN_DAY = 24 * 60 * 60 * 1000;
const MS_IN_HOUR = 60 * 60 * 1000;
const MS_IN_MINUTE = 60 * 1000;
const MS_IN_SECOND = 1000;

class Timer extends Component {
  constructor(props) {
    super(props);

    let release = moment();
    release.milliseconds(0);
    release.seconds(0);
    release.minute(0);
    release.hour(17);
    release.date(15);
    release.month(10);
    release.year(2017);

    this.release = release;

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    this.recomputeDate = this.recomputeDate.bind(this);
  }

  componentWillMount() {
    this.recomputeDate();
    this.interval = setInterval(this.recomputeDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  recomputeDate() {
    let diff = this.release.diff(moment());
    const days = Math.floor(diff / MS_IN_DAY);
    diff -= days * MS_IN_DAY;
    const hours = Math.floor(diff / MS_IN_HOUR);
    diff -= hours * MS_IN_HOUR;
    const minutes = Math.floor(diff / MS_IN_MINUTE);
    diff -= minutes * MS_IN_MINUTE;
    const seconds = Math.floor(diff / MS_IN_SECOND);

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    const timerStyle = {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 85
    };

    const labelStyle = {
      textAlign: 'right',
      marginRight: 20,
      color: '#b7b7b7'
    };

    const timeStyle = {
      color: '#E36060'
    }

    const labels = ['Days', 'Hours', 'Minutes', 'Seconds'];
    const times = ['days', 'hours', 'minutes', 'seconds'];

    const labelComps = [];
    const timeComps = [];

    const rowWrapperStyle = {
      height: 50
    };

    labels.forEach((l) => {
      labelComps.push(
        <div style={rowWrapperStyle} key={l}>
          <h3>{l}</h3>
        </div>
      );
    });

    times.forEach((t) => {
      timeComps.push(
        <div style={rowWrapperStyle} key={t}>
          <h3>{this.state[t]}</h3>
        </div>
      );
    })

    return (
      <div className='timer' style={timerStyle}>
        <div className='labels' style={labelStyle}>
          {labelComps}
        </div>

        <div className='times' style={timeStyle}>
          {timeComps}
        </div>
      </div>
    );
  }
}

export default Timer;
