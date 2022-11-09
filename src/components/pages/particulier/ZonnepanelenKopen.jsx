import React from 'react'
import { BsPiggyBank } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import BigImgCard from '../../cards/BigImgCard'
import ServiceCard from '../../cards/ServiceCard'
import Blogs from '../../common/Blogs'
import List from '../../common/List'
import ProcessLayout from '../../common/ProcessLayout'
import ThemeButton from '../../common/ThemeButton'
import Layout from '../../Layout'
import Contact from '../Home/Contact'
import Faq from '../Home/FAQ'
import Hero from '../Home/Hero'


const Index = () => {
    return (
        <Layout img='https://www.enie.nl/wp-content/uploads/2022/05/groene-wkr-2.jpg'>
            <Hero content={
                {
                    bigTitle: 'Zonnepanelen kopen',
                    smallTitle: 'Direct besparen met je eigen zonnepanelen'
                }
            } />
            <div className="container flex flex-col gap-6 lg:gap-12">
                <div className="flex gap-2 md:gap-10">
                    <div className="w-0 px-[3px] min-h-full rounded-sm bg-gradient-to-b from-themeYellow to-themeOrange"></div>
                    <div className="flex flex-col gap-4 lg:gap-8 py-2">
                        <h2 className="text-2xl lg:text-4xl font-medium">
                            Waarom zonnepanelen kopen?
                        </h2>
                        <p className='text-base lg:text-lg'>
                            Verduurzamen is de laatste jaren een hot topic. De hoge energieprijzen en nadrukkelijke aandacht voor de energietransitie brengen dit in een stroomversnelling. Steeds meer mensen stappen over op zonne-energie of isoleren de woning. Wist je dat al meer dan 1.500.000 Nederlanders zonnepanelen op hun dak hebben laten plaatsen? Zij besparen elke maand veel geld, wonen duurzamer en zijn helemaal klaar voor een zonnige toekomst. Wacht niet langer en stap net als duizenden Nederlanders over op zonne-energie van enie.nl!
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
                {/* <div className="text-center flex-col gap-8 flex pt-12 items-center justify-center">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        Zonnepanelen huren of kopen?
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Veel mensen die een duurzame investering overwegen, hikken aan tegen de kosten. Geen zorgen! Je profiteert altijd van een korte terugverdienperiode en een hoge zonnepanelen opbrengst. Waarom kiezen steeds meer mensen voor het huren van zonnepanelen, ten opzichte van kopen?
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {[
                            {
                                title: 'Zonnepanelen huren zonder initiële kosten',
                                icon: <BsPiggyBank />,
                                text: `Je begint pas met 'betalen' voor de zonnepanelen zodra het systeem al een maand op je dak ligt. Geen initiële kosten dus.`
                            },
                            {
                                title: `De kosten zijn altijd flink lager dan de opbrengst`,
                                icon: <BsPiggyBank />,
                                text: `Je vaste maandbedrag is altijd lager dan je maandelijkse opbrengst uit zonnepanelen. Daar is onze duurzame garantie voor zonne-energie.`
                            },
                            {
                                title: `Geen verrassingen`,
                                icon: <BsPiggyBank />,
                                text: `Gedurende de looptijd van de huurconstructie liggen onderhoud, garantie en administratie rondom de zonnepanelen in onze handen. We ontzorgen jou volledig.`
                            },
                        ].map((item, i) => (
                            <ServiceCard data={item} />
                        ))}
                    </div>
                </div> */}
                {/* <div className="max-w-[60rem] mx-auto flex flex-col gap-8">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        Hoe werken zonnepanelen?
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Achter de zonnepanelen op je dak gaat een knap staaltje techniek schuil. Hoewel de pv panelen in de spotlight staan, kunnen zij het werk niet alleen doen. Wat haal je eigenlijk precies in huis als je zonnepanelen huurt en hoe werken zonnepanelen precies?
                    </p>
                    <p className='text-base lg:text-lg'>
                        Een zonnepaneel bestaat uit een verzameling van tientallen zonnecellen. Deze zonnecellen zijn in de meeste gevallen gemaakt van silicium. Dankzij de blootstelling aan zonlicht komt energie vrij, dat we het photovoltaïsch effect noemen. De energie die vrijkomt op het zonnepaneel is gelijkstroom. Dit is stroom die je niet kunt gebruiken om je apparaten van energie te voorzien, want hier heb je veelvuldig te maken met een piekvraag naar stroom. De omvormer is dan ook een onmisbare schakel, en zorgt ervoor dat de gelijkstroom wordt omgezet in wisselstroom.
                    </p>
                </div> */}
                {[
                    {
                        title: `Zonne-energie opwekken`,
                        content: [
                            `Duurzaam en voordelig`,
                            `Met je investering in zonnepanelen bespaar je direct op je maandlasten. De prijzen van elektriciteit stijgen, terwijl jij niets meer voor je stroom betaalt. Met 10 zonnepanelen bespaar je snel 800 euro per jaar. Hiernaast krijg je ook nog eens de btw terug op je investering. Ook wanneer de Salderingsregeling voor zonnepanelen na 2025 afloopt, blijft zonnepanelen kopen een rendabele keuze.`,
                            `De prijs van een zonne-installatie is sterk afhankelijk van het type en vermogen van de zonnepanelen en de omvormer. Wil je graag precies weten wat zonnepanelen je gaan kosten? Bereken in één minuut je prijs.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton text='Bereken je maandbedrag' />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/09/200904_6_portret_werkveld_enie_web.jpg`,
                    },
                    {
                        title: `Verduurzamen van de woning met zonnepanelen`,
                        content: [
                            `De meest duurzame energie is de energie die je zelf opwekt. Zonder tussenkomst van energieleveranciers en écht van de bron. Op die manier kan je jouw CO2-uitstoot aanzienlijk verlagen.`,
                            `Om je een beeld te geven: de CO2-uitstoot die je bespaart met een gemiddelde zonne-energie-installatie, staat gelijk aan het besparen van de uitstoot van 628.127 kilometer rijden. Dat is wel de moeite waard.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Bereken je maandbedrag' />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/09/200820_14_portret_stadspark_enie-e1603725929254-1200x991.jpg`,
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
                    data={{
                        title: 'Zonnepanelen kopen in 3 stappen',
                        steps:
                            [
                                {
                                    title: `Inschrijven`,
                                    text: `We nemen binnenkort contact op om de wensen en mogelijkheden te bespreken, en plannen alvast een adviesgesprek in.`
                                },
                                {
                                    title: `Zonnepanelen adviesgesprek`,
                                    text: `Het adviesgesprek vindt online op afstand plaats. Zo komt er niemand over de vloer. Slim, vrijblijvend en toegankelijk.`
                                },
                                {
                                    title: `Installatie van de zonnepanelen`,
                                    text: `In de meeste gevallen worden de zonnepanelen binnen één dag geïnstalleerd.`
                                },
                            ],
                    }}
                />
                <Faq />
                <div className="flex flex-col gap-8 text-center max-w-xl mx-auto">
                    <h2 className="text-2xl lg:text-4xl">Kennisbank artikelen</h2>
                    <p className="text-base">
                        Onze ideeën bieden jou de ruimte om te kiezen voor zonnepanelen huren of kopen. Twijfel je nog welke optie – zonnepanelen kopen of huren – bij jou past? Onze adviseurs staan altijd voor je klaar en geven het beste advies in elke situatie. Wil je nog meer informatie over zonnepanelen lezen? In onderstaande artikelen vertellen we je meer over het product.
                    </p>
                </div>
                <Blogs />
                <Contact onlyContact />
            </div>
        </Layout>
    )
}

export default Index