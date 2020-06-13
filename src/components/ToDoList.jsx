import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ tasks, handleEditTask, handleDeleteTask, handleToggleDone }) => (
  <ul className="tasks">
    {tasks.map((task, index) => (
      <ToDoItem
        key={index}
        task={task}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleToggleDone={handleToggleDone}
      />
    ))}
  </ul>
)

export default ToDoList
