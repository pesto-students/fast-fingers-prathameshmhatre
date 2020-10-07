import React, { useState } from 'react';

const ScoreCard = () => {
    return(
        <div className="score-board h-100">
            <h4 className="text-uppercase mb-4">Score Board</h4>
            <ul>
                <li>
                    <span>Game 1</span> : <span>1:14</span>
                </li>
                <li>
                    <span>Game 1</span> : <span>1:14</span>
                </li>
                <li>
                    <span>Game 1</span> : <span>1:14</span>
                </li>

                <li className="best-score">
                    <p>Personal Best </p>
                    <span>Game 5</span> : <span>1:14</span>
                </li>
            </ul>
        </div>
    );
};


export default ScoreCard;