import React from 'react'
import ThemeButton from '../../common/ThemeButton'

const StepOne = ({ data, setData, handleNext }) => {
    const [error, setError] = React.useState(false)
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
    return (
        <div className="flex gap-6 lg:gap-12 justify-center lg:pl-6 p-4 flex-col w-full">
            <div className="flex flex-col gap-3">
                <p className="text-base font-light">
                    Hoeveel zonnepanelen heb ik nodig?
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold">
                    Jouw stroombehoefte
                </h2>
                <div className="h-[5px] max-w-[6rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
            </div>
            <p className="text-lg">
                Wat is je stroomverbruik?
            </p>
            <div className="rounded-3xl shadow-xl max-w-md w-full border p-8 flex flex-col gap-3">
                <p className="text-base lg:text-lg">
                    Stroomverbruik
                </p>
                <div className={`${error ? 'border-red-600' : 'border-themeYellow'} flex items-center w-full overflow-hidden border-2 rounded-lg border-gray-500 focus-within:border-themeYellow`}>
                    <input value={data.usage} onChange={handleChange} type="number" name="usage" className='p-3  rounded-lg outline-none w-full' required placeholder='On a annual basis' />
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