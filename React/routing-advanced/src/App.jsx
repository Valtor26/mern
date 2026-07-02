import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import {Route, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Nav2 from './components/Nav2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'> 
      <Navbar/>
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Courses/:id' element={<CourseDetails/>}/>
        <Route path='/Product' element={<Product/>}>
          <Route path='Men' element={<Men/>}/>
          <Route path='Women' element={<Women/>}/>
        </Route>
       
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App