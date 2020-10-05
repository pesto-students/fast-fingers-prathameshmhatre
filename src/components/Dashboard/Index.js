import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRandomWord } from '../../helpers/Index';
import Timer from '../Timer/Index';

const Dashboard = () => {
  let { playerName } = useParams();
  const [time, setTime] = useState({ ms: 99, s: 2 });
  let player = {};
  let updatedS = time.s;
  let updatedMs = time.ms;

  const countDown = () => {
    if (updatedMs === 0) {
      updatedS -= 1;
      updatedMs = 99;
    }

    updatedMs -= 1;

    return setTime({ ms: updatedMs, s: updatedS });
  };

  useEffect(() => {
    if (time.s > 0 || time.ms > 0) {
      setTimeout(() => countDown(), 10);
    }
  });

  // Check if the player exists

  if (!(localStorage.getItem(playerName) === null)) {
    player = JSON.parse(localStorage.getItem(playerName));
  } else {
    // Redirect to home
    window.location = '/';
  }
  return (
    <div>
      <Timer time={time}></Timer>
    </div>
  );
};

export default Dashboard;
