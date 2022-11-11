import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import ThemeButton from '../../common/ThemeButton'

const StepOne = ({ data, setData, handleNext }) => {
    const [error, setError] = React.useState(false)
    const [showSelector, setShowSelector] = React.useState(0)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        if (data.usage) {
            handleNext()
        } else {
            setError(true)
        }
    }
    React.useEffect(() => {
        if (showSelector === 1) {
            setData({ ...data, usage: 2000 })
        } else if (showSelector === 2) {
            setData({ ...data, usage: 3000 })
        } else if (showSelector === 3) {
            setData({ ...data, usage: 4000 })
        }
        else if (showSelector === 4) {
            setData({ ...data, usage: 5000 })
        } else {
            setData({ ...data, usage: null })
        }
    }, [showSelector])

    return (
        <div className="flex gap-6 lg:gap-12 justify-center lg:pl-6 p-4 flex-col w-full">
            <div className="hidden lg:flex flex-col gap-3">
                <p className="text-base font-light">
                    Hoeveel zonnepanelen heb ik nodig?
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                    Jouw stroombehoefte
                </h2>
                <div className="h-[5px] max-w-[6rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg font-medium">
                    Wat is je stroomverbruik?
                </p>
                <p onClick={() => setShowSelector(showSelector > 0 ? 0 : 1)} className="text-sm cursor-pointer underline opacity-80">
                    {showSelector > 0 ? 'Ik weet mijn stroomverbruik' : 'Ik weet mijn stroomverbruik niet'}
                </p>
            </div>

            <div className={`${showSelector ? 'max-w-lg' : 'max-w-md'} rounded-3xl shadow-xl border p-5 md:p-8 flex flex-col gap-3`}>

                {showSelector > 0 &&
                    <>
                        <div className="flex flex-col gap-3">
                            <p className="text-base">Personen in huishouden</p>
                        </div>
                        <div className="flex gap-2 rounded-full p-1.5 bg-gray-200 shadow-inner">
                            {[1, 2, 3, 4].map(num => (
                                <div onClick={() => setShowSelector(num)} className={`p-1.5 aspect-square md:aspect-[1.7] lg:gap-3 overflow-hidden gap-1.5 flex cursor-pointer justify-center items-center w-full rounded-full ${showSelector === num ? 'bg-white' : 'bg-transparent'}`}>
                                    <FaRegUser className='text-sm lg:text-lg' /><p className='mt-[2px] text-sm'> {num === 1 ? 1 : num === 2 ? '2-3' : num === 3 ? '4-5' : '6+'}</p>
                                </div>
                            ))}
                        </div>
                    </>
                }
                <p className="text-base lg:text-lg">
                    Stroomverbruik
                </p>

                <div className={`${error ? 'border-red-600' : 'border-themeDarkGreen'} border flex items-center w-full overflow-hidden rounded-lg border-gray-300 focus-within:border-themeDarkGreen`}>
                    <input value={data.usage} onChange={handleChange} type="number" name="usage" className='p-3 rounded-lg outline-none w-full' required placeholder='Op jaarbasis' />
                    <p className="text-lg pr-3 lg:text-xl">kWh</p>
                </div>

            </div>
            <button onClick={handleSubmit} className='w-full md:hidden flex lg:mr-auto'>
                <ThemeButton full text='VOLGENDE STAP' />
            </button>
            <button onClick={handleSubmit} className='w-full md:flex hidden lg:mr-auto'>
                <ThemeButton text='VOLGENDE STAP' />
            </button>
        </div>
    )
}



export default StepOne