import React, { useContext } from 'react'
import { themedatacontext } from '../context/Themecontext'
const Button = () => {
const [theme,settheme]=useContext(themedatacontext)

    const clicking=()=>{
 settheme('dark')
        
    }
  return (
    <div>
      <button onClick={()=>{
 clicking()
      }}>
        change theme 
      </button>
    </div>
  )
}

export default Button
