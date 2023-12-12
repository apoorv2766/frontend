import React from 'react'
import Navbar from './Navbar'
import Aside from './Aside'
import Main from './Main'
import Footer from './Footer'

const Home = () => {
  return (
    <>
  <Navbar/>
    <div className='flex'>
  <Aside/>
  <Main/>
    </div>
    <Footer/>
    </>
  )
}

export default Home