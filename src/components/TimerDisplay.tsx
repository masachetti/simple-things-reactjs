import React from "react";
import { parseTimeToString } from "../utils/parsers";

interface TimerProps {
  minutes: number;
  seconds: number;
}

const TimerDisplay: React.FC<TimerProps> = ({ minutes, seconds }) => {
  const timeRepr = parseTimeToString({ minutes, seconds });
  return (
    <span>
      {timeRepr}
    </span>
  );
};

export default TimerDisplay;
