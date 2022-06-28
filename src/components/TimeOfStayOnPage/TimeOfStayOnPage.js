import { useState, useEffect } from 'react';
import TimeOfStayOnPageView from './TimeOfStayOnPageView';

import './timeOfStayOnPage.sass';

function TimeOfStayOnPage() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const updateTime = () => {
    let s = seconds;
    let m = minutes;
    let h = hours;

    // installing seconds and minutes
    if (seconds < 59) {
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

    setHours(h);
    setMinutes(m);
    setSeconds(s);
  };

  const getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    }
    return num;
  };

  useEffect(() => {
    const timerId = setInterval(() => updateTime(), 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  const hoursTime = getZero(hours);
  const minutesTime = getZero(minutes);
  const secondsTime = getZero(seconds);
  return (
    <TimeOfStayOnPageView hours={String(hoursTime)} minutes={String(minutesTime)} seconds={String(secondsTime)} />
  );
}

export default TimeOfStayOnPage;
