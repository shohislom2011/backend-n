import React, { useEffect, useState } from 'react'
import axios from "axios"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


const Home = () => {
    const [Url, setUrl] = useState("http://backend-n.loc/backend/dasturlash")
    const [dasturlash, setDasturlash] = useState([])

    useEffect(() => {
        axios.get(Url).then((malum) => setDasturlash(malum.data));
    }, [])

    const [Url2, setUrl2] = useState("http://backend-n.loc/backend/dawn")
    const [dawn, setDawn] = useState([])

    useEffect(() => {
        axios.get(Url2).then((malum1) => setDawn(malum1.data));
    }, [])

    const [Url3, setUrl3] = useState("http://backend-n.loc/backend/bizhaq")
    const [Bizhaq, setBizhaq] = useState([])


    useEffect(() => {
        axios.get(Url3).then((malum2) => setBizhaq(malum2.data));
    }, [])

    




    
    return (

        <div>

            <div
                className="hero min-h-[600px]"
                style={{
                    backgroundImage:
                        "url(https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?semt=ais_hybrid&w=740&q=80)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Meta IT School</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className='btn btn-dash bg-blue-700 text-white hover:bg-blue-900'><a href="https://web.telegram.org/a/#2059911642">kursga yozilish</a></button>
                    </div>
                </div>
            </div>




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
                        <button className='btn btn-dash bg-blue-700 text-white hover:bg-blue-900'><a href="https://web.telegram.org/a/#2059911642">kursga yozilish</a></button>
                    </div>
                </div>

            </div>






            <div className="w-[100%] h-[350px] flex items-center justify-center">
                {dawn.map((value) => {
                    return (
                        <div className="stats p-[10px] bg-black shadow w-full">
                            <div className="stat place-items-center text-white">
                                <div className="stat-title text-white">Downloads</div>
                                <div className="stat-value">{value.downloads}</div>
                            </div>

                            <div className="stat place-items-center">
                                <div className="stat-title text-white">Users</div>
                                <div className="stat-value text-secondary">{value.users}</div>
                            </div>

                            <div className="stat place-items-center text-white">
                                <div className="stat-title text-white">New Register</div>
                                <div className="stat-value">{value.newregister}</div>
                                <div className="stat-desc text-white"></div>
                            </div>
                        </div>
                    )
                })}
            </div>









            <div className="flex mb-30 justify-evenly items-center gap-[25px] flex-wrap">
                {dasturlash.map((value) => {
                    return (
                        <div className="card bg-base-100 image-full w-96 shadow-sm">
                            <figure>
                                <img className='w-full h-[250px]' src={value.rasm} alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{value.nomi}</h2>
                                <p>{value.malumoti}</p>
                                <div className="card-actions justify-end">
                                   <button className="btn btn-primary">{value.narxi} So'm</button>
                                </div>
                            </div>

                        </div>
                        
                    )
                })}
            </div>


                

                <div className="w-100% h-[440px]  bg-gray-300 p-[20px]">
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

export default Home