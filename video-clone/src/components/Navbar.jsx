import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-slate-600 w-[100%] h-24 ">
            <div className='flex justify-evenly items-center  h-[100%]'>
                <h1 className='text-white font-bold  text-xl cursor-pointer'>HYPERGRO</h1>
                <h1 className='text-white font-bold  text-xl cursor-pointer'>VIDEO CLONE</h1>
                <button className='text-white font-bold  text-xl cursor-pointer'>LOGIN</button>
            </div>
        </nav>
    )
}

export default Navbar