
import { useContext } from 'react'
import Nav2 from './Nav2'
import { themedatacontext } from '../context/Themecontext'

const Navbar = () => {
  const [theme]=useContext(themedatacontext)

  return (  <div className={theme}>
      <h2 >Sheriyans</h2>

      <Nav2 />
    </div>
  )
}

export default Navbar
