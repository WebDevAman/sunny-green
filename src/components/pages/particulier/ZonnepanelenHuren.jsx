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
import Hero from '../Home/Hero'


const ConnepanelenHuren = () => {
    return (
        <Layout img='https://www.enie.nl/wp-content/uploads/2020/02/oranje-in-zon-e1589454938537.png'>
            <Hero content={
                {
                    bigTitle: 'Zonnepanelen huren',
                    smallTitle: 'Een abonnement op de zon. Het kan.'
                }
            } />
            <div className="container flex flex-col gap-6 lg:gap-12">
                <div className="flex gap-2 md:gap-10">
                    <div className="w-0 px-[3px] min-h-full rounded-sm bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>
                    <div className="flex flex-col gap-4 lg:gap-8 py-2">
                        <p className='text-base lg:text-lg'>
                            Is het mogelijk om gratis zonnepanelen te laten installeren? Ja hoor, dat kan. Zonnepanelen huren geeft je alle voordelen van zonnepanelen, zonder een cent te investeren. Zo houd je je spaargeld over voor leuke dingen of andere manieren om je huis te verduurzamen. Door zonnepanelen te huren heb je dus eigenlijk een abonnement op de zon. Slim, gemakkelijk en zorgeloos. Dat doen we bijsunnygreen.nl op deze manier:
                        </p>
                        <List
                            data={[
                                `Na de installatie van zonnepanelen betaal je een vast maandbedrag voor de opgewekte energie;`,
                                `Je bent altijd verzekerd van een hoge opbrengst dankzij onze opbrengstgarantie, en`,
                                `Zonnepanelen huren doe je voor slechts 10 jaar, daarna neem je het systeem volledig over.`,
                            ]}
                        />
                        <p className='text-base lg:text-lg'>
                            Ben je benieuwd hoe dit er voor jou uit komt te zien? Maak vrijblijvend gebruik van onze ZonneConfigurator en ontdek binnen één minuut wat jij straks gaat besparen. Door de mogelijkheid van zonnepanelen huren aan te bieden, is het voor meer mensen mogelijk om te profiteren van de voordelen van zonne-energie.
                        </p>
                    </div>
                </div>

                <div className="max-w-[60rem] w-full flex flex-col gap-6 mx-auto">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        Voordelen zonnepanelen huren
                    </h2>
                    <List
                        data={[
                            `Geen kosten voor installatie systeem`,
                            `Zonnepanelen óók in eigen beheer`,
                            `Zorgeloos stroom opwekken`,
                            `Zonnepanelen meeverhuizen`,
                        ]}
                    />
                    <p className='text-base lg:text-lg'>
                        Zonnepanelen op je dak, zonder dat je geld hoeft te investeren. Het is een concept waarmee we zonne-energie voor meer mensen toegankelijk willen maken. De voordelen van zonnepanelen huren zijn talrijk. Wat zijn die voordelen? Je hoeft geen cent te investeren en geniet toch van zonnepanelen. Dat heeft te maken met de huurconstructie zonder initiële kosten. Wel betaal je maandelijks een vast huurbedrag. Dat bedrag ligt natuurlijk altijd een stuk lager dan de opbrengst en kostenbesparing.
                    </p>
                    <p className='text-base lg:text-lg'>

                        Na 10 jaar loopt de huurconstructie voor zonnepanelen af. Je krijg de zonnepanelen volledig in eigen beheer en geniet nog zeker 15 jaar, en vaak langer, van alle voordelen van zonne-energie. Het opwekken van zonne-energie was nog nooit zo interessant. Defecten, garanties en de volledige administratie: alles is al voor je geregeld! Krijg je binnen de huurperiode toch te maken met problemen of heb je ergens hulp bij nodig? Wij nemen het voor je uit handen, en dus geniet je zorgeloos van voordelige, duurzame energie van eigen dak.
                    </p>

                    <p className='text-base lg:text-lg'>

                        Zonnepanelen meenemen? Dat kan! Stel dat je over een aantal jaren wilt verhuizen naar een nieuwe huur- of koopwoning: je mag dan de zonnepanelen meenemen naar het nieuwe adres of een afspraak maken met de verhuurder voor het afkopen van het systeem.
                    </p>
                    <p className='text-base lg:text-lg'>

                        Wil jij op korte termijn profiteren van alle voordelen van zonnepanelen huren? Het kan. We maken zonne-energie voor iedereen mogelijk, ook op jouw adres. Bespaar binnenkort al honderden euro’s op je energierekening. Wel zo prettig in deze tijd! Dit is hét moment om te investeren in je eigen duurzame toekomst.
                    </p>
                    <div className="text-center flex-col gap-8 flex pt-12 items-center justify-center">
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
                </div>
                <div className="text-center flex-col gap-8 flex pt-12 items-center justify-center">
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
                </div>
                <div className="max-w-[60rem] mx-auto flex flex-col gap-8">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        Hoe werken zonnepanelen?
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Achter de zonnepanelen op je dak gaat een knap staaltje techniek schuil. Hoewel de pv panelen in de spotlight staan, kunnen zij het werk niet alleen doen. Wat haal je eigenlijk precies in huis als je zonnepanelen huurt en hoe werken zonnepanelen precies?
                    </p>
                    <p className='text-base lg:text-lg'>
                        Een zonnepaneel bestaat uit een verzameling van tientallen zonnecellen. Deze zonnecellen zijn in de meeste gevallen gemaakt van silicium. Dankzij de blootstelling aan zonlicht komt energie vrij, dat we het photovoltaïsch effect noemen. De energie die vrijkomt op het zonnepaneel is gelijkstroom. Dit is stroom die je niet kunt gebruiken om je apparaten van energie te voorzien, want hier heb je veelvuldig te maken met een piekvraag naar stroom. De omvormer is dan ook een onmisbare schakel, en zorgt ervoor dat de gelijkstroom wordt omgezet in wisselstroom.
                    </p>
                </div>
                {[
                    {
                        title: `Zonnepanelen huren bijsunnygreen.nl`,
                        content: [
                            `Zonnepanelen huren is dé oplossing als je wil genieten van alle voordelen van zonnepanelen, maar je spaargeld liever anders besteedt. Het mooiste? Alsnog dalen je energiekosten direct. Je houdt dus niet alleen je spaargeld op zak, maar vult het elke maand aan. Lees meer over de kosten van zonnepanelen.`,

                            `Omdat wij gedurende de huurperiode schriftelijk eigenaar zijn, dragen we zelf alle risico’s. Je bent dus verzekerd van een persoonlijk advies en de beste materialen, fabrikanten en installatiepartners.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton text='Bereken je maandbedrag' />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/09/200904_5_portret_werkveld_enie_web.jpg`,
                    },
                    {
                        title: `Garantie, onderhoud en verzekering`,
                        content: [
                            `Is je dak geschikt voor zonnepanelen? Super. Dan is alles van jouw kant al geregeld. Wij doen de rest. Zo hoef jij je minimaal in te spannen en bent altijd verzekerd van de maximale opbrengst. Wij zijn tijdens de huurperiode volledig verantwoordelijk voor:`,
                            {
                                type: 'list',
                                content: [
                                    `Onderhoud en service`,
                                    `Alle verzekeringen`,
                                    `De opbrengst van de zonnepanelen`,
                                ]
                            },
                            `Na de huurperiode laten we je natuurlijk niet zitten. Onze zonnepanelen hebben de langste garanties op de markt. Als de huurperiode is afgelopen, geniet jij nog zeker 20 jaar van zonne-energie van eigen dak.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Bereken je maandbedrag' />
                            </Link>
                        ],

                        img: `https://www.enie.nl/wp-content/uploads/2021/01/190820-9-portret-noorderplantsoen-enie-1200x799-1.jpg`,
                    },
                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}
                <div className="max-w-[60rem] mx-auto">
                    <div className="flex-col gap-8 flex pt-12 justify-center">
                        <h2 className="text-2xl lg:text-4xl font-medium">
                            Voorwaarden zonnepanelen huren
                        </h2>
                        <p className='text-base lg:text-lg'>
                            Aan het einde van de 10-jarige huurperiode neem je de zonnepanelen voor € 25,- per zonnepaneel inclusief overige apparatuur over. Daarna geniet je nog zeker 20 jaar van je zonnepanelen zonder maandelijkse kosten. Vraag een gratis voorstel aan of bereken direct je maandbedrag.
                        </p>
                        <p className='text-base lg:text-lg'>
                            Heb je voldoende budget om de zonnepanelen over te nemen? Dan maken we dat natuurlijk mogelijk. Je kunt het huurcontract elke maand probleemloos opzeggen. Ga je verhuizen? Dan kan je in samenspraak met de nieuwe bewoners het huurcontract overdragen, uiteraard tegen dezelfde voorwaarden. Je kan de zonnepanelen ook meeverhuizen naar je nieuwe woning. Voor € 75,- per zonnepaneel halen wij het systeem van je dak en installeren de zonnepanelen op je nieuwe woning.
                        </p>
                    </div>
                </div>
                <ProcessLayout
                    data={{
                        title: 'Zonnepanelen huren in 3 stappen',
                        steps:
                            [
                                {
                                    title: `Wensen en mogelijkheden`,
                                    text: `We nemen binnenkort contact op om de wensen en mogelijkheden te bespreken.`
                                },
                                {
                                    title: `De offerte`,
                                    text: `Je ontvangt nog dezelfde dag de offerte met hierin het kostenoverzicht en gedetailleerde informatie voor jouw woning.`
                                },
                                {
                                    title: `De dag van de installatie`,
                                    text: `De zonnepanelen worden binnen één werkdag geïnstalleerd. Vooraf ontvang je een checklist zodat je precies weet waar je aan toe bent.`
                                },
                            ],
                    }}
                />
                <Blogs />
                <Contact onlyContact />
            </div>
        </Layout>
    )
}

export default ConnepanelenHuren