import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className='px-[20%]'>
            <div className='mb-[2.5%]'>
                <Nav />
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default Layout