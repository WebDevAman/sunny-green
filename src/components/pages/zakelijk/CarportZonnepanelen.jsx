import React from 'react'
import { BsPiggyBank } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import BigImgCard from '../../cards/BigImgCard'
import InfoCard from '../../cards/InfoCard'
import ServiceCard from '../../cards/ServiceCard'
import Blogs from '../../common/Blogs'
import List from '../../common/List'
import PostCodeInp from '../../common/PostCodeInp'
import ProcessLayout from '../../common/ProcessLayout'
import ThemeButton from '../../common/ThemeButton'
import Layout from '../../Layout'
import Contact from '../Home/Contact'
import Faq from '../Home/FAQ'
import Hero from '../Home/Hero'


const Index = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2021/07/9-min-2000x1124.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl mx-auto text-center text-white font-light">
                    Carport met zonnepanelen
                </h2>
                <h2 className="text-xl max-w-2xl text-center lg:text-3xl text-white font-light">
                    Rijden én werken op zonne-energie van je parkeerterrein. Het kan.
                </h2>

            </div>

            <div className="container lg:pt-40 flex flex-col gap-6 lg:gap-12">
                <div className="flex gap-4 lg:gap-10">
                    <div className="min-h-full w-4 bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>
                    <div className="py-4 flex flex-col gap-5">
                        <h2 className='text-2xl lg:text-4xl'>ZonneCarport</h2>
                        <p className="text-base lg:text-lg">
                            <b>Flexibel, comfortabel en effectief verduurzamen.</b>
                        </p>
                        <p className="text-base lg:text-lg">
                            Voor een soepele, snelle energietransitie hebben we veel ruimte nodig. En dat in een land waar we bijna elke beschikbare meter al hebben benut. Om snel te accelereren is het dus zaak alle ruimte optimaal te benutten.
                        </p>

                        <p className="text-base lg:text-lg">
                            De mooiste en meest praktische manier om dit te doen: een carport met zonnepanelen. Parkeren, laden, opwekken en besparen. Alles onder één dak. En met de unieke verplaatsbare constructie van de ZonneCarport vansunnygreen.nl geniet je van de degelijkheid van een huis met de flexibiliteit van een tent.
                        </p>

                    </div>
                </div>
                {[
                    {
                        title: `Zonnepanelen carport`,
                        content: [
                            `Optimaal gebruik van zon én schaduw`,
                            `Een carport met zonnepanelen op je eigen terrein. Slim verduurzamen met het hoogste comfort voor jou en je werknemers, en tegelijk voor je klanten en gasten.`,
                            {
                                type: 'list',
                                content: [
                                    `Meervoudig, optimaal benutten van parkeerruimte`,
                                    `Direct laden op 100 % eigen zonne - energie`,
                                    `Altijd droog en in de schaduw parkeren`,
                                    `Verduurzamen én besparen, met minimale inspanning of investering`,
                                ]
                            }
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen' />
                            </Link>,
                            <Link to='/'>
                                <ThemeButton grayBtn text='Download brochure' />
                            </Link>,
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2021/07/5-min-2000x1162.jpg`,
                    },


                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}

                <h3 className="text-center text-2xl lg:text-4xl py-6 lg:py-12 mt-6 lg:mt-12">
                    Leasen, kopen of het terrein verhuren. Jij bepaalt.
                </h3>
                <p className="text-center text-base lg:text-lg -mt-12 mb-8 max-w-lg mx-auto">
                    Voor elke situatie een passende oplossing. Ga in gesprek met onze adviseurs om de meest geschikte optie in jouw situatie te bespreken.


                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[900px] w-full mx-auto'>
                    {[
                        {
                            title: `Leasen`,
                            text: `Zonder investering en alles verzorgd. Wij doen het werk, jij richt je op het bedrijf`,
                            list: [
                                ` Met service, onderhoud, garanties en verzekering`,
                                `€0,- investering en zonder benodigde subsidie`,
                                `Altijd besparen of kostenneutraal t.o.v. grijze stroom`
                            ],
                            btns: [

                            ],
                            icon: <img src='https://www.enie.nl/wp-content/uploads/2020/10/icon-energiecontract.png' width={50} height={50} alt='icons' />
                        },
                        {
                            title: `Kopen`,
                            text: `Altijd het hoogste rendement en volledig in control`,
                            list: [
                                `Besparen vanaf dag één`,
                                `Binnen enkele jaren terugverdiend`,
                                `Met de beste garanties en service`,
                            ],
                            btns: [

                            ],
                            icon: <img src='https://www.enie.nl/wp-content/uploads/2020/10/icon-zonnehuren.png' width={50} height={50} alt='icons' />
                        },
                        {
                            title: `Verhuren`,
                            text: `Laat de zon voor je werken en verdien met je parkeerterrein`,
                            list: [
                                `Een vaste vergoeding per zonnepaneel`,
                                `Extra verdienen én verduurzamen`,
                                `Na 16 jaar volledig eigenaar`,
                            ],
                            btns: [

                            ],
                            icon: <img src='https://www.enie.nl/wp-content/uploads/2020/10/icon-zonnesparen.png' width={50} height={50} alt='icons' />
                        },
                    ].map((item, i) => (
                        <InfoCard data={item} key={i} />
                    ))}
                </div>
                <div className="py-4 lg:py-10"></div>
                {[
                    {
                        title: `Zakelijk carport met zonnepanelen`,
                        content: [
                            `Nieuw pand? Verhuis je ZonneCarport mee`,
                            `Elke situatie is anders. We kijken samen met je naar de oplossing die het best bij je terrein past.`,
                            {
                                type: 'list',
                                content: [
                                    `Unieke verhuisbare constructie voor maximale flexibiliteit`,
                                    `Geïntegreerde laadstations toevoegen voor elektrische auto’s én fietsen`,
                                    `Hoeveelheid afgestemd op energiebehoefte`,]
                            }
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Gratis adviesgesprek' />
                            </Link>,
                            <Link to='/'>
                                <ThemeButton grayBtn text='Brochure downloaden' />
                            </Link>,
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2021/07/15-min-2000x1204.jpg`,
                    },
                    {
                        title: `Carport zonnepanelen`,
                        content: [
                            `Klaar voor een een duurzame, elektrische toekomst`,
                            `Met een ZonneCarport op je parkeerterrein is jouw bedrijf klaar voor een slimme, duurzame manier van energie opwekken. Geniet onbeperkt van de voordelen.`,
                            `De zon geeft energie aan je reis en werkdag. Omdat het aantal zonnepanelen is afgestemd op het stroomverbruik van je bedrijf, is de belasting op het elektriciteitsnet minimaal. En dankzij de carport met zonnepanelen zet je bedrijfspand een grote stap richting energielabel C.`,
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen' />
                            </Link>,
                            <Link to='/'>
                                <ThemeButton grayBtn text='Download brochure' />
                            </Link>,
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2021/07/19-min-1200x1800.jpg`,
                    },


                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}
                <div className="pt-6 lg:pt-12">

                </div>
                <ProcessLayout
                    data={{
                        title: 'Zo doen we dat',
                        steps:
                            [
                                {
                                    title: `Online intake`,
                                    text: `Aanvraag gedaan? Dan nemen we snel contact met je op. Jij en onze specialist bepalen welke oplossing het beste bij jou past.`
                                },
                                {
                                    title: `Het beste plan`,
                                    text: `Na het gesprek ontvang je de offerte, afgestemd op jouw situatie en wensen.`
                                },
                                {
                                    title: `Klaar om te gaan`,
                                    text: `Akkoord? Fantastisch. Binnen een paar weken heb je je eigen laadpaal thuis of op het werk. Op weg naar veel duurzame kilometers!`
                                },

                            ],
                    }}
                />


                <Faq />
                <Contact onlyContact form content={{
                    title: `Een offerte voor een laadpaal thuis`, text: `Vervuilend rijden is bijna verleden tijd. Ben je net als wij klaar voor een duurzame toekomst? Schrijf je nu alvast in. Zodra we starten met het plaatsen van de eigen laadpaal aan huis nemen we direct contact met je op.`
                }} />
            </div>
        </Layout >
    )
}

export default Index