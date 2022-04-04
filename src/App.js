import React from 'react';
import SignIn from './layouts/SignIn';
import Dashboard from './components/Dashboard'
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
