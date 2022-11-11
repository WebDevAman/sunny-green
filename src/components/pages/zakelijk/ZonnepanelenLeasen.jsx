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
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_5_web.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Zonnepanelen Leasen
                </h2>
                <h2 className="text-xl lg:text-3xl text-white font-light">
                    Zonnepanelen, laadpalen en accu's zonder investering.
                </h2>
                <PostCodeInp />

            </div>

            <div className="container lg:pt-40 flex flex-col gap-6 lg:gap-12">
                <div className="flex max-w-[60rem] mx-auto w-full gap-2 md:gap-10">

                    <div className="flex flex-col gap-4 lg:gap-8 py-2">
                        <h2 className="text-2xl lg:text-5xl font-light">
                            Zonnepanelen leasen, het mkb totaalpakket
                        </h2>
                        <p className='text-base lg:text-lg'>
                            Met MKB ZonneLeasen kan jouw bedrijf eigen zonne-energie opwekken, opslaan in accu’s en het wagenpark 100% duurzaam laten rijden dankzij moderne laadpalen. Duurzaam, met hoog rendement en helemaal klaar voor de toekomst. Nog mooier: zonnepanelen leasen is altijd zonder investering. Een totaalpakket met de financiële mogelijkheden waar bedrijven vandaag de dag behoefte aan hebben.
                        </p>
                        <p className='text-base lg:text-lg'>
                            Nog geen accu of laadpalen nodig? Geen probleem. De keuze voor zonnepanelen leasen kan volledig worden gepersonaliseerd en afgestemd op jouw wensen. Bepaal zelf wat het best bij jouw onderneming past.

                        </p>
                        <img src='https://www.enie.nl/wp-content/uploads/2021/09/2108-enie-surhuisterveen-klant-in-zicht-bart-lindenhovius-16-web-768x432.jpg' className='w-full max-w-2xl mx-auto' alt='img' />
                        <div className="flex gap-6 flex-col items-center text-center">
                            <h2 className='text-lg lg:text-xl'>Je hebt over MKB ZonneLeasen gehoord of gelezen via:

                            </h2>
                            <img src='https://www.enie.nl/wp-content/uploads/2021/04/bnr-enienl-150x150.jpg' width={90} alt='igm' />
                            <img src='https://www.enie.nl/wp-content/uploads/2021/04/fd-enienl-200x160.png' width={90} alt='igm' />
                        </div>
                    </div>
                </div>

                {[
                    {
                        title: `All-inclusive zonnepanelen leasen`,
                        content: [
                            `Klaar voor een zelfvoorzienende, decentrale toekomst`,
                            `Bereid je bedrijf voor op een duurzame en voordelige toekomst. Het complete leaseplan voor zonnepanelen bestaat uit:`,
                            {
                                type: 'list',
                                content: [
                                    `Zonnepanelen op het dak van je bedrijf zonder investering`,
                                    `Laadpalen voor je elektrische wagenpark`,
                                    `Accu’s voor de opslag van je zonne-energie`,
                                    `100% zonne-energie van Nederlandse daken`,
                                ]

                            },
                            `Tegelijk geniet je natuurlijk van de hoogste opbrengst uit zonnepanelen. Wij vertellen je graag meer over de mogelijkheden van zonne-energie voor bedrijven. Door zonnepanelen te leasen profiteer je zonder initiële kosten van alle voordelen van zonne-energie.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen' />
                            </Link>,
                            <Link to='/'>
                                <ThemeButton grayBtn text='Download brochure' />
                            </Link>,
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_7_web.jpg`,
                    },

                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}

                <div className="py-4 lg:py-10"></div>
                <ProcessLayout
                    data={{
                        title: 'Zonnepanelen leasen in 3 stappen',
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
                                    title: `Starten met leasen`,
                                    text: `Akkoord? Fantastisch. Binnen een paar weken heb je je eigen laadpaal thuis of op het werk. Op weg naar veel duurzame kilometers!`
                                },

                            ],
                    }}
                />
                {[
                    {
                        title: `Zakelijk zonnepanelen leasen`,
                        content: [
                            `Een totaaloplossing`,
                            `Met MKB ZonneLeasen kies je voor een moderne, duurzame energievoorziening. Daar hoef je geen cent voor te investeren. Je bent altijd zeker van service, onderhoud, garanties, verzekering en financiering.`, `Met de combinatie van zonnepanelen, een laadpaal en accu’s ben je gegarandeerd goedkoper of kostenneutraal uit. Een win-win. Het is één van de concepten waarmee we zonnepanelen zakelijk aantrekkelijk maken.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen' />
                            </Link>,
                            <Link to='/'>
                                <ThemeButton grayBtn text='Download brochure' />
                            </Link>,
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/11/zonneladen-3.jpg`,
                    },
                    {
                        title: `Slim en onafhankelijk`,
                        content: [
                            `Heb je een wagenpark met elektrische auto’s en wil je graag iets extra’s bieden aan je werknemers? Met zonne-energie van eigen dak ben je 100% in-control. Zakelijk zonnepanelen leasen betekent op een reguliere werkdag energie opwekken én efficiënt inzetten. Is er meer opgewekt dan je hebt verbruikt? Dan sla je de energie op in accu’s – de thuisbatterij- om het te gebruiken wanneer de zon niet schijnt.`,
                            `Daarnaast geniet je van alle voordelen van lease: enie.nl blijft gedurende de lease overeenkomst verantwoordelijk voor reparaties, onderhoud en garanties. Wel zo prettig.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen' />
                            </Link>,
                            <Link to='/'>
                                <ThemeButton grayBtn text='Download brochure' />
                            </Link>,
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2021/09/2108-enie-surhuisterveen-klant-in-zicht-bart-lindenhovius-7-web-2000x1124.jpg`,
                    },
                    {
                        title: `Interzorg Assen`,
                        content: [
                            `100% focus op eigen bedrijfsprocessen`,
                            `Zorginstelling Interzorg wil al hun middelen inzetten om zich te richten op de eigen processen. Het bedrijf besloot de financiering en alle andere zaken rond de zonnepanelen aan enie.nl over te laten. Dankzij de 550 geleasete zonnepanelen is het bedrijfspand ‘Nul op de meter’ en klaar voor de toekomst.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text='Offerte aanvragen' />
                            </Link>,
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_2_web.jpg`,
                    },

                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}

                <div className="flex flex-col text-center max-w-[55rem] gap-6 pt-6 lg:pt-12 mx-auto items-center">
                    <h2 className='text-2xl lg:text-4xl '>
                        Zonnepanelen leasen mkb: een rekenvoorbeeld
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Benieuwd naar de kosten en opbrengst van zonnepanelen leasen voor jouw organisatie? Bekijk het hieronder.
                    </p>
                    <img src='https://www.enie.nl/wp-content/uploads/2021/07/rekenvoorbeeld-mkb-zonneleasen-enienl-800x335.png' alt='omg' />
                    <p className='text-base lg:text-lg'>
                        Zonnepanelen leasen voor het mkb, hier zie je de kosten en je besparing
                    </p>
                    <Link to='/'>
                        <ThemeButton grayBtn text='Download brochure' />
                    </Link>,
                </div>
                <div className="flex gap-4 lg:gap-10">
                    <div className="min-h-full w-4 bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>
                    <div className="py-4 flex flex-col gap-3">
                        <h2 className='text-2xl lg:text-4xl'>Voordelen zonnepanelen leasen</h2>
                        <p className="text-base lg:text-lg">
                            Steeds meer bedrijven stappen over op duurzame energie van eigen dak. Logisch, want dankzij de grote oppervlakte van een bedrijfsdak is er veel ruimte voor zonnepanelen. En anders dan thuis, profiteer je op het bedrijf iedere werkdag van zonnepanelen. Wat zijn de belangrijkste voordelen van zonnepanelen leasen?
                        </p>
                        <List
                            data={[
                                `Energie besparen en geld verdienen.Zonnepanelen leasen zonder financiële investering;`,
                                `Je bent (nog) niet eigenaar, en dus ben je niet verantwoordelijk voor reparaties, onderhoud en garanties;`,
                                `Overdag zonne-energie opwekken en direct gebruiken. De optimale vorm van efficiency, en`,
                                `Betaal een vast bedrag per maand met een vaste looptijd. Zonnepanelen leasen zonder verrassingen.`,
                            ]} />
                        <p className="text-base lg:text-lg">
                            In een tijd waarin ondernemers financieel de vinger aan de pols moeten houden, is een duurzame leaseconstructie voor zonnepanelen buitengewoon interessant. We noemen dat ‘zonnepanelen zonder zorgen’. Ontdek de aantrekkelijke financiële mogelijkheden van zonnepanelen leasen bij enie.nl.
                        </p>

                    </div>
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