import React from 'react'
import Layout from '../../Layout'


const StatementsPage = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_6_web.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Algemene voorwaarden

                </h2>

            </div>
            <div className="flex max-w-[70rem] mt-0 lg:mt-32 px-4 mx-auto w-full  gap-12">
                <div className="min-h-full w-2 hidden md:flex bg-gradient-to-b from-themeGreen to-themeDarkGreen"> </div>
                <div className="py-2 text-lg lg:py-12 flex flex-col gap-4 lg:gap-6">
                    <h2 className='text-2xl lg:text-3xl'>Algemene voorwaarden SunnyGreen.nl</h2>
                </div>
            </div>
        </Layout >
    )
}

export default StatementsPage