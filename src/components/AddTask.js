import React, { useState } from "react";
import { Button } from "./Button";

export const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
    }

    return (
        <div className="add-task-container">
        <input 
                onChange={handleInputChange} 
                value={inputData}
                type="text" 
                className="add-task-input"     
        />

        <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
        </div>
    )
}