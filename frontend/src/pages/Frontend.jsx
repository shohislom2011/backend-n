import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Krish from './Krish'

const Frontend = () => {
  return (
    <div>
      <div className="mb-[40px] mt-[40px]">
        <div className="flex justify-center">
          <h1 className='font-bold text-[40px] max-sm:text-[30px]'>Frontend web developer</h1>
          </div>
          <div className="flex justify-center">
            <Link to="/Krish"><button className="btn btn-primary">kursga yozilish</button></Link>
            <Routes>
                        <Route path='/Krish' element={<Krish/>}/>
            </Routes>
        </div>
        <div className="flex flex-wrap justify-evenly ">
          <div className="">
        <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold flex text-[40px] max-sm:justify-center'>HTML</h1>
          <p>Bu kursda siz saytni brauser yordamida ochib ishlashingiz va sayt yaratishingiz mumkun</p>
        </div>


         <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold flex text-[40px] max-sm:justify-center'>JS</h1>
          <p>Bu kursda siz animatsiya, sekundomer, tugmalarga har-hil funksiyalar berishingiz mumkin </p>
        </div>
        </div>
        <div className="">
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold flex text-[40px] max-sm:justify-center'>css</h1>
          <p>Bu kursda siz yaratayotgan saytingizni ko'rinishi, stayli, rangi, hajmini boshqarish mumkin  </p>
          </div>
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold flex text-[40px] max-sm:justify-center'>React</h1>
          <p>Bu kursda siz juda katta saytlarni har-hil kutibhonalar yordamida yaratishni o'rganasiz</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend