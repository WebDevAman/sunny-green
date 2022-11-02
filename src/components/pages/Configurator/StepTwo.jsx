import { IconButton } from '@material-ui/core'
import React, { useEffect } from 'react'
import ThemeButton from '../../common/ThemeButton'

const StepTwo = ({ data, handleNext, setShow, energy, setData }) => {
    const handleChange = (type) => {
        if (type === 'dec') {
            setData({ ...data, no_of_panels: data.no_of_panels > 1 ? data.no_of_panels - 1 : data.no_of_panels })
        } else {
            setData({ ...data, no_of_panels: data.no_of_panels < 9 ? data.no_of_panels + 1 : data.no_of_panels })
        }
    }
    const totalPanelsRequired = Math.ceil(data.usage > 330 ? data.usage / 330 : 1)
    useEffect(() => {
        setData({
            ...data,
            usage: totalPanelsRequired * 330,
            no_of_panels: totalPanelsRequired,
            total_price: ((data.usage * 1.15) * data.no_of_panels).toFixed(2),
            vat_refund: ((data.usage * 1.15) * 0.061).toFixed(2),
            subTotal: ((data.usage * 1.15) * data.no_of_panels).toFixed(2),
            price_with_vat_refund: (((data.usage * 1.15).toFixed(2) - ((data.usage * 1.15) * 0.061)) * data.no_of_panels).toFixed(2),
        })
    }, [totalPanelsRequired])
    return (
        <div className='flex flex-col justify-center gap-5 md:gap-8 w-full lg:pl-8 p-4'>
            <div className="flex flex-col gap-3">
                <p className="text-base font-light">
                    Bereken je prijs
                </p>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-medium md:font-semibold">
                    Stel je pakket samen
                </h2>
                <div className="h-[5px] max-w-[6rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
            </div>
            <p className="text-lg font-medium">
                Wat past het beste bij jou?
            </p>
            <div className="rounded-3xl max-w-lg shadow-xl border p-3 py-6 md:p-8 flex items-center justify-between gap-3">
                <div className="rounded-full md:rounded-3xl flex h-16 gap-4 px-2.5 md:px-5 items-center border shadow-md">
                    <IconButton onClick={() => handleChange('dec')} className='!hidden md:!flex h-10'>-</IconButton>
                    <button onClick={() => handleChange('dec')} className='md:hidden items-center justify-center px-2 text-xl flex h-10'>-</button>
                    <input name="number_of_panels" className='w-6 md:w-12 text-center  font-semibold text-xl outline-none' value={data.no_of_panels} />
                    <IconButton onClick={() => handleChange('inc')} className='!hidden md:!flex h-10'>+</IconButton>
                    <button onClick={() => handleChange('inc')} className='md:hidden items-center justify-center px-2 text-xl flex h-10'>+</button>
                </div>
                <div className="flex gap-3 flex-col pr-3">
                    <p className='text-base lg:text-lg'>
                        Stroomopbrengst
                    </p>
                    <p className='text-sm lg:text-base'>
                        Op jaarbasis
                    </p>
                    <p className='text-lg font-semibold'>
                        {data.no_of_panels * 330} kWh
                    </p>
                </div>
            </div>
            <div className="flex gap-4 md:gap-8 flex-col sm:flex-row">
                <button onClick={() => setShow(1)} className='whitespace-nowrap hidden text-center items-center underline justify-center sm:flex'>Opnieuw beginnen</button>
                <button onClick={handleNext} className='w-full md:hidden flex lg:mr-auto'>
                    <ThemeButton full text='VOLGENDE STAP' />
                </button>
                <button onClick={handleNext} className='w-full md:flex hidden lg:mr-auto'>
                    <ThemeButton text='VOLGENDE STAP' />
                </button>
                <button onClick={() => setShow(1)} className='whitespace-nowrap  sm:hidden text-center w-full items-center underline justify-center flex'>Opnieuw beginnen</button>
            </div>
        </div>
    )
}

export default StepTwo