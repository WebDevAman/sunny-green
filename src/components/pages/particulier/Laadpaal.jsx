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
        <Layout noHero img='https://www.dagelijksauto.nl/wp-content/uploads/2020/12/EveDoubleProline-scaled-e1607000663301.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Laadpaal thuis
                </h2>

                <h2 className="text-xl lg:text-3xl text-white font-light">
                    Vol energie van en naar huis.
                </h2>


            </div>

            <div className="container lg:pt-40 flex flex-col gap-6 lg:gap-12">

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
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/11/shutterstock-1812967378-1-e1604502543944.jpg`,
                    },
                    {
                        title: `Áltijd verzekerd van duurzame zonne-energie`,
                        content: [
                            `Zelf zonnepanelen thuis of op het werk? Goed bezig. Dan laad je elke dag met een goed gevoel je accu duurzaam op. Heb je ze (nog) niet? Ook dan ben je bijsunnygreen.nl verzekerd van een duurzame laadbeurt. Met de ZonneLaden-pas tank je gegarandeerd 100% Nederlandse zonne-energie, die we opwekken op grote zonnedaken door het hele land.`,
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

                <div className="flex flex-col text-center max-w-[55rem] gap-6 pt-6 lg:pt-12 mx-auto items-center">
                    <h2 className='text-2xl lg:text-4xl '>
                        Wat past bij mij?
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Kies net als bijna 2 miljoen Nederlandse huishoudens voor duurzame zonne-energie. Naast de laadpaal aan huis kan je bij ons kiezen voor zonnepanelen huren of kopen. Dat biedt volop mogelijkheden voor iedereen. Het kan. Schone energie van de zon!
                    </p>
                </div>
                <Contact onlyContact form content={{
                    title: `Een offerte voor een laadpaal thuis`, text: `Vervuilend rijden is bijna verleden tijd. Ben je net als wij klaar voor een duurzame toekomst? Schrijf je nu alvast in. Zodra we starten met het plaatsen van de eigen laadpaal aan huis nemen we direct contact met je op.`
                }} />
            </div>
        </Layout >
    )
}

export default Index
