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
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2021/05/auto-elektrisch-opladen-web.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Laadpaal thuis
                </h2>

                <h2 className="text-xl lg:text-3xl text-white font-light">
                    Vol energie van en naar huis.
                </h2>
                <PostCodeInp />

            </div>

            <div className="container lg:pt-40 flex flex-col gap-6 lg:gap-12">
                {/* <div className="flex gap-2 md:gap-10">
                    <div className="w-0 px-[3px] min-h-full rounded-sm bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>
                    <div className="flex flex-col gap-4 lg:gap-8 py-2">
                        <h2 className="text-2xl lg:text-5xl font-light">
                            Je eigen laadpaal thuis of op je werk met ZonneLaden
                        </h2>
                        <p className='text-base lg:text-lg'>
                            Thuis, op kantoor of onderweg. Met een laadpaal thuis ben je verzekerd van een volle accu wanneer jij het nodig hebt. En waar je je elektrische auto ook oplaadt, met de ZonneLaden-laadpas maak je altijd gebruik van 100% Nederlandse zonne-energie. Zo ga je altijd vol goede energie de weg op. We gaan binnenkort starten met laadpalen, dus schrijf je nu alvast in.
                        </p>
                    </div>
                </div>

                <div className="max-w-[60rem] w-full flex flex-col gap-6 mx-auto">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        Wat zijn de voordelen van zonnepanelen kopen?
                    </h2>
                    <List
                        data={[
                            `Zonne-energie volledig in eigen beheer`,
                            `Vanaf de eerste dag 100% besparen op energiekosten`,
                            `Geld verdienen na de terugverdientijd`,
                            `Een significante waardestijging van de woning`,
                        ]}
                    />
                    <p className='text-base lg:text-lg'>
                        De voordelen van zonnepanelen komen zeker in deze tijd steeds duidelijker naar voren. Met eigen, 100% duurzame energie uit zonnepanelen bespaar je al zeker honderden euro’s per jaar. Een investering die zichzelf snel terugverdient.
                    </p>
                    <p className='text-base lg:text-lg'>
                        Wil je niet direct kopen, dan kan je overigens ook kiezen voor zonnepanelen huren. Ontdek meer over de mogelijkheden.
                    </p>

                    <p className='text-base lg:text-lg'>
                        Rendement van zonnepanelen
                    </p>
                    <p className='text-base lg:text-lg'>
                        De opbrengst en het rendement van zonnepanelen wordt berekend op basis van het vermogen in Wattpiek en de verwachte opbrengst van zonnepanelen in kWh (kilowattuur). Op basis van de huidige energieprijzen zullen jouw zonnepanelen zorgen voor een gemiddelde besparing hoger dan 1.000 euro per jaar. En omdat je de zonnepanelen vanaf dag 1 in eigen beheer hebt, geniet je direct van alle voordelen. Investeren in zonnepanelen met de belofte van een korte terugverdientijd.
                    </p>
                    {/* <div className="text-center flex-col gap-8 flex pt-12 items-center justify-center">
                        <h2 className="text-2xl lg:text-4xl font-medium">
                            Waarom zonnepanelen huren?
                        </h2>
                        <p className='text-base lg:text-lg'>
                            Overstappen op zonnepanelen huren? In deze grafiek zie je jouw voordeel. Zo reken je vanaf dag één af met stijgende stroomkosten. Al na 10 jaar worden de zonnepanelen van jou en betaal je vanaf dat moment € 0,- voor je zonne-energie. Je geniet dan nog zeker 20 jaar van je eigen zonnepanelen, inclusief garanties.
                        </p>
                        <img src='https://www.enie.nl/wp-content/uploads/2021/07/kosten-zonnepanelen-huren-versus-grijze-stroom-enienl-768x545.png' className='mx-auto max-w-[50rem]' alt='img' />
                        <Link to='/'>
                            <ThemeButton text='Bereken je maandbedrag' />
                        </Link>
                    </div> 
                </div> */}
                {[
                    {
                        title: `Met een goed gevoel op weg`,
                        content: [
                            `Eigen laadpaal thuis, altijd duurzaam`,
                            `Met je eigen laadpaal thuis en een ZonneLaden-pas profiteer je van`,
                            {
                                type: 'list',
                                content: [
                                    ` Altijd 100 % Nederlandse zonne - energie`,
                                    `Publiek laden op 70.000 plekken in Europa`,
                                    `Abonnement afgestemd op jouw situatie`,
                                    `Transparante prijsstelling`,
                                ]

                            },
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen ' />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/11/zonneladen-1-e1620221780297-1200x799.jpg`,
                    },

                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}

                <div className="py-4 lg:py-10"></div>
                <ProcessLayout
                    data={{

                        title: 'Een laadpaal thuis in 3 stappen',
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
                                    title: `Let's go`,
                                    text: `Akkoord? Fantastisch. Binnen een paar weken heb je je eigen laadpaal thuis of op het werk. Op weg naar veel duurzame kilometers!`
                                },

                            ],
                    }}
                />
                {[
                    {
                        title: `Elektrisch rijden in een stroomversnelling`,
                        content: [
                            `Elektrisch rijden is zuiniger, slimmer, stiller en bovenal bijzonder comfortabel. Maar weet je wat het mooiste is? Met je eigen laadpaal thuis of op het werk ben jij altijd de baas over je energie.`,
                            `Iedereen een duurzaam privé tankstation, dát is pas 21e-eeuws. En ben je wel een keer lang onderweg en wil je toch publiek laden? Geen probleem. Met de ZonneLaden-pas geef jij je rit op meer dan 70.000 laadpunten in Europa energie.`,
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen ' />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/11/shutterstock-1812967378-1-e1604502543944.jpg`,
                    },
                    {
                        title: `Áltijd verzekerd van duurzame zonne-energie`,
                        content: [
                            `Zelf zonnepanelen thuis of op het werk? Goed bezig. Dan laad je elke dag met een goed gevoel je accu duurzaam op. Heb je ze (nog) niet? Ook dan ben je bij enie.nl verzekerd van een duurzame laadbeurt. Met de ZonneLaden-pas tank je gegarandeerd 100% Nederlandse zonne-energie, die we opwekken op grote zonnedaken door het hele land.`,
                        ],
                        btns: [
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_3_web-1200x674.jpg`,
                    },

                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}
                <h3 className="text-center text-2xl lg:text-4xl py-6 lg:py-12 mt-6 lg:mt-12">
                    Twee manieren voor een laadpaal thuis
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 max-w-[600px] w-full mx-auto'>
                    {[
                        {
                            title: `Flexibel ZonneLaden`,
                            text: `Het perfecte abonnement voor bestuurders die niet precies weten hoe vaak ze hun auto per maand willen opladen.`,
                            list: [
                                `Vast starttarief en afrekenen per laadsessie`,
                                `Vast tarief per kWh bij publiek laden in Nederland`,
                                `Gratis ZonneLaden - pas`,
                            ],
                            btns: [
                                <Link to='/'>
                                    <button className='rounded-full border-4 border-themeDarkGreen uppercase hover:bg-themeDarkGreen w-full hover:text-white py-2.5'>
                                        Meer Info
                                    </button>
                                </Link>
                            ],
                            icon: <img src='https://www.enie.nl/wp-content/uploads/2020/10/icon-zonnekopen.png' width={50} height={50} alt='icons' />
                        },
                        {
                            title: `Zeker ZonneLaden`,
                            text: `De perfecte oplossing voor elektrische rijders die veel onderweg laden. Je bespaart namelijk op het starttarief.`,
                            list: [
                                `Vast bedrag per maand`,
                                `Variabel tarief in Nederland en in het buitenland`,
                                `Géén starttatrief per laadsessie`,
                            ],
                            btns: [
                                <Link to='/'>
                                    <button className='rounded-full border-4 border-themeDarkGreen uppercase hover:bg-themeDarkGreen w-full hover:text-white py-2.5'>
                                        Meer Info
                                    </button>
                                </Link>
                            ],
                            icon: <img src='https://www.enie.nl/wp-content/uploads/2020/10/icon-energiecontract.png' width={50} height={50} alt='icons' />
                        },
                    ].map((item, i) => (
                        <InfoCard data={item} key={i} />
                    ))}
                </div>
                <div className="flex flex-col text-center max-w-[55rem] gap-6 pt-6 lg:pt-12 mx-auto items-center">
                    <h2 className='text-2xl lg:text-4xl '>
                        Wat past bij mij?
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Kies net als bijna 2 miljoen Nederlandse huishoudens voor duurzame zonne-energie. Naast de laadpaal aan huis kan je bij ons kiezen voor zonnepanelen huren of kopen. Dat biedt volop mogelijkheden voor iedereen. Het kan. Schone energie van de zon!
                    </p>
                </div>
                <Faq />
                <Contact onlyContact form content={{
                    title: `Een offerte voor een laadpaal thuis`, text: `Vervuilend rijden is bijna verleden tijd. Ben je net als wij klaar voor een duurzame toekomst? Schrijf je nu alvast in. Zodra we starten met het plaatsen van de eigen laadpaal aan huis nemen we direct contact met je op.`
                }} />
            </div>
        </Layout >
    )
}

export default Index