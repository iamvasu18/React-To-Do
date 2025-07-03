import React from 'react';
import ToDoItem from './ToDoitem';

function ToDoList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
