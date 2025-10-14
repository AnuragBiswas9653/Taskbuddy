import React from 'react'

export default function Tasklist({tasks}, {updateTask}, {deleteTask}) {
  return (
    <div>
      <ul>
        {tasks.map((task,index)=>{
          <li>
            <div>
              {task.text}
              <small>{task.priority} {task.category}</small>
            </div>

            <div>
              <button>Complete</button>
              <button>Delete</button>
            </div>
          </li>

        })}
      </ul>
    </div>
  )
}