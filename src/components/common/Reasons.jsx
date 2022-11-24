import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FiCheck } from 'react-icons/fi'
import List from './List'
import ThemeButton from './ThemeButton'

const Reasons = () => {
    return (
        <div className='w-full bg-gray-100'>
            <div className="max-w-[70rem] px-4 mx-auto w-full  py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="w-full flex flex-col gap-4 bg-white min-h-full pt-5 overflow-hidden rounded-lg shadow-card">
                    <h3 className="text-2xl px-5 lg:text-3xl">Klant beoordelingen</h3>
                    <div className="flex px-5 text-yellow-400 text-xl items-center gap-1">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p className='px-5'><b>Meer dan 20.000 klanten</b></p>
                    <p className='text-base font-light px-5'>We streven naar een wereld zonder fossiele brandstoffen.Daarom zijn we trots op al die duizenden klanten die samen met ons de stap al hebben gezet naar een duurzaam Nederland. Zet jij samen met ons ook deze stap?</p>
                    <div className="mt-auto">
                        <div className="w-full text-right hover:text-themeGreen hover:bg-gray-50 cursor-pointer p-3 bg-gray-100">
                            Vraag een gratis voorstel aan
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 bg-white min-h-full pt-5 overflow-hidden rounded-lg shadow-card">
                    <h3 className="text-2xl px-5 lg:text-3xl">Het beste voorstel</h3>
                    <p className='text-base font-light px-5'>Er zijn veel aanbieders van zonnepanelen. Wat maakt sunnygreen.nl zo uniek?</p>

                    <ul className='flex text-base lg:text-lg pl-5 flex-col gap-2'>
                        {[
                            `Jarenlange ervaring`,
                            `kWh - garantie`,
                            `B Corp`,
                            `Uniek adviesconcept`,
                            `Binnen drie minuten je prijs`,
                        ].map((item, i) => (
                            <li className='flex items-start text-base font-light gap-3'><FiCheck className='text-themeGreen min-w-[25px] text-xl' />{item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto">
                        <div className="w-full text-right hover:text-themeGreen hover:bg-gray-50 cursor-pointer p-3 bg-gray-100">
                            Vraag een gratis voorstel aan
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 bg-white min-h-full pt-5 overflow-hidden rounded-lg shadow-card">
                    <h3 className="text-2xl px-5 lg:text-3xl">Gratis voorstel</h3>
                    <p className='text-base font-light px-5'>Elke situatie is anders en daarom verdient iedereen een persoonlijk voorstel.
                    </p>
                    <p className='text-base font-light px-5'>   Onze Zonadviseurs zitten klaar en kunnen niet wachten om voor je aan de slag te gaan. Vraag een voorstel aan en we nemen binnen één werkdag contact met je op.</p>
                    <div className="py-6">
                        <div className="p-2 md:shadow-card mx-3 lg:p-5 rounded-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <input type="text" className='bg-gray-100 p-3 rounded-full outline-none border border-gray-100 focus:border-themeGreen' placeholder='Je postcode' />
                            <button className='font-medium text-base text-white bg-themeGreen border-2 border-themeGreen hover:text-white px-3 md:px-6 transition-all duration-500 rounded-full py-3'>
                                Aanvragen
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Reasons