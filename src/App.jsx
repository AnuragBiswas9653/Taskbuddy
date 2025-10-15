
import Taskform from './components/Taskform'
import Tasklist from './components/Tasklist'
import Progresstracker from './components/Progresstracker'
import './Style.css'
import { useEffect, useState } from 'react'

export default function App() {

  const [tasks, settasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    settasks([...tasks,task]);
  }

  const updateTask = (updatedTask,index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    settasks(newtask);
  }

  const deleteTask = (index) =>{
    settasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    settasks([]);
  }
  return (
    <div className='App'>
      <header>
      <h1 className='title'>Task Buddy</h1>
      <p className='tagline'>Your friendly Task Manager</p>
      </header>
     
      <Taskform addTask={addTask}/>
      <Tasklist tasks = {tasks} 
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker 
      tasks= {tasks}/>
      {tasks.length > 0  && (<button onClick={clearTasks} className='clear-btn'> Clear all Tasks </button>)}
 
    </div>
  )
}