import React from 'react'
import Layout from '../../Layout'


const StatementsPage = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_6_web.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Privacy statement
                </h2>

            </div>
            <div className="flex max-w-[70rem] mt-0 lg:mt-32 px-4 mx-auto w-full  gap-12">
                <div className="min-h-full w-2 hidden md:flex bg-gradient-to-b from-themeGreen to-themeDarkGreen"> </div>
                <div className="py-2 text-lg lg:py-12 flex flex-col gap-4 lg:gap-6">
                    <h2 className='text-2xl lg:text-3xl'>Algemene voorwaarden enie.nl</h2>
                    <p className='pb-2'><strong className='pb-2'>ZonneKopen</strong><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2022/06/014-document-algemenevoor-koop2022.pdf" rel="noreferrer" target="_blank">Algemene Voorwaarden ZonneKopen</a></p>
                    <p className='pb-2'><strong className='pb-2'>ZonneHuren</strong><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2022/05/algemenev-enie2020-zonnehuurb2c.pdf" rel="noreferrer" target="_blank">Algemene Voorwaarden ZonneHuren</a></p>
                    <p className='pb-2'><strong className='pb-2'>Vereniging Eigen Huis</strong><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2021/06/algemenevoorwaarden-veh-ciz22-enie-juni2021-3-1.pdf">Algemene Voorwaarden Vereniging Eigen Huis</a></p>
                    <p className='pb-2'><strong className='pb-2'>Zakelijk</strong><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2021/06/algemene-voorwaarden-enienl-zakelijk.pdf" rel="noreferrer" target="_blank">Algemene Voorwaarden Zakelijk ZonneKopen&nbsp;</a><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2020/06/algemenehuurvoorwaarden_zakelijk_enie_mei2020.pdf">Algemene Voorwaarden Zakelijk MKB ZonneLeasen</a></p>
                    <p className='pb-2'><strong className='pb-2'>Vriendenactie</strong><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2022/03/algemene-voorwaarden-vriendenactie-enienl.pdf">Algemene voorwaarden Vriendenactie</a></p>
                    <p className='pb-2'><strong className='pb-2'>kWh garantie</strong><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2022/11/voorwaarden-kwh-garantie.pdf">Voorwaarden kWh garantie</a></p>
                    <p className='pb-2'><strong className='pb-2'>Actievoorwaarden</strong><br className='pb-2' /><a className='text-lg text-themeGreen font-medium hover:underline pt-2 focus:text-yellow-500' href="https://www.enie.nl/wp-content/uploads/2022/11/algemene-voorwaarden-kortingsactie.pdf">Actievoorwaarden novemberactie</a></p>
                </div>
            </div>
        </Layout >
    )
}

export default StatementsPage