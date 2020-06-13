import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import ToDoList from './ToDoList'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [inputText, setInputText] = useState('')

  const handleAddTask = task => {
    if (task.length) {
      const newTask = { id: uuid(), done: false, task }

      setTasks([...tasks, newTask])
      setInputText('')
    }
  }

  const handleEditTask = (id, newTask) =>
    setTasks(tasks.map(task => (id === task.id && newTask.length ? { ...task, task: newTask } : task)))

  const handleDeleteTask = id => setTasks(tasks.filter(({ id: currentId }) => currentId !== id))

  const handleToggleDone = id => setTasks(tasks.map(task => (id === task.id ? { ...task, done: !task.done } : task)))

  return (
    <div className="todo">
      <h1 className="title">React to do list</h1>

      <div className="todo-action">
        <input
          className="task-input"
          type="text"
          placeholder="To do..."
          value={inputText}
          onChange={({ target: { value } }) => setInputText(value)}
        />
        <button className="add-task" onClick={() => handleAddTask(inputText)}>
          Add To Do
        </button>
      </div>

      <ToDoList
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleToggleDone={handleToggleDone}
      />
    </div>
  )
}

export default App
