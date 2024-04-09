import React from "react";
import { useState } from "react";
export default function Stopwatch() {
  const [seconds, setseconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startbtnclick = () => {
    const id = setInterval(() => {
      setseconds((sec) => {
        return sec + 1;
      });
    }, 1000);
    setIntervalId(id);
  };
  const pausebtnclick = () => {
    console.log("btn");
    clearInterval(intervalId);
  };
  const resetbtnclick = () => {
    clearInterval(intervalId);
    setseconds(0);
  };
  return (
    <div className="main">
      <h1>Stopwatch</h1>
      <div className="maincontent">
        <div className="clock">
          <span className="hour">
            <h1>{parseInt((seconds / 3600).toString()).toString()}:</h1>
          </span>
          <span className="minutes">
            <h1>{parseInt((seconds / 60).toString()).toString()}:</h1>
          </span>
          <span className="seconds">
            <h1>{parseInt((seconds % 60).toString()).toString()}</h1>
          </span>
        </div>
        <div className="btns">
          <button className="main-btn" onClick={startbtnclick}>
            Start
          </button>
          <button className="main-btn" onClick={pausebtnclick}>
            Pause
          </button>
          <button className="main-btn" onClick={resetbtnclick}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
