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

      <div className="navbar sticky top-0 z-10 bg-black text-white bg-base-100 shadow-sm ">
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
          <Link to="/"><a className="btn btn-ghost text-white hover:bg-gray text-xl max-sm:text-[20px]">Meta IT School</a></Link>
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

      
<footer className="footer w-[100%] footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10 ">
  <nav>
    <h6 className="footer-title">Services</h6>
       <ul className="flex flex-col gap-[3px]">
                  <Link to='/Frontend'><li><a className="link link-hover">frontend</a></li></Link>
                  <Link to='/Backend'><li><a className="link link-hover">Backend</a></li></Link>
                  <Link to='/SMM'><li><a className="link link-hover">SMM</a></li></Link>
                  <Link to='/Robototex'><li><a className="link link-hover">Roboto-texnika</a></li></Link>
                  <Link to='/Grphik'><li><a className="link link-hover">Soatxonlik</a></li></Link>
                  <Link to='/Kyber'><li><a className="link link-hover">kyber xavsizlik</a></li></Link>
                </ul>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <ul>
            <Link to="/Contact"><li><a className='link link-hover'>biz bilan aloqa!</a></li></Link>
            <Link to="/About"><li><a className='link link-hover'>Biz haqqimizda</a></li></Link>
          <Link to='/Krish'><a className='link link-hover'>Kirish</a></Link>
    </ul>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <h1><a href="http://web.telegram.org/a/#2059911642" target="_blank" rel="noopener noreferrer">@metaitschool_admin</a></h1>
    <h1><a href="https://www.instagram.com/metaitschool?igsh=MXdwdGxtcGMyZTkwMw==" className='link link-hover' target="_blank" rel="noopener noreferrer">Meta IT School</a></h1>
  </nav>
  <nav>
    <h6 className="footer-title">Explore</h6>
    <a className="link link-hover">Features</a>
    <a className="link link-hover">Enterprise</a>
    <a className="link link-hover">Security</a>
    <a className="link link-hover">Pricing</a>
  </nav>
  <nav>
    <h6 className="footer-title">Apps</h6>
    <a className="link link-hover">Mac</a>
    <a className="link link-hover">Windows</a>
    <a className="link link-hover">iPhone</a>
    <a className="link link-hover">Android</a>
  </nav>
</footer>
    </div>
    

        </BrowserRouter>
  )
}

export default App
