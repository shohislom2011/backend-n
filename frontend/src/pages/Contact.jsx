import React from 'react'

const Contact = () => {
  return (
    <div className=''>
        <div>
            <div className="h-a bg-gray-100 flex p-[50px] items-center justify-center px-6">
      <div className=" w-full grid justify-center grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[300px] w-full max-w-md">
    
            <div>
              <div className="flex text-[20px] items-center font-bold gap-[10px]">
                <img className='w-[40px] h-[40px]' src="https://i.pinimg.com/736x/a3/12/2d/a3122d2eb543d4f189aa471ddc54c01e.jpg" alt="" />
                <h1>+998 94 154 44 88</h1>
              </div>
            </div>

            <div>
            <div className="flex text-[20px] items-center font-bold gap-[10px]">
                <img className='w-[40px] h-[40px]' src="https://static.vecteezy.com/system/resources/previews/023/986/599/non_2x/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.png" alt="" />
                <h1><a href="http://web.telegram.org/a/#2059911642" target="_blank" rel="noopener noreferrer">@metaitschool_admin</a></h1>
              </div> 
            </div>
            
            <div className="flex text-[20px] items-center font-bold gap-[10px]">
                <img className='w-[40px] h-[40px]' src="https://static.vecteezy.com/system/resources/previews/023/986/521/large_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" alt="" />
                <h1><a href="https://www.instagram.com/metaitschool?igsh=MXdwdGxtcGMyZTkwMw==" target="_blank" rel="noopener noreferrer">Meta IT School</a></h1>
              </div> 
            </div>


        </div>

        {/* RIGHT: Text */}
        <div className="min-w-xs">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Biz bilan bog'laning!
          </h1>
          <p className="text-gray-600 ">
            IT sohasida o'qishga qiziqishingiz bolsa,kelajakka qadam qo'yishni istasangiz.Biz bilan aloqaga chiqsangiz, sizga hammayoqni batafsil tushuntirib berishadi   
          </p>
        </div>

      </div>
    </div></div>
  )
}

export default Contact