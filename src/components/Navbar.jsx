import React from 'react'
import Logo from './common/Logo'
import { Link } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { navData } from './dummy';
import { BsHeadset } from 'react-icons/bs';

const Navbar = ({ isImg }) => {
    const [scrolled, setScrolled] = React.useState(isImg ? false : true)
    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
        if (isImg) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10 && isImg) {
                    setScrolled(true)
                } else {
                    setScrolled(false)
                }
            })
        } else {
            setScrolled(true)
        }
    }, [])
    return (
        <div className={`${scrolled ? 'bg-white shadow-lg text-[#222]' : 'bg-transparent  text-white shadow-none'} transition-all duration-500 z-50 lg:sticky inset-0 w-full `}>
            <div className="max-w-[100rem]  px-4 mx-auto py-2 flex items-center h-16 md:h-20 justify-between lg:justify-start lg:space-x-10 w-full">
                <div className="-ml-4">
                    <Logo dark={scrolled} />
                </div>
                <nav className='hidden md:flex'>
                    <ul className='flex items-center space-x-10 justify-start '>
                        {navData.map(({ title, slug }, i) => (
                            <li className='hover:underline'>
                                <Link to={slug}>
                                    {title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="!ml-auto flex items-center gap-2 ">
                    <Link to='/prijs-berekenen-zonnepanelen'>
                        <button className={`px-3 md:px-5 h-10 md:h-14 text-sm md:text-base font-medium text-white whitespace-nowrap border-2 hover:bg-themeGreen rounded-full ${scrolled ? 'text-black' : 'text-white'} border-themeGreen`}>
                            Bereken voordeel
                        </button>
                    </Link>
                    <button className={`h-14 hidden lg:flex items-center justify-center aspect-square text-3xl font-medium ${scrolled ? 'text-black' : 'text-white'} whitespace-nowrap border-2 hover:bg-themeGreen rounded-full border-themeGreen`}>
                        <BsHeadset />
                    </button>
                    <div onClick={() => setOpen(true)} >
                        <MdOutlineMenu className='text-2xl flex md:hidden' />
                    </div>
                </div>
                <Drawer
                    anchor='right'
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <div className="shadow-md right-0 h-screen top-0 bottom-0 w-full flex flex-col bg-white">
                        <div className="flex p-2 justify-end">
                            <MdOutlineClose onClick={() => setOpen(false)} className='!text-black text-2xl' />
                        </div>
                        <nav >
                            <ul className='flex flex-col pt-2'>
                                {navData.map(({ title, slug }, i) => (
                                    <li className='hover:bg-gray-50 py-2 px-4 w-60'>
                                        <Link to={slug}>
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar