import React from 'react'
import Logo from './common/Logo'
import { Link } from 'react-router-dom'
const index = () => {
    return (
        <div className='border-t bg-gray-50 pt-8'>
            <div className="container py-4 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12">
                <div className="flex flex-col gap-6">
                    <div className="-ml-4 -mt-4">
                        <Logo dark />
                    </div>
                    <p>
                        Diepenhorstlaan 2Z006<br />
                        2288EW Rijswijk<br />
                        Bel ons: 0685463322<br />
                    </p>
                    <img src="https://www.retailinsiders.nl/images/optimized/760117d8-3879-4a90-a6b4-260f6fd5e547.png&h=350&w=500&mode=fill&bg=ffffff&v=1565958322" alt="icon" className='-ml-2 w-20' />
                <img src="https://www.zelfstroom.nl/assets/uploads/2019/10/logo-holland-solar-01-e1616747647985.png" alt="icon" className='-ml-2 w-20' />
        </div>
                {data.map(({ title, content, slugs }, i) => (
                    <div className="flex flex-col gap-3 md:pl-8">
                        <h3 className='text-lg font-medium'>{title}</h3>
                        <ul className='flex flex-col gap-2'>
                            {content.map((item, i) => (
                                <li key={i}>
                                    <Link className='text-sm font-light hover:underline hover:text-themeGreen' to={slugs[i] || '/'}>
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
            // `ZonneHuren`,
            `ZonneKopen`,
            // `ZonneSparen`,
            `Laadpaal thuis`,
        ],
        slugs: [
            // `/particulier/zonnepanelen-huren`,
            `/particulier/zonnepanelen-kopen`,
            // `/particulier/zonnesparen`,
            `/particulier/laadpaal-thuis`,
        ]
    },
    {
        title: 'Zakelijk',
        content: [
            `ZonneLeasen MKB`,
            // `ZonneCarport`,
            `ZonneKopen Zakelijk`,
            // `De Groene WKR`,
        ],
        slugs: [
            `/zakelijk/zonnepanelen-leasen`,
            // `/zakelijk/carport-zonnepanelen`,
            `/prijs-berekenen-zonnepanelen`,
            // `/zakelijk/de-groene-wkr-werkgever`,
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
        ],
        slugs: [
            `/veelgestelde-vragen-over-zonnepanelen`,
            `/privacy-statement-sunnygreen-nl`,
            `/cookie-statement-sunnygreen-nl`,
            `/contact`,
            `/algemene-voorwaarden`,
            `/prijs-berekenen-zonnepanelen`,
        ]
    },

]

export default index
