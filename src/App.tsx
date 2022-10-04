import React from "react";
import "./App.css";
// import BinToDec from "./pages/bin-to-dec";
import Pomodoro from "./pages/pomodoro";

function App() {
  return (
    // <BinToDec/>
    <Pomodoro
      sprintsUntilLongBreak={2}
      times={{
        'work': { minutes: 25, seconds: 0 },
        "s-break": { minutes: 5, seconds: 0 },
        "l-break": { minutes: 15, seconds: 0 },
      }}
    ></Pomodoro>
  );
}

export default App;
