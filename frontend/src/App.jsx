import React from 'react'

const App = () => {
  return (
    <div className='max-w-[1440px] m-auto'>
    <div className="navbar bg-black text-white bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost hover:bg-gray text-xl">Meta IT School</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Biz haqqimizda</a></li>
      <li>
        <details>
          <summary>qabullar</summary>
          <ul className="p-2 bg-base-100 w-40 text-black z-1">
            <li><a>frontend</a></li>
            <li><a>Backend</a></li>
          </ul>
        </details>
      </li>
      <li><a>biz bilan aloqa!</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Kirish</a>
  </div>
</div>      



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
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>




<div className="hero bg-base-200 h-[400px]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://api.domplan.uz/api/projects/20513/images/Media%5CImages%5CProject%5CIMG_024c660d-04ea-4aee-9a40-f4da3fc5ddd7.png?width=450"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>




<div className="join join-vertical w-auto m-auto h-[300px] lg:join-horizontal">
  <button className="btn join-item">2,234</button>
  <button className="btn join-item">5,500</button>
  <button className="btn join-item">6,467</button>
</div>
    </div>
  )
}

export default App
