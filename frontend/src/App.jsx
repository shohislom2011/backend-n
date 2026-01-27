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
                  <Link to='/Grphik'><li><a>Soatxonlik</a></li></Link>
                  <Link to='/Kyber'><li><a>kyber xavsizlik</a></li></Link>
                </ul>
              </details>
            </li>
            <Link to="/Contact"><li><a>biz bilan aloqa!</a></li></Link>
          </ul>
            </ul>
          </div>
          <Link to="/"><a className="btn btn-ghost text-white hover:bg-gray hover:text-black text-xl max-sm:text-[15px]">Meta IT School</a></Link>
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
          <a href="https://t.me/metaitschool_admin" target="_blank" rel="noreferrer" className="btn">Kursga yozilish</a>
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

      <footer className="footer p-10 bg-neutral text-neutral-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  
  <nav className="flex flex-col items-start max-sm:items-center max-sm:text-center w-full">
    <h6 className="footer-title opacity-100 text-white border-b-2 border-primary pb-1 mb-4">Kurslar</h6>
    <div className="flex flex-col gap-2">
      <Link to='/Frontend' className="link link-hover">Frontend</Link>
      <Link to='/Backend' className="link link-hover">Backend</Link>
      <Link to='/SMM' className="link link-hover">SMM</Link>
      <Link to='/Robototex' className="link link-hover">Roboto-texnika</Link>
      <Link to='/Grphik' className="link link-hover">Grafik Dizayn</Link>
      <Link to='/Kyber' className="link link-hover">Kiber Xavfsizlik</Link>
    </div>
  </nav>

  
  <nav className="flex flex-col items-start max-sm:items-center max-sm:text-center w-full">
    <h6 className="footer-title opacity-100 text-white border-b-2 border-primary pb-1 mb-4">Bog'lanish</h6>
    <div className="flex flex-col gap-2">
      <Link to="/About" className="link link-hover">Biz haqimizda</Link>
      <Link to="/Contact" className="link link-hover">Bog'lanish</Link>
      <a href="https://t.me/metaitschool_admin" target="_blank" rel="noreferrer" className="text-purple-500 font-bold">Kursga yozilish</a>

    </div>
  </nav>

  
  <nav className="flex flex-col items-start max-sm:items-center max-sm:text-center w-full">
    <h6 className="footer-title opacity-100 text-white border-b-2 border-primary pb-1 mb-4">Ijtimoiy Tarmoq</h6>
    <div className="flex flex-col gap-4">
      <a href="https://t.me/metaitschool_admin" target="_blank" rel="noreferrer" className="flex items-center gap-2 link link-hover">
        <div className="bg-blue-600 p-2 rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.467 8.216l-1.76 8.273c-.13.58-.477.724-.963.451l-2.684-1.978-1.294 1.246c-.143.143-.264.263-.539.263l.192-2.723 4.956-4.477c.216-.192-.047-.299-.333-.11l-6.125 3.856-2.637-.822c-.573-.179-.585-.573.12-.852l10.303-3.974c.477-.174.894.11.765.844z"/></svg>
        </div>
        Telegram
      </a>
      <a href="https://instagram.com/metaitschool" target="_blank" rel="noreferrer" className="flex items-center gap-2 link link-hover">
        <div className="bg-pink-600 p-2 rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072z"/></svg>
        </div>
        Instagram
      </a>
    </div>
  </nav>

  
  <nav className="flex flex-col items-start max-sm:items-center max-sm:text-center w-full">
    <h6 className="footer-title opacity-100 text-white border-b-2 border-primary pb-1 mb-4">Manzil</h6>
    <p className="text-sm leading-6">
      Andijon sh., Leninskiy ko'chasi,<br />
      Megasef dorixonasi to'g'risida.
    </p>
    <p className="mt-4 font-bold text-white">☎+998 94 154 44 88</p>
  </nav>

</footer>




<div className="footer footer-center p-4 bg-neutral text-neutral-content border-t border-gray-700">
  <aside>
    <p>© {new Date().getFullYear()} Meta IT School. Barcha huquqlar himoyalangan.</p>
  </aside>
</div>
    </div>
    

        </BrowserRouter>
  )
}

export default App
