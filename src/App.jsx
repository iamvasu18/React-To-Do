import React, { useState } from 'react';
import Header from './utils/Header';
import ToDoList from './utils/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  return (
    <div className="app">
      <Header />
      <div className="input-section">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
