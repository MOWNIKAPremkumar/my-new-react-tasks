import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearTimeout(timerId); 
    }
  }, [time]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time remaining: {time} seconds</p>
    </div>
  );
};

export default Timer;
