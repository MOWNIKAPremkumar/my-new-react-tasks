import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h2>Welcome to the React App</h2>
      <ul>
        <li><Link to="/hello-world">Hello World</Link></li>
        <li><Link to="/counter-program">Counter Program</Link></li>
        <li><Link to="/real-time-input">Real-time Input</Link></li>
        <li><Link to="/list-component">List Component</Link></li>
        <li><Link to="/todo-list">To-Do List</Link></li>
       
      </ul>
    </div>
  );
};

export default HomePage;
