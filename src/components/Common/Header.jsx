import React from 'react';
const Header = ({ playerDetails }) => {
  return (
    <div className="header mb-3">
      <div className="row px-3">
        <div className="col-sm-6">
          <div className="palyer-info">
            <div className="d-flex align-items-center my-3">
              <i className="fas fa-user mr-4"></i>
              <h3>{playerDetails.playerName}</h3>
            </div>
            <div className="d-flex align-items-center my-3">
              <i className="fa fa-gamepad mr-3" aria-hidden="true"></i>
              <h3>
                Level: <span>{playerDetails.difficultyLevel}</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-sm-6 text-right">
          <div className="title-container">
            <h1 className="text-right ft-20">FAST FINGERS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
