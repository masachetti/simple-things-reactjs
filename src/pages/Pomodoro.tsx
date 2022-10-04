import React, { useState } from 'react'
import Timer from '../components/pomodoro/timer'

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
        <Timer startTime={{minutes:25, seconds:0}} onTimersEnd={()=> console.log("Timers end!")}></Timer>
        <br />
    </div>
  )
}

export default Pomodoro