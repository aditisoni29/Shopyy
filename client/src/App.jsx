import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/layout' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
