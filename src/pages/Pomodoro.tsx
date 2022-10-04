import React, { useState } from "react";
import { Timer, PomodoroStateView } from "../components/pomodoro";
import { PomodoroStates, Time } from "../types";

/*
Features:
    - Timer
        - Pause/Start button
        - Reset Button
        - Skip Button
    - States 
        - Work
        - Short break
        - Long break
    - Settings
        - Work time amount
        - Short break time amount
        - Long break time amount
        - Number of work cycles before a long break
        - Sound 
            - Volume 
            - Type of song
    
Components:
- Timer 
- Settings Bar
    - Reset button
    - Seetings button
- Control bar
    - Stop/Resume
    - Skip
- Work Cycles counter
*/

type Props = {
  sprintsUntilLongBreak: number;
  times: { [Key in PomodoroStates]: Time };
};

interface State {
  pomodoroState: PomodoroStates;
  sprintCount: number;
  longBreakCountDown: number;
}

const Pomodoro: React.FC<Props> = ({ sprintsUntilLongBreak, times }) => {
  const [state, setState] = useState<State>({
    pomodoroState: "work",
    sprintCount: 0,
    longBreakCountDown: sprintsUntilLongBreak,
  });

  const nextState = () => {
    setState((prevState) => {
      if (prevState.pomodoroState === "work") {
        return {
          ...prevState,
          pomodoroState:
            prevState.longBreakCountDown === 0 ? "l-break" : "s-break",
        };
      } else {
        let cd = prevState.longBreakCountDown;
        let newCountDownValue = cd ? cd - 1 : sprintsUntilLongBreak;
        return {
          pomodoroState: "work",
          sprintCount: prevState.sprintCount + 1,
          longBreakCountDown: newCountDownValue,
        };
      }
    });
  };
  return (
    <div>
      <PomodoroStateView
        pomodoroState={state.pomodoroState}
      ></PomodoroStateView>
      {state.sprintCount}
      <br />
      <Timer
        startTime={times[state.pomodoroState]}
        onTimersEnd={() => nextState()}
      ></Timer>
      <br />
    </div>
  );
};

export default Pomodoro;
