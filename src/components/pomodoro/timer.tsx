import React, { useState } from "react";
import { Time } from "../../types/types";
import ButtonWithIcon from "../shared/button-with-icon";
import TimerDisplay from "./timer-display";
import { IoPlay, IoStop, IoPlaySkipForward } from "react-icons/io5";

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
        endTimer();
      }
      return newTime;
    });
  };

  const run = () => {
    if (!timer) setTimer(setInterval(updateTime, 1000));
  };

  const stop = () => {
    setTimer((prevTimer) => {
      if (prevTimer) clearInterval(prevTimer);
      return undefined;
    });
  };

  const endTimer = () => {
    stop();
    if (onTimersEnd) onTimersEnd();
  };

  let startPauseButton: JSX.Element = <></>;
  if (timer) {
    startPauseButton = (
      <ButtonWithIcon icon={<IoStop />} onClick={stop}>
        Pause
      </ButtonWithIcon>
    );
  } else if (time === startTime) {
    startPauseButton = (
      <ButtonWithIcon icon={<IoPlay />} onClick={run}>
        Start
      </ButtonWithIcon>
    );
  } else {
    startPauseButton = (
      <ButtonWithIcon icon={<IoPlay />} onClick={run}>
        Resume
      </ButtonWithIcon>
    );
  }

  let skipButton = (
    <ButtonWithIcon icon={<IoPlaySkipForward />} onClick={endTimer}>
      Skip
    </ButtonWithIcon>
  );

  return (
    <div>
      <TimerDisplay
        minutes={time.minutes}
        seconds={time.seconds}
      ></TimerDisplay>
      <br />
      {startPauseButton}
      {skipButton}
    </div>
  );
};

export default Timer;
