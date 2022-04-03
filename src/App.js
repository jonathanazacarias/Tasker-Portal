import './App.css';
import React from 'react';
import SignIn from './components/component js/SignIn';
import Dashboard from './components/component js/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Dashboard>
          <Routes>
            <Route path='/'></Route>
          </Routes>
        </Dashboard>
      </Router>
    </>
  );
}

export default App;
