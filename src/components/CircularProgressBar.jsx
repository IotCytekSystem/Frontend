import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div className="w-32 h-32">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={8}
        styles={buildStyles({
          strokeLinecap: 'round',
          textSize: '16px',
          pathColor: '#3182ce', // Change the color as needed
          textColor: '#3182ce', // Change the color as needed
          trailColor: '#d2d6dc', // Change the color as needed
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
