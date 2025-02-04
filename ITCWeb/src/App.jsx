import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Pages/Components/Header'
import Footer from './Pages/Components/Footer'
import Committee from './Pages/Committee'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Committee" element={<Committee/>}/>
    </Routes>
     
     <Footer/>
    </>
  )
}

export default App
