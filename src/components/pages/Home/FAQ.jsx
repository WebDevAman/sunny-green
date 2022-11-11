import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineCheck } from 'react-icons/ai'
import React, { useState } from 'react'

const Faq = () => {
    const [show, setShow] = useState('')

    return (
        <section id='faq' className='flex items-center py-12 lg:min-h-[70vh] justify-center space-y-6 md:space-y-8 flex-col'>
            <h2 className="text-3xl md:text-4xl text-center">
                Goed om te weten als je voor zonnepanelen kiest
            </h2>
            <p className="text-lg lg:text-xl">
                Antwoord op je belangrijkste vragen

            </p>
            <div className="max-w-[60rem] w-full flex flex-col">
                {accordionData.map((data, i) => (
                    <AccordionItem show={show} setShow={setShow} data={data} />
                ))}
            </div>
        </section>
    )
}
const AccordionItem = ({ data, setShow, show }) => {
    const { ques, content, isLast } = data
    return (
        <div className={`py-5 text-lg ${isLast ? 'border-none' : 'border-b'} border-gray-300`}>
            <div onClick={() => setShow(show === data.ques ? '' : data.ques)} className={`flex hover:text-themeGreen ${show === data.ques ? 'text-themeGreen' : 'text-gray-700'} font-medium cursor-pointer items-center w-full justify-between`}>
                <span className="max-w-[80%] text-xl">
                    {ques}
                </span>
                <FiChevronDown className='w-5 text-themeGreen cursor-pointer h-5' />
            </div>
            <div className={`transition-all duration-500 ${show === data.ques ? 'pt-4 text-lg' : 'pt-0 text-lg h-0 overflow-hidden'}`}>
                {content.map((item, i) => (
                    item.type === 'p' ?
                        <p className='py-2'>{item.text}</p>
                        : item.type === 'list' ?
                            <ul className='flex flex-col py-4 gap-2'>
                                {item.items.map(dt => (
                                    <li className='flex items-center gap-3 '>
                                        <AiOutlineCheck className='text-themeGreen' /> <span>{dt}</span>
                                    </li>
                                ))}
                            </ul>
                            : ''
                ))}
            </div>
        </div>
    )
}
const accordionData = [
    {
        ques: 'De kosten én baten van zonnepanelen',
        content: [
            {
                type: 'p',
                text: `De koop van een volledige zonnepaneelinstallatie met twaalf zonnepanelen kost gemiddeld zo’n € 4.500,-.In Nederland krijg je de btw over je investering in zonnepanelen terug.Je betaalt uiteindelijk rond de € 3.550, - voor je gehele installatie.`

            },
            {
                type: 'p',
                text: `Met twaalf zonnepanelen wek je jaarlijks zo’n 3.400 kWh per jaar op.Als je normaal gesproken € 0, 23 per kWh betaalt, bespaar je door je zonnepanelen ruim € 780, - per jaar.Deze besparing zorgt ervoor dat je je investering van € 3.550, - binnen 4, 5 jaar hebt terugverdiend.`

            },
            {
                type: 'p',
                text: ` Huur je liever ? Dan hoef je niet te investeren.In deze tabel zie je de gemiddelde kosten van een huurcontract.Na 30 jaar heb je al meer dan € 17.000, - verdiend.Dat is wel de moeite waard.`
            }
        ]
    },
    {
        ques: 'Hoeveel CO₂-uitstoot bespaar je met je zonnepanelen?',
        content: [
            {
                type: 'p',
                text: `Voordat een zonnepaneel op je dak terechtkomt, moet het geproduceerd en vervoerd worden. Bij de productie komt tot op heden nog CO₂ vrij. Door verbetering van zowel de productieprocessen van de fabrikant als de kwaliteit van de zonnepanelen, is een zonne-installatie steeds sneller CO₂-neutraal. Enie.nl is kritisch op het kiezen van leveranciers op het gebied van duurzaamheid in het productieproces. De CO₂ die vrijkomt bij de productie en het vervoer van deze panelen wordt al binnen een jaar gecompenseerd door de opwekking van groene stroom.`

            },
            {
                type: 'p',
                text: `Vergeleken met grijze stroom, bespaar je per zelf opgewekt kWh met je zonnepanelen 0,364 kg CO₂. Een installatie van zestien panelen (350 Wp) bespaart op deze manier elk jaar zo’n 1800 kg CO₂. Dit staat ongeveer gelijk aan de CO₂ die vrijkomt bij het rijden van 10.000 kilometer met een auto met een gemiddeld verbruik. Meer weten over de CO₂-uitstoot van zonnepanelen?`

            },
        ]
    },
    {
        ques: 'Zo voorzien we jou van het beste advies',
        content: [
            {
                type: 'p',
                text: `Na het doorlopen van de ZonneConfigurator, houd je nog een kort adviesgesprek met een van onze ZonneAdviseurs. We berekenen met speciale software en luchtfoto’s precies wat je nodig hebt om het maximale uit je dak te halen. Daarbij houden we rekening met deze factoren:`

            },

            {
                type: 'list',
                items: [
                    `De richting van je dak ten opzichte van het zuiden`,
                    `De hellingshoek van je dak`,
                    `Hoeveel zon in een jaar op je dak schijnt`,
                    `Eventuele schaduwobjecten`,
                ]
            },
            {
                type: 'p',
                text: 'We sturen je na het adviesgesprek een offerte toe met daarin alles wat je wilt weten, zoals de producten, de opbrengst en terugverdientijd. Zo kun je alles nog eens rustig doorlezen voordat je een besluit neemt.'
            }
        ]
    },
    {
        ques: 'Zonnepanelen kopen of huren, jij beslist',
        content: [
            {
                type: 'p',
                text: `Zonnepanelen huren: dé oplossing voor iedereen die geld liever aan iets anders besteedt.Een elektrische auto, een lange vakantie, een roedel honden.Het is jouw geld, jij bepaalt.`
            },
            {
                type: 'p',
                text: `Als je zonnepanelen huurt, betaal je elke maand een vaststaand bedrag gedurende de gehele huurperiode.Je bent daardoor als huurder volledig onafhankelijk van de stijgende energieprijzen in Nederland en komt nooit voor verrassingen te staan.`
            },
            {
                type: 'p',
                text: `Bij enie.nl komen na een huurperiode van 10 jaar de panelen volledig in jouw bezit.Omdat zonnepanelen ruim 30 jaar meegaan, betekent dit dat je daarna ruim 20 jaar kunt genieten van je eigen zonne - energie.`
            },
        ]
    },
]
export default Faq