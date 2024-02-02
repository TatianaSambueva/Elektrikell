import React from 'react';
import Countdown from 'react-countdown';

const CountDownComp = () => {
  // Calculate target date as one hour from the current time
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 1);

  // Custom renderer function for displaying hours, minutes, and seconds
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render something when the countdown is completed
      return <span>Countdown completed!</span>;
    } else {
      // Render the countdown in the format HH:MM:SS
      return (
        <div>
          <span>{hours} hours </span>
          <span>{minutes} minutes </span>
          <span>{seconds} seconds</span>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountDownComp;