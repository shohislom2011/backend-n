import React from 'react'

const Krish = () => {
  return (
    <div><div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="text-sm text-gray-500 hover:text-purple-600 cursor-pointer">
              Forgot password?
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
        <div className="hidden lg:block">
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