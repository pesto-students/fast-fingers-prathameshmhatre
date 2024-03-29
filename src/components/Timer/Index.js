import React, { useEffect, useState } from 'react';
import './style.css';

const Timer = ({ time, timeLimit }) => {
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 500;
  const ALERT_THRESHOLD = 250;

  const COLOR_CODES = {
    info: {
      color: 'green',
    },
    warning: {
      color: 'orange',
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: 'red',
      threshold: ALERT_THRESHOLD,
    },
  };
  const [circleDasharray, setCircleDasharray] = useState('');
  const calculateTimeFraction = () => {
    const rawTimeFraction = time.totalms / timeLimit;
    return rawTimeFraction - (1 / (timeLimit)) * (1 - rawTimeFraction);
  };

  const calculateCircleDasharray = () => {
    let calculatedDasharray = (calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0);
    setCircleDasharray(`${calculatedDasharray} ${FULL_DASH_ARRAY}`);
  };

  const formatTime = (time) => {
    let milliSecond = time.ms;
    let seconds = time.s;
    if (milliSecond < 10) {
      milliSecond = `0${milliSecond}`;
    }

    return `${seconds}:${milliSecond}`;
  };

  useEffect(() => {
    calculateCircleDasharray();
  }, [time.totalms]);

  return (
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            id="base-timer-path-remaining"
            strokeDasharray={circleDasharray}
            className={`base-timer__path-remaining theme-color`}
            d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
          ></path>
        </g>
      </svg>
      <span className="base-timer__label">{formatTime(time)}</span>
    </div>
  );
};

export default Timer;
