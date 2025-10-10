import { useState } from "react";

 
 export default function Taskform() {

    const [task, setTask] = useState('');
    const [priority, setPriortity] = useState('Medium');
    const [category, setCategory] = useState('General');


    return (
       
       <form id="task-form">
        <div id="inp">
        <input type="text" placeholder="Enter The Task" 
        onChange={(e)=>setTask(e.target.value)}/>
        <button type="submit">Add Task</button>
        {/* Span is used for align the button side of the input text */}
        </div>
     

       <div id='btns'>
        <select onChange={(e)=>setPriortity(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>

        <select onChange={(e)=>setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
        </select>

        {/* <h1>{task} {priority} {category} </h1> */}
        {/* to check is it fetching the value or not it is not compulsory is for owni checking weather it is fetching data or not  */}
       </div>
       </form>
        
    );
 }