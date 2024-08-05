import React from "react";
import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([{ id: 1, text: 'counter' },{ id: 2, text: 'Timer'}]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const taskId = Date.now();
      setTasks([...tasks, { id: taskId, text: newTask, date: new Date(taskId).toLocaleString() }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        {tasks.map((task) => (
          <div key={task.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p><strong>Task:</strong> {task.text}</p>
            <p><strong>ID:</strong> {task.id}</p>
            <p><strong>Date:</strong> {task.date}</p>
            <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
