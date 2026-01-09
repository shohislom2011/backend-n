import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Frontend from './pages/Frontend'
import Backend from './pages/Backend'
import SMM from './pages/SMM'
import Robototex from './pages/Robototex'
import Grphik from './pages/Grphik'
import Kyber from './pages/Kyber'
import Krish from './pages/Krish'
const App = () => {


  return (
    <BrowserRouter>
    <div className='max-w-[1440px] m-auto'>

      <div className="navbar sticky top-0  z-10 bg-black text-white bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             <ul className="menu menu-horizontal text-black px-1">
            <Link to="/About"><li><a>Biz haqqimizda</a></li></Link>
            <li>
              <details>
                <summary>qabullar</summary>
                <ul className="p-2 bg-base-100 w-40 text-black z-1">
                  <Link to='/Frontend'><li><a>frontend</a></li></Link>
                  <Link to='/Backend'><li><a>Backend</a></li></Link>
                  <Link to='/SMM'><li><a>SMM</a></li></Link>
                  <Link to='/Robototex'><li><a>Roboto-texnika</a></li></Link>
                  <Link to='/Grphik'><li><a>Graphik Design</a></li></Link>
                  <Link to='/Kyber'><li><a>kyber xavsizlik</a></li></Link>
                </ul>
              </details>
            </li>
            <Link to="/Contact"><li><a>biz bilan aloqa!</a></li></Link>
          </ul>
            </ul>
          </div>
          <Link to="/"><a className="btn btn-ghost text-white hover:bg-gray hover:text-black text-xl max-mb:text-[20px]">Meta IT School</a></Link>
        </div>



        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/About"><li><a>Biz haqqimizda</a></li></Link>
            <li>
              <details>
                <summary>qabullar</summary>
                <ul className="p-2 bg-base-100 w-40 text-black z-1">
                  <Link to='/Frontend'><li><a>frontend</a></li></Link>
                  <Link to='/Backend'><li><a>Backend</a></li></Link>
                  <Link to='/SMM'><li><a>SMM</a></li></Link>
                  <Link to='/Robototex'><li><a>Roboto-texnika</a></li></Link>
                  <Link to='/Grphik'><li><a>Soatxonlik</a></li></Link>
                  <Link to='/Kyber'><li><a>kyber xavsizlik</a></li></Link>
                </ul>
              </details>
            </li>
            <Link to="/Contact"><li><a>biz bilan aloqa!</a></li></Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/Krish'><a className="btn">Kirish</a></Link>
        </div>
      </div>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Frontend' element={<Frontend/>}/>
      <Route path='/Backend' element={<Backend/>}/>
      <Route path='/SMM' element={<SMM/>}/>
      <Route path='/Robototex' element={<Robototex/>}/>
      <Route path='/Grphik' element={<Grphik/>}/>
      <Route path='/Kyber' element={<Kyber/>}/>
      <Route path='/Krish' element={<Krish/>}/>
       
      </Routes>

      
<footer className="footer w-[100%]  text-[20px] max-lg:text-[25px] max-sm:pb-[-0px] max-sm:text-[17px]max-md:mb-[15px] max-sm:text-[15px] max-sm:gap-[3px] max-md:gap-[7px] footer-horizontal  justify-evenly h-auto max-sm:h-[400px] bg-neutral text-neutral-content grid-rows-2 p-10 max-sm:p-7 ">
  <nav className=''>
       <ul className="flex flex-col gap-[15px] max-md:mb-[15px] max-sm:text-[15px] max-sm:gap-[3px] max-md:gap-[7px] ">
    <h6 className="footer-title ">Services</h6>
                  <Link to='/Frontend'><li><a className="link link-hover text-gray-200">frontend</a></li></Link>
                  <Link to='/Backend'><li><a className="link link-hover text-gray-200">Backend</a></li></Link>
                  <Link to='/SMM'><li><a className="link link-hover text-gray-200">SMM</a></li></Link>
                  <Link to='/Robototex'><li><a className="link link-hover text-gray-200">Roboto-texnika</a></li></Link>
                  <Link to='/Grphik'><li><a className="link link-hover text-gray-200">Soatxonlik</a></li></Link>
                  <Link to='/Kyber'><li><a className="link link-hover text-gray-200">kyber xavsizlik</a></li></Link>
                </ul>
  </nav>
  <nav>
    <ul className='flex flex-col gap-[15px] max-md:mb-[10px] max-sm:text-[15px] max-sm:gap-[3px] max-md:gap-[7px] '>
    <h6 className="footer-title">Company</h6>
            <Link to="/Contact"><li><a className='link link-hover text-gray-200'>biz bilan aloqa!</a></li></Link>
            <Link to="/About"><li><a className='link link-hover text-gray-200'>Biz haqqimizda</a></li></Link>
          <Link to='/Krish'><a className='link link-hover text-gray-200'>Kirish</a></Link>
    </ul>
  </nav>
  <nav className='flex flex-col gap-[10px] max-md:mb-[15px] max-sm:text-[15px] max-sm:gap-[3px] max-md:gap-[7px] '>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover text-gray-200">Terms of use</a>
    <a className="link link-hover text-gray-200">Privacy policy</a>
    <a className="link link-hover text-gray-200">Cookie policy</a>
  </nav>
  <nav className='flex flex-col gap-[15px] max-md:mb-[15px] max-sm:text-[15px] max-sm:gap-[3px] max-md:gap-[7px] '>
    <h6 className="footer-title">Social</h6>
    <h1><a href="http://web.telegram.org/a/#2059911642" target="_blank" rel="noopener noreferrer">@metaitschool_admin</a></h1>
    <h1><a href="https://www.instagram.com/metaitschool?igsh=MXdwdGxtcGMyZTkwMw==" className='link link-hover text-gray-200' target="_blank" rel="noopener noreferrer">Meta IT School</a></h1>
  </nav>
      <nav className='flex flex-col gap-[10px] max-sm:hidden max-md:mb-[15px] max-sm:text-[15px] max-sm:gap-[3px] max-md:gap-[7px] '>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover text-gray-200">Terms of use</a>
    <a className="link link-hover text-gray-200">Privacy policy</a>
    <a className="link link-hover text-gray-200">Cookie policy</a>
  </nav>
    <nav className='flex flex-col gap-[10px] max-sm:hidden max-md:mb-[15px] max-sm:text-[15px] max-sm:gap-[3px] max-md:gap-[7px] '>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover text-gray-200">About us</a>
    <a className="link link-hover text-gray-200">Contact</a>
    <a className="link link-hover text-gray-200">Jobs</a>
    <a className="link link-hover text-gray-200">Press kit</a>
  </nav>
</footer>
    </div>
    

        </BrowserRouter>
  )
}

export default App
