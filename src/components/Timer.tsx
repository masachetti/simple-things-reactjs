import React, { useEffect, useState } from "react";
import { Time } from "../types/types";
import TimerDisplay from "./TimerDisplay";

function decreaseTime(prevTime: Time): Time {
  let newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
  let newMinutes =
    prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes;
  return {
    minutes: newMinutes,
    seconds: newSeconds,
  };
}

type TimerProps = {
  startTime: Time;
  onTimersEnd?: () => void;
};

const Timer: React.FC<TimerProps> = ({ startTime, onTimersEnd }) => {
  const [time, setTime] = useState(startTime);
  const [timer, setTimer] = useState<undefined | NodeJS.Timer>();

  const updateTime = () => {
    setTime((prevTime) => {
      let newTime = decreaseTime(prevTime);
      if (newTime.minutes === 0 && newTime.seconds === 0) {
        stop();
        if (onTimersEnd) onTimersEnd();
      }
      return newTime;
    });
  };

  const run = () => {
    if (!timer) setTimer(setInterval(updateTime, 1000));
  };

  const stop = () => {
    setTimer((prevTimer) => {
      if (prevTimer) {
        clearInterval(prevTimer);
      }
      return undefined;
    });
  };

  return (
    <div>
      <TimerDisplay
        minutes={time.minutes}
        seconds={time.seconds}
      ></TimerDisplay>
      <br />
      <button onClick={run}> Start Timer</button>
      <button onClick={stop}> Pause Timer </button>
    </div>
  );
};

export default Timer;
