import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Logo from '../common/Logo'

const index = ({ children, noNav, img }) => {
    return (
        <div className='flex flex-col'>
            {noNav ?
                <div className="mx-auto">
                    <Logo />
                </div>
                :
                <Navbar isImg={img?.length > 0 ? true : false} />
            }
            {img &&
                <div style={{ background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${img})` }} className='w-full absolute inset-0 !bg-norepeat !bg-cover min-h-[50rem] sm:min-h-[40rem] lg:min-h-[40rem] !bg-center max-h-[70vh]' alt='img' >

                </div>
            }
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default index