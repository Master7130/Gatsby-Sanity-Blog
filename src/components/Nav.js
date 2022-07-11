import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
    return (
        <nav className='flex flex-row text-center gap-10 py-7'>
            <Link to={"/"} className='no-underline'>
                <h1 className='text-5xl target:text-orange-500 hover:cursor-pointer'>Blog</h1>
            </Link>

            <Link to="/about" className="text-2xl self-center no-underline">
                <h3>About</h3>
            </Link>
        </nav>
    )
}

export default Nav