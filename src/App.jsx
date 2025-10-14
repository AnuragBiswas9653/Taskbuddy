
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'
import { useEffect, useState } from 'react'

export default function App() {

  const [tasks, settasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    settasks([...tasks,task]);
  }
  return (
    <div>
      <h1>Task Buddy</h1>
      <p>Your friendly Task Manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker />
      <button>Clear all Tasks</button>
    </div>
  )
}