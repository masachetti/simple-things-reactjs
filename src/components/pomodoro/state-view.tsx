import React from "react";
import { PomodoroStates } from "../../types";

type Props = {
  pomodoroState: PomodoroStates;
};

function getStateText(state:PomodoroStates){
  switch(state){
    case "work":
      return "Working!"
    case "l-break":
      return "Long Break..."
    case "s-break":
      return "Short Break.."
  }
}

const PomodoroStateView: React.FC<Props> = ({ pomodoroState }) => {

  const stateText = getStateText(pomodoroState);
  return <div>{stateText}</div>;
};

export default PomodoroStateView;
