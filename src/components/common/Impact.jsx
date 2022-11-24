import React from 'react'

const Impact = () => {
    const h2Class = 'text-2xl md:text-3xl lg:text-4xl font-medium'
    return (
        <div className='w-full flex flex-col gap-8 py-12 bg-gray-100'>
            <div className="container text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="aspect-square flex flex-col justify-center gap-4 md:aspect-auto md:min-h-[400px] bg-white p-6 rounded-lg shadow-card">
                    <h2 className={h2Class}> 217.500.000 kWh</h2>
                    <p className='text-base lg:text-lg font-light'>zonne-energie wordt elk jaar door klanten opgewekt</p>

                </div>
                <div className="aspect-square flex flex-col justify-center gap-4 md:aspect-auto md:min-h-[400px] bg-white p-6 rounded-lg shadow-card">
                    <h2 className={h2Class}>32.500</h2>
                    <p className='text-base lg:text-lg font-light'>zonnepanelen geïnstalleerd in 2021</p>

                </div>
                <div className="aspect-square flex flex-col justify-center gap-4 md:aspect-auto md:min-h-[400px] bg-white p-6 rounded-lg shadow-card">
                    <h2 className={h2Class}>66.000.000</h2>
                    <p className='text-base lg:text-lg font-light'>kg aan CO₂ vermeden in 2021</p>

                </div>
                <div className="aspect-square flex flex-col justify-center gap-4 md:aspect-auto md:min-h-[400px] bg-white p-6 rounded-lg shadow-card">
                    <h2 className={h2Class}>23.272.000</h2>
                    <p className='text-base lg:text-lg font-light'>kg aan CO₂ uitgestoten in 2021 door de hele keten</p>
                </div>
            </div>
            <h2 className="text-2xl text-center md:text-3xl lg:text-5xl italic">
                Onze impact in cijfers
            </h2>
        </div>
    )
}

export default Impact