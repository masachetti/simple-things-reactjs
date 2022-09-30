import React, { useState } from 'react'
import Timer from '../components/Timer'
import TimerDisplay from '../components/TimerDisplay'

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


const Pomodoro: React.FC = () => {
  return (
    <div>
        Pomodoro
        <br />
        {/* <TimerDisplay minutes={25} seconds={0}></TimerDisplay> */}
        <Timer startTime={{minutes:0, seconds:5}} onTimersEnd={()=> console.log("Timers end!")}></Timer>
        <br />
    </div>
  )
}

export default Pomodoro