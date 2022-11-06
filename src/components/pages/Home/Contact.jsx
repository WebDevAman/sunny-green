import React from 'react'
import { Link } from 'react-router-dom'


const Contact = ({ onlyContact }) => {
    return (
        <div className='max-w-[60rem] pt-12 lg:pt-20 mx-auto flex flex-col gap-12 lg:gap-20'>
            {!onlyContact &&
                <div className="w-full grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2 relative">
                    <img className='ml-auto my-auto aspect-[1.4]  lg:hidden flex lg:rounded-l-none object-center rounded-3xl w-full object-cover select-none max-w-[45rem]' src='https://www.enie.nl/wp-content/uploads/2021/10/achtergrond-oog2-600x850.png' alt='img' />
                    <div className="h-fit bg-white rounded-3xl shadow-2xl p-6 lg:p-12 flex flex-col gap-6 ">
                        <h2 className='text-2xl lg:text-4xl'>
                            Zie het licht.
                        </h2>
                        <div className="h-1 py-[3px] min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
                        <p className="text-base lg:text-lg font-light">
                            Fossiele brandstoffen hebben ons veel gebracht, maar tegen een prijs. Ze hebben hun tijd gehad.
                        </p>
                        <p className="text-base lg:text-lg font-light">
                            Binnen tien jaar kunnen we de zon als energiebron weer op 1 hebben. Een sprong vooruit voor onze aarde, met de slimste, mooiste, sterkste energiebron die er is. Maar eigenlijk gewoon terug naar de bron die ons al miljoenen jaren van energie voorziet.
                        </p>
                        <p className="text-base lg:text-lg font-light">
                            Iedere grote verandering begint klein. Doe je mee om de zon weer op 1 te krijgen? Het kan.
                        </p>
                    </div>
                    <img className='ml-auto my-auto aspect-[1.1] hidden lg:flex lg:rounded-l-none object-center rounded-3xl w-full object-cover select-none max-w-[45rem]' src='https://www.enie.nl/wp-content/uploads/2021/10/achtergrond-oog2-600x850.png' alt='img' />
                </div>
            }
            <div className="md:grid flex grid-cols-2 md:gap-8">
                <img src='https://www.enie.nl/wp-content/uploads/2022/02/03-portret-enie2021-niek-min-568x853.png' className='md:flex hidden max-w-[20rem]' alt='img' />
                <div className="flex my-auto h-fit flex-col gap-6">
                    <h2 className='text-2xl lg:text-4xl'>
                        Bereken direct je prijs
                    </h2>
                    <div className="h-1 py-[3px] min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
                    <p className="text-xl lg:text-2xl">
                        Binnen drie minuten weten wat jij met zonnepanelen verdient?
                    </p>
                    <p className="text-xl lg:text-2xl">
                        Ga naar de <Link to='/' className='text-themeOrange'>ZonneConfigurator</Link>.
                    </p>
                </div>
                <img src='https://www.enie.nl/wp-content/uploads/2022/02/03-portret-enie2021-niek-min-568x853.png' className='md:hidden flex  max-w-[15rem]' alt='img' />
            </div>
        </div>
    )
}

export default Contact