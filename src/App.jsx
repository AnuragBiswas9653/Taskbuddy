import React from "react"
import Taskform from "./components/Taskform";
import Progresstracker from "./components/Progresstracker";
import Tasklist from "./components/Tasklist";
export default function App() {
  return (
    <div>
      <h1>Task Buddy</h1>
      <p>Your friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker />
      <button> Clear All Tasks</button>
    </div>
  );
}
