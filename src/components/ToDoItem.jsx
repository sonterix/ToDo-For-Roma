import React, { useState } from 'react'

const ToDoItem = ({ task: { id, done, task }, handleEditTask, handleDeleteTask, handleToggleDone }) => {
  const [taskText, setTaskText] = useState(task)
  const [isEdit, setEdit] = useState(false)

  const handleSaveTask = () => {
    handleEditTask(id, taskText)
    setEdit(false)
  }

  return (
    <li className={`task${done ? ' done' : ''}`}>
      {isEdit ? (
        <>
          <input
            type="text"
            placeholder="Edit task"
            autoFocus={true}
            value={taskText}
            onChange={({ target: { value } }) => setTaskText(value)}
          />
          <button onClick={() => handleSaveTask()}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => handleToggleDone(id)}>{task}</span>
          {!done && <button onClick={() => setEdit(true)}>Edit</button>}
        </>
      )}

      <button onClick={() => handleDeleteTask(id)}>Delete</button>
    </li>
  )
}

export default ToDoItem
