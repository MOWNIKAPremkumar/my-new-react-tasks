import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages.js/Homepage';
import HelloWorld from './components/HelloWorld';
import CounterProgram from './components/CounterProgram';
import RealTimeInput from './components/RealTimeInput';
import ListComponent from './components/ListComponent';
import ToDoList from'./components/ToDoList';


function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hello-world" element={<HelloWorld />} />
        <Route path="/counter-program" element={<CounterProgram />} />
        <Route path="/real-time-input" element={<RealTimeInput />} />
        <Route path="/list-component" element={<ListComponent />} />
        <Route path="/todo-list" element={<ToDoList/>} />
       
      </Routes>
    </Router>
  );
};

export default App;
