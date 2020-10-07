import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRandomWord } from '../../helpers/Index';
import Timer from '../Timer/Index';

const Dashboard = () => {
  const initialState = {
    randomWordInput: '',
  };
  const { playerName } = useParams();
  const [time, setTime] = useState({ ms: 0, s: 0 });
  const [randomWord, setRandowmWord] = useState('');
  const [values, setValues] = useState(initialState);
  const [randomWordArray, setRandomWordArray] = useState([]);
  const [timer, setTimerValue] = useState(0);
  let player = {};
  let updatedS = time.s;
  let updatedMs = time.ms;

  const calculateTimerValue = () => {
    const rWord = getRandomWord();
    setTime({ ms: 0, s: 0 });
    setRandowmWord(rWord);
    const randomWordLength = rWord.length;
    const difficultyFactor = 1;

    let timerValue = randomWordLength / difficultyFactor;
    if (timerValue < 2) {
      timerValue = 2;
    }
    setTimerValue(timerValue);

    setTime({ ms: 99, s: timerValue });
  };

  const handelChange = (e) => {
    let { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleKeyPress = (e) => {
    let { name, value } = e.target;
    if (value === randomWord) {
      setValues({ randomWordInput: '' });
      calculateTimerValue();
    } else {
      // We need to check the letters and mark them green
      let inputletters = value.split('');
      let randomArr = [...randomWordArray];
      if (inputletters.length <= randomArr.length) {
        for (let i = 0; i < inputletters.length; i += 1) {
          if (inputletters[i] === randomArr[i].letter) {
            randomArr[i].className = 'text-success';
          } else {
            randomArr[i].className = 'text-danger';
          }
        }
      }

      setRandomWordArray(randomArr);
    }
  };

  const countDown = () => {
    if (updatedMs === 0) {
      updatedS -= 1;
      updatedMs = 99;
    }

    updatedMs -= 1;

    return setTime({ ms: updatedMs, s: updatedS });
  };

  useEffect(() => {
    calculateTimerValue();
  }, []);

  useEffect(() => {
    let tempArray = [];
    for (const letter in randomWord) {
      tempArray.push({
        letter: randomWord[letter],
        className: 'active',
      });
    }
    setRandomWordArray(tempArray);
  }, [randomWord]);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (time.s > 0 || time.ms > 0) {
        countDown();
      } else {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [time]);

  // Check if the player exists

  if (!(localStorage.getItem(playerName) === null)) {
    player = JSON.parse(localStorage.getItem(playerName));
  } else {
    // Redirect to home
    window.location = '/';
  }
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Timer time={time} timeLimit={timer}></Timer>
      <div className="randomWord-container">
        <div className="randomWord-text">
          {randomWordArray.map((char, index) => {
            return (
              <span key={index} className={char.className}>
                {char.letter}
              </span>
            );
          })}
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              placeholder="type your name"
              name="randomWordInput"
              className="form-control player-input"
              onChange={(e) => handelChange(e)}
              onKeyUp={(e) => handleKeyPress(e)}
              value={values.randomWordInput}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
