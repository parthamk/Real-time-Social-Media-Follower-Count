import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import UserDetails from './components/UserDetails'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/user/:username" element={<UserDetails/>} />
      </Routes>
    </Router>
  )
}

export default App