import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Krish from './Krish'

const Backend = () => {
  return (
    <BrowserRouter>
    
    <div>
        <div>
      <div className="mb-[40px] mt-[40px]">
        <div className="flex justify-center">
          <h1 className='font-bold text-[40px] max-sm:text-[30px]'>Backend web developer</h1>
          </div>
          <div className="flex justify-center">
            <Link to="/Krish"><button className="btn btn-primary">kursga yozilish</button></Link>           
             <Routes>
                        <Route path='/Krish' element={<Krish/>}/>
            </Routes>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className="">
        <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold text-[40px] flex max-sm:justify-center'>PHP</h1>
          <p>Bu kursda siz ma'lumotlar bazasi bilan ishlash CRUD amallar bajarish serverda fayllarni boshqarishni o'rganasiz</p>
        </div>


         <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold text-[40px] flex max-sm:justify-center'>Python</h1>
          <p>Bu kursda siz Kundalik vazifalarni avtomatlashtirish, fayllarni qayta ishlash uchun skriptlar yaratishni o'rganasiz </p>
        </div>
        </div>
        <div className="">
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[40px] flex max-sm:justify-center'>Git Hub</h1>
          <p>Bu kursda siz bitta proyektni do'stlariz yoki ham-kasblaringiz bilan birga onlayn ravishda ishlashni o'rganasiz </p>
          </div>
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[40px] flex max-sm:justify-center'>Java</h1>
          <p>Bu kursda siz yordamida mobil ilovalar, veb-ilovalar, o'yinlarni hamda boshqa dasturlar yaratishni o'rganasiz </p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default Backend