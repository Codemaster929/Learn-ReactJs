import { useContext } from "react"
import { themedatacontext } from "../context/Themecontext"



const Nav2 = () => {
const [theme,settheme]=useContext(themedatacontext)
  return (
    <div className='nav2'>
    <h2>Home</h2>
    <h2>About</h2>
  <h2>Contact</h2>
    <h2>{theme}</h2>
    </div>
  )
}

export default Nav2
