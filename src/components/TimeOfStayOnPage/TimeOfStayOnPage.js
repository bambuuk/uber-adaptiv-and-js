import { Component } from 'react';
import TimeOfStayOnPageView from './TimeOfStayOnPageView';

import './timeOfStayOnPage.sass';

class TimeOfStayOnPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  updateTime = () => {
    this.setState((state) => {
      let s = state.seconds;
      let m = state.minutes;
      let h = state.hours;

      // installing seconds and minutes
      if (state.seconds < 59) {
        s += 1;
      } else {
        s = 0;
        m += 1;
      }

      // installing minutes and hours
      if (m === 60) {
        m = 0;
        h += 1;
      }
      return {
        hours: h,
        minutes: m,
        seconds: s
      };
    });
  };

  getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } 
    return num;
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    const hoursTime = this.getZero(hours);
    const minutesTime = this.getZero(minutes);
    const secondsTime = this.getZero(seconds);
    return (
      <TimeOfStayOnPageView hours={String(hoursTime)} minutes={String(minutesTime)} seconds={String(secondsTime)} />
    );
  }
}

export default TimeOfStayOnPage;
