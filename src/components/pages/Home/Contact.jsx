import React from 'react'
import { Link } from 'react-router-dom'
import ThemeButton from '../../common/ThemeButton'


const Contact = ({ onlyContact, form, content }) => {
    return (
        <div className='max-w-[60rem] pt-12 lg:pt-20 mx-auto flex flex-col gap-12 lg:gap-20'>
            {!onlyContact &&
                <div className="w-full grid grid-cols-1 gap-6 lg:gap-0 lg:grid-cols-2 relative">
                    <img className='ml-auto my-auto aspect-[1.4]  lg:hidden flex lg:rounded-l-none object-center rounded-3xl w-full object-cover select-none max-w-[45rem]' src='https://www.enie.nl/wp-content/uploads/2021/10/achtergrond-oog2-600x850.png' alt='img' />
                    <div className="h-fit bg-white rounded-3xl shadow-2xl p-6 lg:p-12 flex flex-col gap-6 ">
                        <h2 className='text-2xl lg:text-4xl'>
                            Zie het licht.
                        </h2>
                        <div className="h-1 py-[3px] min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
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
            {form &&
                <div className="flex flex-col gap-6">
                    <div className="text-center flex flex-col gap-4">
                        <h2 className='text-2xl lg:text-4xl'>{content.title}</h2>
                        <div className="max-w-[50rem] w-full mx-auto text-center text-lg">{content.text}</div>
                    </div>
                    <form className='max-w-[50rem] w-full mx-auto flex flex-col gap-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <input type='text' placeholder='Voornaam' className='p-3 rounded-md focus:border-blue-600 border outline-none bg-gray-100' />
                            <input type='text' placeholder='Achternaam' className='p-3 rounded-md focus:border-blue-600 border outline-none bg-gray-100' />
                        </div>
                        <input type='email' placeholder='E-mailadres' className='p-3 rounded-md focus:border-blue-600 border outline-none bg-gray-100' />
                        <input type='number' placeholder='Telefoonnummer' className='p-3 rounded-md focus:border-blue-600 border outline-none bg-gray-100' />
                        <div className="grid grid-cols-2 gap-4">
                            <input type='number' placeholder='Postcode*' className='p-3 rounded-md focus:border-blue-600 border outline-none bg-gray-100' />
                            <input type='number' placeholder='Huisnummer + toevoeging*' className='p-3 rounded-md focus:border-blue-600 border outline-none bg-gray-100' />
                        </div>
                        <textarea placeholder='Opmerkingen' className='p-3 rounded-md focus:border-blue-600 border outline-none bg-gray-100 min-h-[120px]' cols="30" rows="7"></textarea>
                        <button className="ml-auto">
                            <ThemeButton text='Verzenden' />
                        </button>
                    </form>
                </div>
            }
            <div className="md:grid flex grid-cols-2 md:gap-8">
                <img src='https://www.enie.nl/wp-content/uploads/2022/02/03-portret-enie2021-niek-min-568x853.png' className='md:flex hidden max-w-[20rem]' alt='img' />
                <div className="flex my-auto h-fit flex-col gap-6">
                    <h2 className='text-2xl lg:text-4xl'>
                        Bereken direct je prijs
                    </h2>
                    <div className="h-1 py-[3px] min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                    <p className="text-xl lg:text-2xl">
                        Binnen drie minuten weten wat jij met zonnepanelen verdient?
                    </p>
                    <p className="text-xl lg:text-2xl">
                        Ga naar de <Link to='/' className='text-themeGreen'>ZonneConfigurator</Link>.
                    </p>
                </div>
                <img src='https://www.enie.nl/wp-content/uploads/2022/02/03-portret-enie2021-niek-min-568x853.png' className='md:hidden flex  max-w-[15rem]' alt='img' />
            </div>
        </div>
    )
}

export default Contact