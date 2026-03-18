import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import coursedetails from './pages/Coursedetails'
import Coursedetails from './pages/Coursedetails'
import Navbar2 from './components/Navbar2'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/courses' element={<Courses/>}></Route>
<Route path='/courses/:id' element={<Coursedetails/>}></Route>
  <Route path='/product' element={<Product/>}>
    <Route path='men' element={<Men/>}></Route>
  <Route path='women' element={<Women/>}></Route>
  <Route path='kids' element={<Kids/>}></Route>
  </Route>

  <Route path='*' element={<Notfound/>}></Route>
 
  </Routes>    
      <Footer/>
      
    </div>
  )
}
// a simpler way to make the nested routing .....
//  <Route path='/product/men' element={<Men/>}></Route>
//   <Route path='/product/women' element={<Women/>}></Route> 
export default App
