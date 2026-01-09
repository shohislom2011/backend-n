import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Krish from './Krish'

const Kyber = () => {
  return (
    <BrowserRouter>
    
    <div>
          <div>
      <div className="mb-[40px] mt-[40px]">
        <div className="flex justify-center">
          <h1 className='font-bold text-[40px] max-sm:text-[30px]'>Kyber xafsizlig</h1>
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
          <h1 className='font-bold flex text-[25px] max-sm:justify-center'>Kompyuter xavfsizligi.</h1>
          <p>Bu kursda siz tarmoq xavfsizligi, kompyuter viruslari va antiviruslar, elektron tijorat xavfsizligi kabi narsalarni o'rganasiz </p>
        </div>


         <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold flex text-[25px] max-sm:justify-center'>Kali Linuks</h1>
          <p>Bu kursda siz tarmoqni skanerlash, parollarni buzish va ularni xafsizligini tamirlash,fayllarni shifrlash kabi narsalarni o'rganasiz</p>
        </div>
        </div>
        <div className="">
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold flex text-[25px] max-sm:justify-center'>python</h1>
          <p>Bu kursda siz Veb-ilovalar yaratish, Ma'lumotlar bilan ishlash, Avtomatlashtirilgan vazifalarni dasturlash kabi narsalarni o'rganasiz</p>
          </div>
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold flex text-[25px] max-sm:justify-center'>xavsizlik vositalari</h1>
          <p>Bu kursda siz kompyuter dasturlari, tizimlari va tarmoqlarini ruxsatsiz kirishdan himoya qilasiz shu kabi narsalarni o'rganasiz</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default Kyber