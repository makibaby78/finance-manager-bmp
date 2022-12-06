import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTracker } from 'meteor/react-meteor-data';
import { Login } from './Login/Login'
import Home from './Home/Home';
import Register from './Register/Register';

function App() {
  const user = useTracker(() => Meteor.user());
  return (
    <div>
      {user ? (
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Routes>
        </Router>
      ):(
        <Router>
            <Routes>
              <Route path="/" element={<Login />} /> 
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Login />} /> 
            </Routes>
        </Router>
      )}
    </div>
  )
}

export default App