import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import "../App.css"

export const Task = ({task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div 
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid rgb(127, 255, 0)" } : {}}
        >
            <div className='task-title' onClick={() => handleTaskClick (task.id)}> 
            {task.title}
            </div>
            <div className='buttons-container'>
                 <button className='see-task-details-button'> 
                    <CgInfo />
                  </button>
                    <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}> <CgClose />
                    </button>
            </div>
        </div>
        
    )
    
}

