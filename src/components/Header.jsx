import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <header className="text-gray-400 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M11.644 1.59a.75.75 0 0 1 .712 0l9.75 5.25a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.712 0l-9.75-5.25a.75.75 0 0 1 0-1.32l9.75-5.25Z" />
                <path d="m3.265 10.602 7.668 4.129a2.25 2.25 0 0 0 2.134 0l7.668-4.13 1.37.739a.75.75 0 0 1 0 1.32l-9.75 5.25a.75.75 0 0 1-.71 0l-9.75-5.25a.75.75 0 0 1 0-1.32l1.37-.738Z" />
                <path d="m10.933 19.231-7.668-4.13-1.37.739a.75.75 0 0 0 0 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 0 0 0-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 0 1-2.134-.001Z" />
            </svg>
            <span className="ml-3 text-xl">Minor Project</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-black hover:cursor-pointer text-xl font-normal" to="/">Home</Link>
            <Link className="mr-5 hover:text-black hover:cursor-pointer text-xl font-normal" to="/Pricing">Plans</Link>
            <Link className="mr-5 hover:text-black hover:cursor-pointer text-xl font-normal" to='/About'>About us</Link>
            <Link className="mr-5 hover:text-black hover:cursor-pointer text-xl font-normal" to='/Blog'>Blogs</Link>
            <Link className="mr-5 hover:text-black hover:cursor-pointer text-xl font-normal" to='/Contact'>Contact</Link>
        </nav>
        <button className="mr-8 text-xl hover:text-black font-medium">Login</button>
        <button className="inline-flex items-center bg-black text-white border-0 py-3 px-3 focus:outline-none hover:bg-white hover:text-black rounded text-lg mt-4 md:mt-0 shadow-md">Sign Up</button>
    </div>
</header>

    </div>
  )
}

export default Header
