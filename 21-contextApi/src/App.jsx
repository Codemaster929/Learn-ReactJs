import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, settheme] = useState('dark')
  return (
    <div>
     <Navbar theme={theme} settheme={settheme}/>
    </div>
  )
}

export default App
