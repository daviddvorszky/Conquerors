import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Auth/Registration';
import Login from './components/Auth/Login';
import FetchProfile from './components/Profile/FetchProfile';
import EditPassword from './components/Profile/EditPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:username" element={<FetchProfile/>} />
        <Route path="/edit-password" element={<EditPassword/>} />
      </Routes>
    </Router>
  );
};

export default App;
