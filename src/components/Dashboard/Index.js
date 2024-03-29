import React, { useEffect, useState } from 'react';
import { getRandomWord } from '../../helpers/Index';
import Timer from '../Timer/Index';
import Header from '../Common/Header';
import ScoreCard from '../Common/ScoreCard';
import Result from '../Result/Index';
import Footer from '../Common/Footer';

const Dashboard = () => {
  const initialState = {
    randomWordInput: '',
  };

  let player = {};
  if (!(localStorage.getItem('player') === null)) {
    player = JSON.parse(localStorage.getItem('player'));
  } else {
    // Redirect to home
    window.location = '/';
  }
  const [time, setTime] = useState({ ms: 0, s: 0,totalms:0 });
  const [gameTime, setGameTime] = useState({ ms: 0, s: 0 });
  const [randomWord, setRandowmWord] = useState('');
  const [values, setValues] = useState(initialState);
  const [randomWordArray, setRandomWordArray] = useState([]);
  const [timer, setTimerValue] = useState(0);
  const [playerDetails, setPlayerDetails] = useState(player);
  const [displayScore, setDisplayScore] = useState(false);
  let updatedS = time.s;
  let updatedMs = time.ms;
  let updatedTotalMs = time.totalms;
  let updatedGameMs = gameTime.ms;
  let updatedGameS = gameTime.s;

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
    setTimerValue(((timerValue*100)+99));

    setTime({ ms: 99, s: timerValue,totalms: ((timerValue*100)+99) });
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
  const saveScore = () => {
    let player = { ...playerDetails };
    player.scoreBoard.push({ ms: gameTime.ms });
    localStorage.setItem('player', JSON.stringify(player));
    setPlayerDetails(player);
  };

  const stopGame = () => {
    setTime({ ms: 0, s: 0 });
  };

  const countDown = () => {
    if (updatedMs === 0) {
      updatedS -= 1;
      updatedMs = 99;
    }

    updatedMs -= 1;
    updatedTotalMs -=1;

    return setTime({ ms: updatedMs, s: updatedS ,totalms:updatedTotalMs});
  };

  const countUp = () => {
    if (updatedGameMs === 99) {
      updatedGameS += 1;
    }

    updatedGameMs += 1;

    return setGameTime({ ms: updatedGameMs, s: updatedGameS });
  };

  useEffect(() => {
    if (!displayScore) {
      calculateTimerValue();
    }
  }, [displayScore]);

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
        countUp();
        countDown();
      } else {
        clearInterval(interval);
        saveScore();
        setDisplayScore(true);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <>
      <Header playerDetails={playerDetails} />
      <div className="row px-3">
        <div className="col-sm-3 h-100">
          {!displayScore ? <ScoreCard playerDetails={playerDetails} /> : ''}
        </div>
        <div className="col-sm-7">
          {displayScore ? (
            <Result
              setDisplayScore={setDisplayScore}
              gameTime={gameTime}
              playerDetails={playerDetails}
            />
          ) : (
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <Timer time={time} timeLimit={(timer)}></Timer>
              <div className="randomWord-container">
                <h1 className="randomWord-text text-center">
                  {' '}
                  {randomWordArray.map((char, index) => {
                    return (
                      <span key={index} className={char.className}>
                        {char.letter}
                      </span>
                    );
                  })}
                </h1>
                <form>
                  <div className="form-group">
                    <input
                      autocomplete="off"
                      type="text"
                      name="randomWordInput"
                      className="form-control player-input randomWordInput"
                      onChange={(e) => handelChange(e)}
                      onKeyUp={(e) => handleKeyPress(e)}
                      value={values.randomWordInput}
                      autoFocus={true}
                    />
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer displayScore={displayScore} stopGame={stopGame}></Footer>
    </>
  );
};

export default Dashboard;
