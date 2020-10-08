import React, { useState, useEffect } from 'react';

const Result = ({ setDisplayScore, gameTime, playerDetails }) => {
  const score = playerDetails.scoreBoard;
  const game = score.length - 1;
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 100);
    const minute = Math.floor(seconds / 60);

    return `${minute}:${seconds}`;
  };

  useEffect(() => {
    if (score.length > 0) {
      let tmp = score.map(function (element) {
        return element.ms;
      });
      const maxValue = Math.max.apply(Math, tmp);

      const gameNo = tmp.indexOf(maxValue);

      if (gameNo === game) {
        setIsNewHighScore(true);
      } else {
        setIsNewHighScore(false);
      }
    }
  }, [score.length]);
  return (
    <div className="results d-flex flex-column align-items-center justify-content-center">
      <h2>
        Score : <span>Game {game}</span>
      </h2>
      <h1>{formatTime(gameTime.ms)}</h1>
      <h3>{isNewHighScore ? `New High Score` : ``}</h3>
      <button className="btn btn-primary" onClick={() => setDisplayScore(false)}>
        <i class="fas fa-reply mr-2"></i>Play Again
      </button>
    </div>
  );
};

export default Result;
