import React from 'react'
import ThemeButton from './ThemeButton'

const ProcessLayout = ({ data }) => {
    return (
        <div className="flex items-center flex-col gap-6">
            <h2 className="text-2xl lg:text-4xl text-center">
                {data.title}
            </h2>
            <div className='flex gap-12 pl-4 mx-auto max-w-lg'>
                <div className="w-[30px] min-h-full py-12 shadow-inner border rounded-full relative">
                    <div className="absolute w-full h-full flex flex-col justify-between inset-0">
                        <div className="w-12 h-12 flex items-center justify-center text-xl font-semibold mt-10 text-themeOrange border shadow-md left-1/2 -translate-x-1/2 ml-1 bg-white rounded-full">1</div>
                        <div className="w-12 h-12 flex items-center justify-center mt-8 text-xl font-semibold text-themeOrange border shadow-md left-1/2 -translate-x-1/2 ml-1 bg-white rounded-full">2</div>
                        <div className="w-12 h-12 flex items-center mb-28 justify-center  text-xl font-semibold text-themeOrange border shadow-md left-1/2 -translate-x-1/2 ml-1 bg-white rounded-full">3</div>
                    </div>
                </div>
                <div className="flex flex-col gap-12 py-12">
                    {data.steps.map(({ title, text }, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <h2 className="text-xl lg:text-3xl">{title}</h2>
                            <p className="text-base lg:text-lg font-light">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ThemeButton text='Bereken prijs' />
        </div>
    )
}



export default ProcessLayout