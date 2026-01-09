import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Krish from './Krish'

const Robototex = () => {
  return (
    <BrowserRouter>
    
        <div>   <div>
      <div className=" mb-[40px] mt-[40px]">
        <div className="flex justify-center">
          <h1 className='font-bold text-[30px] max-sm:text-[25px]'>Roboto-texnika</h1>
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
          <h1 className='font-bold text-[30px] flax max-sm:justify-center'>Scratch</h1>
          <p>Bu kursda siz animatsiyalar yaratish , koordinatsiyalar bilan ishlash, o'yinlar yaratish kabi narsalarni o'rganasiz</p>
        </div>


         <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold text-[30px] flax max-sm:justify-center'>Elektronika asoslari</h1>
          <p>Bu kursda siz flayerlar, bannerlar, infografikalar, grafikalar va diagrammalar kabi har-hil narsalarni yaratishni o'rganasiz</p>
        </div>
        </div>
        <div className="">
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[30px] flax max-sm:justify-center'>Robotlar yaratish</h1>
          <p>Bu kursda siz robotlarning turlari va ularning qo'llanish sohalari,robotlarni dasturlash asoslari kabi narsalarni o'rganasiz </p>
          </div>
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[30px] flax max-sm:justify-center'>Robotlarni dasturi</h1>
          <p>Bu kursda siz Avtomatlashtirilgan boshqaruvni yaratish, Ko'p funksiyali loyihalar yaratish kabi narsalarni o'rganasiz  </p>
          </div>
          </div>
        </div>
      </div>
    </div></div>
    </BrowserRouter>
  )
}

export default Robototex