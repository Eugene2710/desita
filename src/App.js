import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Cruler from './pages/Cruler';
import Future from './pages/Future'


function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element = {<Home />} />
                <Route exact path="/Cruler" element = {<Cruler />} />
                <Route exact path ="/Future" element = {<Future />}/>
            </Routes>
        </Router>
    )
}
  
export default App

