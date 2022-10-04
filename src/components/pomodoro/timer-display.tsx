import React from "react";
import { Time } from "../../types";
import { parseTimeToString } from "../../utils/parsers";


const TimerDisplay: React.FC<Time> = ({ minutes, seconds }) => {
  const timeRepr = parseTimeToString({ minutes, seconds });
  return (
    <span>
      {timeRepr}
    </span>
  );
};

export default TimerDisplay;
