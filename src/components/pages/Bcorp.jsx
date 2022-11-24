
import Layout from '../Layout'
import React from 'react'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import BigImgCard from '../cards/BigImgCard'
import { Link } from 'react-router-dom'
import ThemeButton from '../common/ThemeButton'
import News from '../common/News'
import Impact from '../common/Impact'
import ProcessLayout from '../common/ProcessLayout'
import List from '../common/List'

const Bcorp = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2021/02/b-corp-mountains-enienl.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[50vh] lg:min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-3xl lg:text-6xl max-w-[50rem] mx-auto text-center text-white font-light">
                    Business as a force for good
                </h2>
            </div>

            <div className="max-w-[80rem] mx-auto pt-24 px-4 lg:pt-40 flex flex-col gap-6 lg:gap-12">
                <div className="flex gap-4 lg:gap-12">
                    <div className="min-h-full px-1 bg-gradient-to-b from-themeGreen to-themeDarkGreen"></div>
                    <div className="flex flex-col  py-6 gap-8">
                        <h2 className="text-2xl lg:text-4xl max-w-[50rem] font-medium">
                            Wij zijn een B Corp
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                <p className="text-base lg:text-lg font-light">
                                    Duizenden nieuwe enieanen stappen jaarlijks met ons over op zonne-energie. Daarmee is niet alleen onze duurzame impact groot, maar hebben we ook een keten die grote impact heeft op de aarde en talloze (direct of indirecte) betrokkenen. Als B Corp doen we alles om te zorgen dat deze impact voor onze klanten, medewerkers, fabrieksarbeiders, het milieu en alles waar we verder invloed op hebben, positief is.
                                </p>
                                <p className="text-base lg:text-lg font-light">
                                    B Corp zijn is hard werken, maar zorgt ervoor dat we altijd kritisch zijn op onszelf en het beste in sunnygreen.nl naar boven halen. Wij stellen hoge eisen aan onszelf, zoals je bijvoorbeeld op deze pagina leest in ons nieuwe Sustainability Report. Maar juist van die uitdagingen krijgen wij energie.
                                </p>
                            </div>
                            <img src="https://www.enie.nl/wp-content/uploads/2021/10/b-corp-score-website-568x408.png" alt="img" />
                        </div>
                    </div>
                </div>
                {[
                    {
                        title: `Wat is B Corp eigenlijk?`,
                        content: [
                            `  Goede vraag.Gecertificeerde B Corporaties gebruiken hun bedrijf als middel om de aarde een stukje mooier en beter te maken.Mede - B Corps zijn bijvoorbeeld Tony’s Chocolonely, Ben & Jerry en Patagonia, to name a few. We zijn trots om met hen deel uit te maken van deze beweging, want: B Corp word én blijf je niet zomaar.`,
                            ` Elk bedrijf dat zich B Corp wil noemen, doorloopt een zware selectietoets en herhaalt deze elke drie jaar. Op ons eerste assessment in 2018 scoorden we 99.3 punten. Na drie jaar hebben we in 2021 de toets opnieuw doorlopen. Dit keer een nog mooier resultaat: een score van 110.2! Bekijk onze score op onze B Corp pagina.`
                        ],
                        btns: [

                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2021/02/optimized-b-corp-forest-sun-enienl-e1612350075168.jpg`,
                    },
                    {
                        title: `NetZero2030`,
                        content: [
                            `Voor 2030 zijn we energieneutraal`,
                            `Naarmate we meer zonnepanelen installeren, stijgt ons grond- en brandstofverbruik. Daarom committeerden we ons in 2019 op het podium van de VN-Klimaattop om voor 2030 volledig CO₂-neutraal te werken. Met dit commitment laten we zien dat het mogelijk is om succesvol te opereren zónder het klimaat te belasten. Dat doen we 20 jaar eerder dan wanneer de rest van de wereld CO₂-neutraal moet leven en werken, in 2050.`,
                            `Als eerste grote stap richting CO₂-neutraal, hebben we in het begin van 2021 al onze eigen CO₂-uitstoot sinds oprichting in 2013 gecompenseerd: ruim 500 ton CO₂!`,
                        ],
                        btns: [

                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/02/ac01cf44-ff80-43ce-a007-d2e96af049d1.jpg`,
                    },


                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}
                <div className="py-4 lg:py-10"></div>
                <img src='https://www.enie.nl/wp-content/uploads/2022/03/sustainability-report-enienl-enie-south-africa-min.png' alt='img' className='w-full object-cover h-full rounded-3xl overflow-hidden select-none transition-all duration-1000' />


            </div>
            <Impact />

            <div className="max-w-[80rem] mx-auto px-4 lg:pt-12 flex flex-col gap-6 lg:gap-12">
                <div className="flex gap-4 pt-8 lg:gap-12">
                    <div className="min-h-full px-1 bg-gradient-to-b from-themeGreen to-themeDarkGreen"></div>
                    <div className="flex max-w-[60rem] lg:ml-[10%] flex-col  py-6 gap-8">
                        <h2 className="text-2xl lg:text-4xl max-w-[50rem] font-medium">
                            Hier komen onze producten vandaan
                        </h2>
                        <p className="text-base lg:text-lg font-light">
                            Als B Corp staan we voor volledige transparantie. In het Impact Report heb je kunnen lezen met welke fabrikanten we samenwerken. Hieronder zie je waar onze producten vandaan komen en welke reis ze afleggen tot de daken van de enieanen.
                        </p>
                        <img src='https://www.enie.nl/wp-content/uploads/2021/01/source-map-supply-chain-1-992x511.jpg' alt='img' />
                    </div>
                </div>
                <ProcessLayout
                    data={{

                        title: '',
                        steps:
                            [
                                {
                                    title: `Van grondstoffen tot producten`,
                                    text: `	
Grondstoffen van over de hele wereld worden in verschillende fabrieken in het oosten van China verwerkt tot eindproducten.`
                                },
                                {
                                    title: `De oversteek`,
                                    text: `Deze producten komen samen in de haven van Shanghai en worden op grote containerschepen naar Rotterdam verscheept.`
                                },
                                {
                                    title: `	Klaar voor actie`,
                                    text: `We slaan de producten op in ons magazijn in Rosmalen. Hier liggen ze klaar om per vrachtwagen te worden vervoerd naar de verschillende installateurs door heel Nederland.`
                                },
                            ],
                    }}
                />

                {[


                    {
                        title: `Zonne-energie opwekken met een goed gevoel`,
                        content: [
                            `Alleen de meest duurzame producten`,
                            `De partners en fabrikanten waar we mee samenwerken hebben een grote impact op de maatschappij en het klimaat. Daarom zijn we kritisch in elke productkeuze. We kiezen producten die het langst bruikbaar blijven, recyclebaar zijn en in eerlijke en veilige werkomstandigheden zijn geproduceerd. Zo zijn enieanen niet alleen zeker van de beste kwaliteit, maar ook van producten die het milieu minimaal belasten.`,

                        ],
                        btns: [
                            <Link href='/'>
                                <ThemeButton text='Onze productkeuzes' grayBtn />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/09/200904_6_portret_werkveld_enie_web.jpg`,
                    },

                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}
                <div className="py-4 lg:py-10"></div>

            </div>
        </Layout >
    )
}

export default Bcorp