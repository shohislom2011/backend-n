import { useState } from "react"
import React from 'react'
import { useEffect } from "react"
import axios from "axios"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Krish from './Krish'


const About = () => {

const [Url3, setUrl3] = useState("http://backend-n.loc/backend/bizhaq")

const [Bizhaq, setBizhaq] = useState([])


useEffect(() => {
    axios.get(Url3).then((malum2) => setBizhaq(malum2.data));
}, [])






  return (
    
      <div>

           <div className="hero bg-base-200 h-a bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://api.domplan.uz/api/projects/20513/images/Media%5CImages%5CProject%5CIMG_024c660d-04ea-4aee-9a40-f4da3fc5ddd7.png?width=450"
                        className="max-w-sm rounded-lg shadow-2xl max-md:w-[70%]"
                    />
                    <div>
                        <div className="flex max-lg:justify-center">
                        <h1 className="text-5xl font-bold">Meta IT School</h1>
                        </div>      
                        <p className="py-6">
                             Meta IT School - Andijon shaxri,Leninskiy kochasi , Megasef Dorixonasi tog'risida
                        </p>
                        <div className="flex max-lg:justify-center">
                        <Link to="/Krish"><button className="btn btn-primary">kursga yozilish</button></Link>
                     <Routes>
                        <Route path='/Krish' element={<Krish/>}/>
                     </Routes>
                        </div>
                    </div>
                </div>

            </div>



                    <div className="">
                <div className="w-[100%] flex max-lg:flex-col  max-lg:justify-center h-a rounded-t-3xl bg-white">
                    <div className="h-[100%] flex flex-col justify-center items-center max-lg:justify-center max-lg:w-[100%] max-lg:text-center  w-[50%] ">
                        <div className="">
                            <h1 className='text-[36px] pt-[30px] pl-[23px] max-lg:text-[26px] max-sm:text-[20px]'>Biz haqimizda!</h1>
                        </div>
                        <div className="flex p-[25px] justify-center max-lg:text-[13,3px]">
                            <p>Biz bolalarni kompyuter o'yinidan uzoqlashtirib,o'zi uchun karyera yaratishi.Kompyuterdan to'g'ri maqsadda hoydalanishi uchun to'liq komfort va oqishi uchun noutbuk va kompyuterlar bilan taminlaymiz!!!</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center gap-[20px] flex-wrap">
                        {Bizhaq.map((value) => {
                            return (

                                

                                        <div
                                            className=" w-[300px] flex items-center max-lg:flex   gap-4 px-5 py-4 max-sm:py-2 max-sm:px-3 max-lg:flex-col "
                                        >
                                            <img
                                                src={value.rasm}
                                                className="w-14 h-14 rounded-full object-cover"
                                            />

                                            <div className='text-center' >
                                                <h3 className="text-gray-900  max-sm:text-[14px] font-semibold text-sm">
                                                    {value.ism}
                                                </h3>
                                                <p className="text-gray-500 max-sm:flex max-sm:justify-center max-lg:text-center text-sm">
                                                    {value.yonalish}
                                                </p>
                                            </div>

                                        </div>
                                  

                            )
                        })}
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About