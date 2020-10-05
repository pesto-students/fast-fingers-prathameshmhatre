import React from 'react';

const Timer = ({ time }) => {
  return (
    <div>
      Timer {time.s} : {time.ms}
    </div>
  );
};

export default Timer;
