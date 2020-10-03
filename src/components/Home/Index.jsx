import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="border border-light p-3 mb-4">
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="icon-container text-center">
            <i className="fas fa-keyboard large-keyboard" aria-hidden="true"></i>
            <div className="title-container">FAST FINGER</div>
            <div className="subtitle-container">the ultimate typing game</div>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="type your name"
                  name="playerName"
                  className="form-control player-input"
                />
              </div>
              <div class="form-group">
                <select className="form-control level-select" name="difficultyLevel">
                  <option value="">Difficulty Level</option>
                  <option value="easy">Easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <button type="submit" class="btn start-btn">
                <i class="fas fa-play"></i> Start Game
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
