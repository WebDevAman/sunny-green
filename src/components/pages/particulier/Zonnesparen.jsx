import React from 'react'
import { BsPiggyBank } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import BigImgCard from '../../cards/BigImgCard'
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
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2022/05/groene-wkr-2.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Zonnepanelen huren via je loonstrook.
                </h2>
                <h2 className="text-xl lg:text-3xl text-white font-light">
                    Het kan.
                </h2>
                <PostCodeInp />

            </div>

            <div className="container lg:pt-40 flex flex-col gap-6 lg:gap-12">
                <div className="flex gap-2 md:gap-10">
                    <div className="w-0 px-[3px] min-h-full rounded-sm bg-gradient-to-b from-themeYellow to-themeOrange"></div>
                    <div className="flex flex-col gap-4 lg:gap-8 py-2">
                        <p className='text-base lg:text-lg'>
                            Zonnepanelen huren via je loonstrook, daarmee stap je over van grijze stroom op groene stroom. En tegelijkertijd bespaar je direct fors op je stroomkosten. Win-win.
                        </p>
                        <p className='text-base lg:text-lg'>
                            Tip ZonneSparen® bij je werkgever! Niet alleen jij en je collega’s profiteren namelijk van een enorm voordeel. Je werkgever verduurzaamt kosteloos de organisatie, ook buiten de muren van het kantoor. Vul onderaan de pagina je gegevens in en we kijken samen met je hoe we ZonneSparen voor jou en je collega’s mogelijk maken.
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
                    </div> */}
                </div>

                {[
                    {
                        title: `Verduurzamen, ook zonder investering`,
                        content: [
                            `Wij hebben één doel: zonne-energie voor iedereen. Om dat te bereiken, moet zonne-energie veel goedkoper worden dan grijze stroom. Wij hebben gezocht en gevonden: ZonneSparen®.`,
                            `Jij profiteert van een enorm fiscaal voordeel door te betalen via je loonstrook. Je hoeft niet te investeren en betaalt een maandbedrag dat direct een stuk goedkoper is dan je huidige stroomkosten!`
                        ],
                        btns: [],
                        img: `https://www.enie.nl/wp-content/uploads/2020/09/190820_2_portret_noorderplantsoen_enie-1-1200x799.jpg`,
                    },
                    {
                        title: `Vertrouwd zonnepanelen huren via je loonstrook`,
                        content: [
                            `Wij plaatsen kosteloos de zonnepanelen. Voor een periode van tien jaar verzorgen wij alle service en onderhoud. Gaat er iets kapot? Dan vervangen wij het. Valt de opbrengst tegen? Dan denken wij mee voor een oplossing. Je betaalt alleen voor de hoeveelheid opgewekte stroom.`,
                            `Met onze app weet je op elk moment van de dag precies wat je opwekt en wat je verbruikt.`
                        ],
                        btns: [],
                        img: `https://www.enie.nl/wp-content/uploads/2022/05/afbeelding-werk-1200x720.jpg`,
                    },
                    {
                        title: `Tip je werkgever`,
                        content: [
                            `Jij en je collega’s huren voordelig zonnepanelen en eventueel een elektrische laadpaal. Zo besparen jullie direct op stroom- en brandstofkosten. Je werkgever kan kosteloos en moeiteloos meedoen. In vele gevallen bespaart je werkgever zelfs op kosten én verduurzaamt de organisatie ook buiten de muren van het kantoor.`,
                            `Benieuwd wat er voor jou en je collega’s mogelijk is? We gaan graag vrijblijvend met je werkgever in gesprek. Ook werkgevers hebben profijt bij de verduurzaming van het bedrijf.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='MEER WETEN' />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/09/200904_4_portret_werkveld_enie_web-1200x799.jpg`,
                    },
                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}
                <div className="max-w-[60rem] mx-auto">
                    <div className="flex-col gap-8 flex pt-12 justify-center">
                        <h2 className="text-2xl lg:text-4xl font-medium">
                            Wat doen zonnepanelen voor je woning?
                        </h2>
                        <p className='text-base lg:text-lg'>
                            Zonnepanelen dragen bij aan een beter energielabel voor je woning. Sinds 1 januari 2015 is het energielabel voor iedereen die een huis wil kopen, verkopen of verhuren verplicht. Een woning met zonnepanelen is in de praktijk altijd meer waard. Wil je in de toekomst verhuizen? Dan ontvang je dankzij zonnepanelen een betere prijs voor je woning. Het is dan ook belangrijk om na de installatie van zonnepanelen je energielabel te (laten) veranderen. Zonnepanelen verdienen zich door de stijgende energieprijzen al tussen de 3 en 6 jaar terug! Een goede investering dus, zeker omdat zonnepanelen ruim 30 jaar meegaan. Wij geven je het beste advies over zonnepanelen.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center max-w-[55rem] gap-6 mx-auto items-center">
                    <h2 className='text-2xl lg:text-4xl '>
                        Zonnepanelen kopen prijs
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Benieuwd wat zonnepanelen jou opleveren en meer weten over de kosten? Bereken jouw voordeel uit zonnepanelen. Binnen één minuut.
                    </p>
                    <img src='https://www.enie.nl/wp-content/uploads/2022/03/001-infographic-configuratorwebsite-1-992x517.png' alt='img' />
                </div>
                <ProcessLayout
                    steps={4}
                    data={{

                        title: 'Zonnepanelen huren via ZonneSparen® in 4 stappen',
                        steps:
                            [
                                {
                                    title: `Informatie aanvragen`,
                                    text: `Binnen één werkdag nemen we contact op om de mogelijkheden voor jou en je werkgever te bespreken.`
                                },
                                {
                                    title: `Afstemming met je werkgever`,
                                    text: `Wil je betalen via je loonstrook dan zal je werkgever dit moeten faciliteren. Wij regelen de afstemming met je werkgever, daar hoef je zelf niks voor te doen.`
                                },
                                {
                                    title: `Adviesgesprek`,
                                    text: `Het adviesgesprek vindt op afstand plaats door middel van schermdeling. Zo weet je snel of je woning geschikt is voor zonnepanelen.`
                                },
                                {
                                    title: `Installatie`,
                                    text: `In de meeste gevallen worden de zonnepanelen binnen één dag geïnstalleerd.  `
                                },
                            ],
                    }}
                />
                <div className='relative py-12 mt-12 md:flex hidden '>
                    <div className={`right-0 absolute h-full  top-0 w-full max-w-[90%] rounded-3xl overflow-hidden`}>
                        <img src={`https://www.enie.nl/wp-content/uploads/2021/03/van-doesburg-zonnepanelen-enienl-min.jpg`} alt={`https://www.enie.nl/wp-content/uploads/2021/03/van-doesburg-zonnepanelen-enienl-min.jpg`} className='w-full object-cover h-full rounded-3xl overflow-hidden select-none transition-all duration-1000' />
                    </div>
                    <div className={`z-20 relative w-full max-w-[35rem] mr-auto`}>
                        <div className="h-full bg-white rounded-3xl shadow-2xl p-12 flex flex-col gap-6 lg:gap-10 ">
                            <h2 className='text-2xl lg:text-[40px] leading-[50px]'>
                                Een duurzamer bedrijf én gelukkige werknemers

                            </h2>
                            <div className="h-[4px] max-w-[10rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
                            <p className="text-base lg:text-lg font-light">
                                Benieuwd hoe ZonneSparen in de praktijk wordt ervaren? Bij logistiek dienstverlener GD-iTS besparen werknemers al honderden euro’s per jaar door zonnepanelen te huren via hun loonstrook.
                            </p>
                            <div className="flex gap-4">
                                <div className="h-full w-1 bg-themeYellow">

                                </div>
                                <div className="py-6">
                                    <p className="text-base lg:text-lg font-light">
                                        “Benut de ruimte binnen de WKR en zet het in voor verduurzaming en je werknemers.”
                                    </p>
                                    <p className="text-base pt-8 lg:text-lg font-light">
                                        – Jan Korsten, GD-iTS
                                    </p>


                                </div>
                            </div>
                            <p className="text-base pt-8 lg:text-lg font-light">
                                Lees hier hoe werknemers van GD-iTS maximaal profiteren.
                            </p>
                            <div className='w-fit'>
                                <Link to='/'>
                                    <ThemeButton grayBtn text='De ervaring van GD-iTS' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-12 text-center max-w-[55rem] gap-6 mx-auto items-center">
                    <h2 className='text-2xl lg:text-4xl '>
                        ZonneSparen: uniek en voordelig
                    </h2>

                    <p className='text-base lg:text-lg'>
                        Investeren in duurzaamheid levert jou op de korte én lange termijn voordelen op. Naast zonnepanelen huren of kopen beschikken we over tal van unieke concepten die de markt voor zonne-energie ontzettend leuk maken. Welkom bij enie.nl.
                    </p>
                </div>
                <div className="flex flex-col py-12 w-full max-w-[55rem] gap-6 mx-auto">
                    <div className="flex mr-auto gap-6">
                        <div className="min-h-full w-1 bg-themeYellow"></div>
                        <h2 className='text-2xl py-4 lg:text-4xl '>
                            Alles over ZonneSparen
                        </h2>
                    </div>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden">
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/sQFhXCsRwAM" title="ZonneSparen | Zonnepanelen via je loonstrook" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <Faq />


                <Blogs />
                <Contact onlyContact />
            </div>
        </Layout >
    )
}

export default Index