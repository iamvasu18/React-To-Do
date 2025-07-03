import React, { useState } from 'react';

function ToDoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
