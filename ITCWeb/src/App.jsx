import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Pages/Components/Header'
import Footer from './Pages/Components/Footer'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
     
     <Footer/>
    </>
  )
}

export default App
