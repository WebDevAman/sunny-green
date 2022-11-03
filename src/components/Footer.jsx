import React from 'react'
import Logo from './common/Logo'
import { Link } from 'react-router-dom'
const index = () => {
    return (
        <div className='border-t bg-gray-50 pt-8'>
            <div className="container py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12">
                <div className="flex flex-col gap-6">
                    <Logo dark />
                    <p>
                        Eemsgolaan 5<br />
                        9727 DW Groningen<br />
                        Bel ons: 085 401 7000<br />
                    </p>
                    <img src="https://www.enie.nl/wp-content/uploads/2021/01/2018-b-corp-logo-black-s-137x200.png" alt="icon" className='-ml-2 w-20' />
                </div>
                {data.map(({ title, content }, i) => (
                    <div className="flex flex-col gap-3">
                        <h3 className='text-lg font-medium'>{title}</h3>
                        <ul className='flex flex-col gap-2'>
                            {content.map(item => (
                                <li key={item}>
                                    <Link className='text-sm font-light hover:underline hover:text-themeOrange' to={'/'}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
            <div className="border-t container flex justify-between items-center w-full py-6">
                <p className="text-sm">Copyright &copy; 2022 Sunny Green</p>
            </div>
        </div>
    )
}

const data = [
    {
        title: 'Particulier',
        content: [
            `ZonneHuren`,
            `ZonneKopen`,
            `ZonneSparen`,
            `Laadpaal thuis`,
        ]
    },
    {
        title: 'Zakelijk',
        content: [
            `ZonneLeasen MKB`,
            `ZonneCarport`,
            `Dakhuur`,
            `ZonneKopen Zakelijk`,
            `De Groene WKR`,
        ]
    },
    {
        title: 'Neem contact op',
        content: [
            `Veelgestelde vragen`,
            `Privacy statement`,
            `Cookie statement`,
            `Contact`,
            `Algemene voorwaarden`,
            `Onze producten`,
        ]
    },
    {
        title: 'Over ons',
        content: [
            `B Corp`,
            `Ons team`,
            `Kennisbank`,
            `Vriendenactie`,
            `Werken bij enie.nl`,
            `Word Installatiepartner`,
            `Nieuws`,
        ]
    },
]

export default index