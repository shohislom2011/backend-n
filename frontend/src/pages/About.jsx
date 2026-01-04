import { useState } from "react"
import React from 'react'
import { useEffect } from "react"
import axios from "axios"


const About = () => {

const [Url3, setUrl3] = useState("http://backend-n.loc/backend/bizhaq")

const [Bizhaq, setBizhaq] = useState([])


useEffect(() => {
    axios.get(Url3).then((malum2) => setBizhaq(malum2.data));
}, [])






  return (
      <div>

                <div className="hero bg-base-200 h-a">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://api.domplan.uz/api/projects/20513/images/Media%5CImages%5CProject%5CIMG_024c660d-04ea-4aee-9a40-f4da3fc5ddd7.png?width=450"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Meta IT School</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className='btn btn-dash bg-blue-700 text-white hover:bg-blue-900'><a href="">kursga yozilish</a></button>
                    </div>
                </div>

            </div>




         <div className="w-100%c h-[440px]  bg-gray-300 p-[20px]">
                <div className="w-[100%] flex h-[400px] bg-white">
                    <div className="h-[100%]  w-[50%]">
                        <div className="">
                    <h1 className='text-[36px] pt-[30px] pl-[25px]'>Biz haqimizda!</h1>
                            </div>
                            <div className="flex p-[25px] justify-center">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo et quisquam omnis. Similique consequuntur voluptas libero molestias ab, voluptate officia cum.</p>
                        </div>
                    </div>
                    <div className="">
                {Bizhaq.map((value) => {
                    return(
                        <div className=" ">
                           
       <div className=" p-2 rounded-xl max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
          <div
            className="flex items-center gap-4 px-5 py-4"
          >
            <img
              src={value.rasm}
              className="w-14 h-14 rounded-full object-cover"
            />

            <div>
              <h3 className="text-gray-900 font-semibold text-sm">
                {value.ism}
              </h3>
              <p className="text-gray-500 text-sm">
                {value.yonalish}
              </p>
            </div>
          </div>
      </div>
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