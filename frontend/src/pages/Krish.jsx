import React from 'react'

const Krish = () => {
  return (
    <div><div className="h-auto p-10 bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ism.F
              </label>
              <input
                type="text"
                placeholder="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>qabullar</summary>
                <ul className="p-2 bg-base-100 w-40 text-black z-1">
                  <h3>Frontend</h3>
                  <h3>Backend</h3>
                  <h3>SMM</h3>
                  <h3>Roboto-Texnika</h3>
                  <h3>Soatxonlik</h3>
                  <h3></h3>
                </ul>
              </details>
            </li>
          </ul>
              
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yoshingiz
              </label>
              <input
                type="text"
                placeholder="Yoshingiz"
                maxLength={2}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* RIGHT: Text */}
        <div className="">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Login now!
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
            et a id nisi.
          </p>
        </div>

      </div>
    </div></div>
  )
}

export default Krish