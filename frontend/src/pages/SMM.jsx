import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Krish from './Krish'

const SMM = () => {
  return (
    
              <div>
            <div>
      <div className="mb-[40px] mt-[40px]">
        <div className="flex justify-center">
          <h1 className='font-bold text-[40px] max-sm:text-[30px]'>SMM</h1>
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
          <h1 className='font-bold text-[25px] flex max-sm:justify-center'>SMM aoslari</h1>
          <p>Bu kursda siz bu biznes uchun mijozlar jalb qilish maqsadida ijtimoiy tarmoqlarda marketingni amalga oshirishni o'rganasiz</p>
        </div>


         <div className="pl-[25px] w-[300px]">
          <h1 className='font-bold text-[25px] flex max-sm:justify-center'>Fotosuratlar va rasmlar</h1>
          <p>Bu kursda siz Kamerani To'g'ri ushlash to'g'ri rakursdan rasmga olish ularni montaj qilishni o'rganasiz</p>
        </div>
        </div>
        <div className="">
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[25px] flex max-sm:justify-center'>Videolar</h1>
          <p>Bu kursda siz Kamerani To'g'ri ushlash to'g'ri rakursdan video olish ularni montaj qilishni o'rganasiz </p>
          </div>
          <div className="pl-[25px] w-[300px]">
            <h1 className='font-bold text-[25px] flex max-sm:justify-center'>Infografika</h1>
          <p>Bu kursda siz Vektor rasmlari, diagrammalar, illyustratsiyalar, animatsiyalarni o'rganasiz </p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SMM