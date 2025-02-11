import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Pages/Components/Header'
import Footer from './Pages/Components/Footer'
import Committee from './Pages/Committee'
import ConferenceCFP from './Pages/ConferenceCFP'

  function App() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Committee" element={<Committee />} />
          <Route path="/Committee" element={<Committee />} /> 
        </Routes>
        <ConferenceCFP />
        <Footer />
      </>
    )
  }
  
  export default App