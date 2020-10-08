import React, { useEffect, useState } from 'react';

const Home = () => {
  const initialState = {
    playerName: '',
    difficultyLevel: '',
  };

  let [values, setValues] = useState(initialState);

  const handelChange = (e) => {
    let { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const validateField = () => {
    let errors = {};

    if (!values.playerName) {
      errors.playerName = 'Player Name is required';
    }

    if (!values.difficultyLevel) {
      errors.difficultyLevel = 'Difficulty level is required';
    }
  };

  const login = (e) => {
    e.preventDefault();

    if (validateField()) {
      return false;
    }

    // Save the data to local storage and open another page
    const { playerName, difficultyLevel } = values;
    let player = {
      playerName,
      difficultyLevel,
      scoreBoard: [],
    };

    // Check if the localstorage with name exists
    if (!(localStorage.getItem('player') === null)) {
      // Update the difficulty level
      player = JSON.parse(localStorage.getItem('player'));

      player.level = difficultyLevel;
    } else {
      // Save the new player Data
      localStorage.setItem('player', JSON.stringify(player));
    }

    window.location = `/dashboard`;
  };

  useEffect(() => {
    if (!(localStorage.getItem('player') === null)) {
      let player = JSON.parse(localStorage.getItem('player'));
      setValues((values) => ({
        ...values,
        playerName: player.playerName,
      }));
    }
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="icon-container text-center">
        <i className="fas fa-keyboard large-keyboard" aria-hidden="true"></i>
        <div className="title-container">
          <h1>FAST FINGERS</h1>
          <h6>the ultimate typing game</h6>
        </div>
        <form onSubmit={(e) => login(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="TYPE YOUR NAME"
              name="playerName"
              className="form-control player-input"
              onChange={(e) => handelChange(e)}
              value={values.playerName}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control level-select"
              name="difficultyLevel"
              onChange={(e) => handelChange(e)}
              value={values.difficultyLevel}
            >
              <option value="">Difficulty Level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button type="submit" className="btn btn-link start-btn">
            <i className="fas fa-play"></i> Start Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
