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
  startPauseButtonData: {
    icon: JSX.Element;
    text: "Resume" | "Start" | "Pause";
    action: "run" | "pause";
  };
};

const Timer: React.FC<TimerProps> = ({ startTime, onTimersEnd }) => {
  const [time, setTime] = useState<Time>(startTime);
  const [state, setState] = useState<"running" | "paused" | "not-started">("not-started");

  useEffect(() => {
    let timerId: undefined | NodeJS.Timer = undefined;
    if (state === "running") {
      timerId = setInterval(updateTime, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [state]);

  useEffect(() => {
    setTime(startTime);
  }, [startTime]);

  const updateTime = () => {
    setTime((prevTime) => {
      let newTime = decreaseTime(prevTime);
      if (newTime.minutes === 0 && newTime.seconds === 0) {
        endTimer();
      }
      return newTime;
    });
  };

  const pause = () => {
    setState("paused");
  };

  const run = () => {
    setState("running");
  };

  const endTimer = () => {
    setState("not-started");
    if (onTimersEnd) onTimersEnd();
  };

  const runPauseButtonHandle = (action: "run" | "pause") => {
    if (action === "run") return run();
    pause();
  };

  return (
    <div>
      <TimerDisplay
        minutes={time.minutes}
        seconds={time.seconds}
      ></TimerDisplay>
      <br />
      <ButtonWithIcon
        icon={state === "running" ? <IoStop/> : <IoPlay/>}
        onClick={() => runPauseButtonHandle(state === "running"? "pause" : "run")}
      >
        {state === "running"? "Stop" : state === "not-started"? "Start": "Resume"}
      </ButtonWithIcon>
      <ButtonWithIcon icon={<IoPlaySkipForward />} onClick={endTimer}>
        Skip
      </ButtonWithIcon>
    </div>
  );
};

export default Timer;
