import React, { useState } from 'react';
const Footer = ({ displayScore, stopGame }) => {
  const quitGame = (e) => {
    e.preventDefault();
    window.location.href = '/';
  };

  console.log('display Score-->', displayScore);

  return (
    <div className="footer">
      {displayScore ? (
        <button
          className="btn btn-link btn-primary"
          onClick={(e) => {
            quitGame(e);
          }}
        >
          QUIT
        </button>
      ) : (
        ''
      )}
      {displayScore ? (
        ''
      ) : (
        <button
          className={`btn btn-link btn-primary `}
          onClick={(e) => {
            stopGame();
          }}
        >
          <i class="fas fa-times mr-2"></i> Stop Game
        </button>
      )}
      <button
        className="btn btn-link btn-primary"
        onClick={() => {
          if (window.confirm('Are you sure?')) {
            window.location.href = '/';
          }
        }}
      >
        <i class="fas fa-home"></i>
      </button>
    </div>
  );
};

export default Footer;
