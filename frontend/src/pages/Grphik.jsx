import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Krish from './Krish'

const Grphik = () => {
  return (
    
    <div>
          <div>
      <div className="mb-[40px] mt-[40px]">
        <div className="flex justify-center">
          <h1 className='font-bold text-[40px] max-sm:text-[30px]'>Soatxonlik</h1>
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
          <h1 className='font-bold text-[25px] p-[10px] flex max-sm:justify-center'>Word</h1>
          <p>Bu kursda siz documentlar yaratish, matnni kiritish, tahrirlash va o'chirish,Shrift o'lchamini, rangini va uslubini o'zgartirishni o'rganasiz</p>
        </div>


         <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold text-[25px] p-[10px] flex max-sm:justify-center'>Excel</h1>
          <p>Bu kursda siz har-hil jadvallar yaratish va ma'lumotlarni kiritish va tahrirlash, ma'lumotlarni filtrlash va saralash kabi narsalar o'rganasiz</p>
        </div>
        </div>
        <div className="">
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[25px] p-[10px] flex max-sm:justify-center'>Power point</h1>
          <p>Bu kursda siz Taqdimotlar yaratish, Slaydlar qo'shish va tahrirlash, Dizayn va animatsiyalar, Grafik tasvirlar yaratish kabi narsalar o'rganasiz</p>
          </div>
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[25px] p-[10px] flex max-sm:justify-center'>Microsoft Publisher</h1>
          <p>Bu kursda siz Turli xil hujjatlarni yaratish, Matnni sozlash, Ranglar sxemasini tanlash, Hujjatni chop etish kabi narsalarni o'rganasiz</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Grphik