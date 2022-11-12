import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Logo from '../common/Logo'

const index = ({ children, customHeight, noHero, noNav, img }) => {
    return (
        <div className='flex flex-col'>
            {noNav ?
                <div className="mx-auto">
                    <Logo />
                </div>
                :
                <Navbar isImg={img?.length > 0 ? true : false} />
            }
            {img && !noHero &&
                <div style={{ background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${img})` }} className='w-full absolute inset-0 !bg-norepeat !bg-cover min-h-[50rem] sm:min-h-[40rem] lg:min-h-[40rem] !bg-center max-h-[70vh]' alt='img' >

                </div>
            }
            {img && noHero &&
                <div style={{ background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(${img})` }} className={`w-full absolute inset-0 !bg-norepeat !bg-cover aspect-video min-h-[30rem] lg:min-h-[40rem] !bg-center max-h-[70vh] `} alt='img' >

                </div>
            }
            <main className='flex-1 min-h-screen'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default index