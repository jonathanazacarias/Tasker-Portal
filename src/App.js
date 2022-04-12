import React from 'react';
import SignIn from './layouts/SignIn';
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <Router>

          <Routes>
            <Route path='/' element={<SignIn></SignIn>}></Route>
            <Route path='/dashboard/users' element={<Dashboard></Dashboard>}></Route>
            <Route path='/dashboard/reports' element={<Dashboard></Dashboard>}></Route>
            <Route path='/dashboard/properties' element={<Dashboard></Dashboard>}></Route>
            <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
          </Routes>

      </Router>
    </>
  );
}

export default App;
