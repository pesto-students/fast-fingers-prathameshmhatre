import React, { useEffect, useState } from 'react';

const ScoreCard = ({ playerDetails }) => {
  const score = playerDetails.scoreBoard;
  const [personalBest, setPersonalBest] = useState({ game: 0, time: 0 });
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

      setPersonalBest({ game: gameNo, time: maxValue });
    }
  }, [score.length]);
  return (
    <div className="score-board h-100">
      <h4 className="text-uppercase mb-4">Score Board</h4>
      <ul>
        {score.map((game, index) => {
          return (
            <li>
              <span>Game {index}</span> : <span>{formatTime(game.ms)}</span>
            </li>
          );
        })}

        {score.length > 0 ? (
          <li className="best-score">
            <p>Personal Best </p>
            <span>Game {personalBest.game}</span> : <span>{formatTime(personalBest.time)}</span>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default ScoreCard;
