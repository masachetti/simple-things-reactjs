import React from "react";
import { convertToTimeString } from "../utils/utils";

interface TimerProps {
  minutes: number;
  seconds: number;
}

const TimerDisplay: React.FC<TimerProps> = ({ minutes, seconds }) => {
  const timeRepr = convertToTimeString({ minutes, seconds });
  return (
    <span>
      {timeRepr}
    </span>
  );
};

export default TimerDisplay;
