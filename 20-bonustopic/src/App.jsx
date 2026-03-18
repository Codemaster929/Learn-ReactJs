import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, settheme] = useState('dark')
  return (
    <div>
    <h1>Hello there , theme is {theme}</h1>
    <Navbar theme={theme} settheme={settheme}/>
    </div>
  )
}

export default App
