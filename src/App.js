import React from 'react'
import './App.css'
import { BrowserRouter , Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'





function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route component={Home} path='/' exact />
      </div>
    </BrowserRouter>
  )
}

export default App;
