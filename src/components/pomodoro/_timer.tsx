import React, { useEffect, useState } from "react";
import { Time } from "../../types";
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

type State = {
  time: Time;
  timer: undefined | NodeJS.Timer;
  controlButtonIcon: JSX.Element;
  controlButtonLabel: "Resume" | "Start" | "Pause";
};

const Timer: React.FC<TimerProps> = ({ startTime, onTimersEnd }) => {
  // const [time, setTime] = useState(startTime);
  // const [timer, setTimer] = useState<undefined | NodeJS.Timer>();
  const [state, setState] = useState<State>({
    time: startTime,
    timer: undefined,
    controlButtonIcon: <IoPlay />,
    controlButtonLabel: "Start",
  });

  useEffect(() => {
    setState((prevState)=>{
      if (!prevState.timer) return {...prevState, time: startTime}
      return prevState
    })
  }, [startTime]);

  const updateTime = () => {
    setState((prevState)=>{
      let newTime = decreaseTime(prevState.time);
      if (newTime.minutes === 0 && newTime.seconds === 0) {
        endTimer();
      }
      return {...prevState, time: newTime};
    })
  };

  const run = () => {
    setState((prevState)=>{
      if (!prevState.timer) return {...prevState, timer: setInterval(updateTime, 1000)}
      return prevState
    })
  };

  const stop = () => {
    setState((prevState) => {
      if (prevState.timer) clearInterval(prevState.timer);
      return { ...prevState, timer: undefined };
    });
  };

  const endTimer = () => {
    stop();
    if (onTimersEnd) onTimersEnd();
  };

  return (
    <div>
      <TimerDisplay
        minutes={state.time.minutes}
        seconds={state.time.seconds}
      ></TimerDisplay>
      <br />
      <ButtonWithIcon icon={state.controlButtonIcon} onClick={run}>
        {state.controlButtonLabel}
      </ButtonWithIcon>
      <ButtonWithIcon icon={<IoPlaySkipForward />} onClick={endTimer}>
        Skip
      </ButtonWithIcon>
    </div>
  );
};

export default Timer;
