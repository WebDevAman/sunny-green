import Layout from '../Layout'
import React, { useState } from 'react'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import Hero from './Home/Hero'
import ThemeButton from '../common/ThemeButton'
import Contact from './Home/Contact'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineCheck } from 'react-icons/ai'

const FAQ = () => {
    return (
        <Layout img='https://www.enie.nl/wp-content/uploads/2021/02/200904-1-portret-werkveld-enie-web.jpg'>
            <Hero content={
                {
                    bigTitle: 'Veelgestelde vragen',
                    smallTitle: 'Antwoord op al je vragen rond zonnepanelen'
                }
            } />
            <div className="container flex flex-col gap-6 lg:gap-8">
                {accordionData.map((item, i) => (
                    <>
                        <div className="py-6 lg:py-8">

                        </div>
                        <h2 className="text-3xl md:text-4xl text-center">
                            {item.title}
                        </h2>
                        <p className="text-lg lg:text-xl text-center">
                            {item.text}
                        </p>
                        <div className="max-w-[60rem] mx-auto w-full flex flex-col">
                            <Accordion content={item.content} />
                        </div>
                    </>
                ))}
                <div className="py-6 lg:py-8">

                </div>
                <div className="flex flex-col gap-8 mx-auto max-w-2xl text-center items-center">
                    <h2 className="text-2xl lg:text-4xl font-medium">
                        Kennisbank
                    </h2>
                    <p className='text-base lg:text-lg font-light'>
                        Zonne-energie voor iedereen. Het kan. We vertellen je graag meer over zonnepanelen, salderen, recyclen en btw-teruggave. Binnen onze kennisbank is ruimte voor achtergrond, diepgang en meer informatie over zonne-energie. Ontdek het!
                    </p>
                    <ThemeButton text='Kennisbank - sunnygreen.nl' />
                </div>
                <Contact onlyContact />
            </div >
        </Layout >
    )
}


const Accordion = ({ content }) => {
    const [show, setShow] = React.useState('')
    return (
        content.map((data, i) => (
            <div className={`py-5 text-lg ${data?.isLast ? 'border-none' : 'border-b'} border-gray-300`}>
                <div onClick={() => setShow(show === data.ques ? '' : data.ques)} className={`flex hover:text-themeGreen ${show === data.ques ? 'text-themeGreen' : 'text-gray-700'} font-medium cursor-pointer items-center w-full justify-between`}>
                    <span className="max-w-[80%] text-xl">
                        {data?.ques}
                    </span>
                    <FiChevronDown className='w-5 text-themeGreen cursor-pointer h-5' />
                </div>
                <div className={`transition-all duration-500 ${show === data.ques ? 'pt-4 text-lg' : 'pt-0 text-lg h-0 overflow-hidden'}`}>
                    {data?.content.map((item, i) => (
                        item.type === 'p' ?
                            <p className='py-2'>{item.text}</p>
                            :
                            item.type === 'p_bold' ?
                                <p className='font-semibold'>{item.text}</p>
                                :
                                item.type === 'list' ?
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
        ))
    )
}
const accordionData = [
    {
        title: `Financieel`,
        text: `Alles over de kosten en financiële regelingen rond zonnepanelen.`,
        content: [
            {
                ques: 'Wat is salderen?',
                content: [
                    {
                        type: 'p',
                        text: `Heb je zonnepanelen op je dak ? Dan wek je je eigen energie op.Een deel van deze energie gebruik je zelf, maar op sommige momenten leveren de panelen meer op dan je verbruikt.In dat geval lever je de energie terug aan het energienet.De hoeveelheid energie die je per jaar teruglevert, wordt op de jaarrekening per kWh verrekend met je energierekening; dit heet salderen.Lees alles over de salderingsregeling.`

                    },

                    {
                        type: 'p',
                        text: `Een voorbeeld: je zonnepanelen leveren 3.000 kWh per jaar op.Stel je werkt overdag.Je zonnepanelen wekken dan energie op, maar die verbruik je zelf niet.Jij bent immers niet thuis.De opgewekte energie gaat dan via de meterkast naar het elektriciteitsnet. ’s Avonds kom je thuis van je werk en juist dan verbruik je wél energie, terwijl op dat moment je zonnepanelen niets opwekken.Jij gebruikt dan stroom van het net.`

                    },
                    {
                        type: 'p',
                        text: ` In dit voorbeeld wordt 1.000 kWh direct teruggeleverd aan het net, omdat jij het niet gebruikt. ’s Avonds gebruik je 1.500 kWh dat afkomstig is van het net.Door de salderingsregeling betaal je daardoor slechts voor 500 kWh.Wat je van het net hebt verbruikt en wat je hebt teruggeleverd wordt met elkaar verrekend.`
                    }
                ]
            },
            {
                ques: 'Wat gebeurt er met de salderingsregeling?',
                content: [
                    {
                        type: 'p_bold',
                        text: `Salderen na 1 januari 2025`

                    },
                    {
                        type: 'p',
                        text: `In april van 2019 maakte het kabinet bekend dat eigenaren van zonnepanelen tot eind 2022 gebruik kunnen maken van de salderingsregeling in de huidige vorm.Inmiddels is bekend geworden dat men tenminste tot 2025 kan blijven salderen.Hierna wordt de regeling tot 2031 langzaam afgebouwd tot 0. Omdat de regeling financieel aantrekkelijk is, mocht het nieuws rekenen op een positieve respons door milieuorganisaties en consumenten.Op deze manier wordt de Nederlandse burger langer aangemoedigd over te stappen op zonne- energie.Pas in 2031 wordt de salderingsregeling volledig vervangen door een terugleversubsidie.Lees meer over deze subsidie in onze blog.`

                    },
                    {
                        type: 'p_bold',
                        text: `Energie terug leveren voor een vaste prijs`
                    },
                    {
                        type: 'p',
                        text: `Vanaf de introductie van de terugleversubsidie op stroom krijg je een vastgesteld bedrag terug.Dit bedrag is gelijk voor iedereen die energie terug levert aan het net.Uitgangspunt voor de hoogte van dit bedrag, is dat de terugverdientijd van zonnepanelen altijd rond de zeven jaar is, en momenteel ligt de tvt onder druk van de hoge energieprijzen zelfs nog lager.Worden zonnepanelen in de toekomst bijvoorbeeld goedkoper, dan daalt het bedrag van de terugleversubsidie.`

                    },
                ]
            },
            {
                ques: `Hoe werkt de vriendenactie?`,
                content: [
                    {
                        type: 'p',
                        text: `Jij vult de contactgegevens van je vriend in op www.enie.nl/vriend, zodat wij hem of haar kunnen benaderen. Vervolgens plannen wij een adviesgesprek met je vriend in en kijken we naar de ideale oplossing voor zijn of haar situatie. Wordt je vriend klant? Dan ontvang jij het actiebedrag binnen tien dagen na de installatie van de zonnepanelen op je bij ons bekende rekening. De actie is alleen geldig als je vriend niet eerder contact met ons heeft gehad.`
                    },

                ]
            },
            {
                ques: `Hoe werkt de btw-teruggave?`,
                content: [
                    {
                        type: 'p',
                        text: `Op de aanschaf van zonnepanelen kun je btw terugkrijgen. Om ervoor te zorgen dat je het geld terugkrijgt, wordt er via de Belastingdienst een procedure in werking gezet. Hier zitten een aantal administratieve handelingen aan vast. Zo moet je tijdelijk als ondernemer geregistreerd worden en aan aantal aangiftes indienen. Omdat wij merken dat veel klanten deze procedure moeilijk vinden, kunnen wij de btw-teruggave voor je uit handen nemen. Op deze manier ben je er verzekerd van dat het bedrag snel en zorgeloos op je rekening komt te staan. Lees meer over het volledige btw-teruggave proces.`
                    },
                    {
                        type: 'p',
                        text: `Let op: vanaf 1 januari 2023 zal de btw op zonnepanelen waarschijnlijk worden afgeschaft. Dit zorgt voor een nieuwe situatie, waarin het btw-nultarief gaat gelden. Lees verder.`
                    },
                ]
            },
            {
                ques: `Zonnepanelen kopen of huren, jij beslist`,
                content: [
                    {
                        type: 'p',
                        text: `Zonnepanelen huren: dé oplossing voor iedereen die geld liever aan iets anders besteedt. Een elektrische auto, een lange vakantie, een roedel honden. Het is jouw geld, jij bepaalt.`
                    },
                    {
                        type: 'p',
                        text: `Als je zonnepanelen huurt, betaal je elke maand een vaststaand bedrag gedurende de gehele huurperiode. Je bent daardoor als huurder volledig onafhankelijk van de stijgende energieprijzen in Nederland en komt nooit voor verrassingen te staan.`
                    },
                    {
                        type: 'p',
                        text: `Bij sunnygreen.nl komen na een huurperiode van 10 jaar de panelen volledig in jouw bezit. Omdat zonnepanelen ruim 30 jaar meegaan, betekent dit dat je daarna ruim 20 jaar kunt genieten van je eigen zonne-energie.`
                    },


                ]
            },
            {
                ques: `Kan ik beter huren of kopen?`,
                content: [
                    {
                        type: 'p',
                        text: `Een investering in het kopen van zonnepanelen is gemiddeld na zo’n zeven jaar terugverdiend. Onder druk van de huidige energieprijzen valt de terugverdientijd in de praktijk vaak nog korter uit. Heb je niet de middelen om te investeren of wil je liever je spaargeld voor iets anders gebruiken? Dan is zonnepanelen huren een slimme uitkomst. De terugverdientijd van je zonnepanelen is zo’n 2 tot 4 jaar langer, maar daar krijg je onderhoud, verzekering en garanties voor terug. Omdat wij gedurende de huurperiode eigenaar zijn, dragen we zelf alle risico’s. Je bent dus verzekerd dat we alleen werken met de beste materialen, fabrikanten en installatiepartners. Lees meer over zonnepanelen huren.`
                    },
                ]
            },

        ]
    },
    {
        title: `Zonne-energie-installatie`,
        text: `De techniek die zonneschijn omzet in jouw energie.`,
        content: [
            {
                ques: `Wat brengt een zonnepaneel op ?`,
                content: [
                    {
                        type: 'p',
                        text: `Het vermogen van een zonnepaneel drukt men uit in Wattpiek (Wp). Er spelen vele factoren mee die bepalen wat de daadwerkelijke opbrengst van een zonnepaneel is. De oriëntatie en hellingshoek van het dak, de hoeveelheid schaduw die er jaarlijks op valt of de helderheid van de lucht. In Nederland presteert een paneel daarom gemiddeld op rond de 85% van zijn kunnen. Een systeem van 3.500 Wp levert daarom per jaar zo’n 3.000 kWh op. Benieuwd hoeveel zonnepanelen in jouw situatie opwekken? De prijs voor zonnepanelen berekenen doe je nu volledig online bij sunnygreen.nl.`
                    },
                ]
            },
            {
                ques: `Wat doet de omvormer?`,
                content: [
                    {
                        type: 'p',
                        text: `Van de zonnepanelen loopt een kabel naar de omvormer. Dit is een apparaat waarin gelijkstroom wordt omgezet in bruikbare wisselstroom. Deze wisselstroom wordt vervolgens verplaatst naar de meterkast, waarna je apparaten in huis de stroom kunnen gebruiken.`
                    },
                    {
                        type: 'p',
                        text: `De omvormer is een kastje ter grootte van twee grote schoenendozen. Wanneer de panelen energie opwekken, overdag, dan doet de omvormer zijn werk. ’s Nachts, wanneer de panelen uitstaan, is ook de omvormer uit. Het apparaat maakt een zacht geluid wanneer het aanstaat, maar is dus ’s nachts volledig stil. Omdat de omvormer zijn warmte kwijt moet, is het van belang het apparaat te installeren op een plek met voldoende ruimte voor luchtcirculatie.`
                    },
                    {
                        type: 'p',
                        text: `Voor een serie of een parallel geschakeld systeem zijn verschillende soorten omvormers nodig. Bij sunnygreen.nl maken we gebruik van een Growatt omvormer bij een serie schakeling. Voor een parallel systeem gebruiken we een SolarEdge omvormer. Benieuwd hoe de hele zonne-installatie werkt?`
                    },
                ]
            },
            {
                ques: `Wat is het verschil tussen serie of parallel geschakeld?`,
                content: [
                    {
                        type: 'p',
                        text: `De manier waarop zonnepanelen met elkaar zijn gekoppeld, kan grote invloed hebben op de opbrengst van de zonne-installatie. Er zijn twee manieren waarop zonnepanelen aan elkaar geschakeld kunnen worden: als serie of parallel. Zonnepanelen presteren vanzelfsprekend het best wanneer ze zoveel mogelijk zonlicht opvangen. Soms komt het voor dat een of meerdere panelen in de schaduw liggen. Als een veld zonnepanelen als serie is geschakeld, dan presteert de hele kring naar de opbrengst van het slechtst presterende paneel. Ligt een paneel (deels) in de schaduw, dan zorgt dit ervoor dat de hele serie in dat geval negatief wordt beïnvloed.`
                    },
                    {
                        type: 'p',
                        text: `Schaduw van bijvoorbeeld een dakkapel, een schoorsteen of een hoge boom kan de opbrengst van panelen sterk beïnvloeden. Valt er veel schaduw op je dak? Dan is het slim om je panelen ‘parallel’ te schakelen. In dit geval hebben individuele panelen geen invloed op de gehele kring, maar presteert elk paneel voor zich. Om zonnepanelen parallel te schakelen, wordt er een zogenaamde ‘optimizer’ onder elk paneel geïnstalleerd. Heb je nog meer vragen? Lees alles over hoe zonnepanelen werken.`
                    },
                ]
            },
            {
                ques: `Zijn zonnepanelen recyclebaar?`,
                content: [
                    {
                        type: 'p',
                        text: `Ja, zonnepanelen zijn bijna volledig recyclebaar. Het hoofdbestandsdeel van zonnepanelen, silicium, verliest zijn werking niet en kan daardoor oneindig hergebruikt worden. De overige bestandsdelen van een paneel, zoals aluminium of glas, zijn eveneens gemakkelijk te scheiden en te hergebruiken. Een gerecycled zonnepaneel kost ruim 70% minder energie dan een nieuw paneel.`
                    },
                ]
            },
            {
                ques: `Wat zijn de voordelen van zwarte zonnepanelen?`,
                content: [
                    {
                        type: 'p',
                        text: `Veel mensen kiezen tegenwoordig voor zwarte panelen. In de meeste gevallen maken ze deze keuze omdat ze zwarte panelen mooier vinden dan blauwe. De zwarte mono-kristallijnpanelen beschikken over een zwarte omlijsting tegenover de aluminium omlijsting van blauwe panelen. Doordat de panelen volledig zwartgekleurd zijn, zorgt dit voor een rustiger beeld op je dak.`
                    },
                    {
                        type: 'p',
                        text: `Naast het esthetisch voordeel, leveren zwarte panelen ook meer op dan blauwe panelen. Het Wattpiek van de panelen ligt hoger en ze werken beter bij directe zon-instraling. Met zwarte panelen wek je dus meer stroom op per m² van je dak. Wil je meer weten over onze producten? Bezoek dan onze productenpagina.`
                    },
                ]
            },
            {
                ques: `Hoeveel CO₂-uitstoot bespaar je met je zonnepanelen?`,
                content: [
                    {
                        type: 'p',
                        text: `Voordat een zonnepaneel op je dak terechtkomt, moet het geproduceerd en vervoerd worden. Bij de productie komt tot op heden nog CO₂ vrij. Door verbetering van zowel de productieprocessen van de fabrikant als de kwaliteit van de zonnepanelen, is een zonne-installatie steeds sneller CO₂-neutraal. sunnygreen.nl is kritisch op het kiezen van leveranciers op het gebied van duurzaamheid in het productieproces. De CO₂ die vrijkomt bij de productie en het vervoer van deze panelen wordt al binnen een jaar gecompenseerd door de opwekking van groene stroom.`
                    },
                    {
                        type: 'p',
                        text: `Vergeleken met grijze stroom, bespaar je per zelf opgewekt kWh met je zonnepanelen 0,364 kg CO₂. Een installatie van zestien panelen (350 Wp) bespaart op deze manier elk jaar zo’n 1800 kg CO₂. Dit staat ongeveer gelijk aan de CO₂ die vrijkomt bij het rijden van 10.000 kilometer met een auto met een gemiddeld verbruik. Meer weten over de CO₂-uitstoot van zonnepanelen?`
                    },
                ]
            },
            {
                ques: `Moet je zonnepanelen schoonmaken?`,
                content: [
                    {
                        type: 'p',
                        text: `Zonnepanelen beschikken over een speciale coating waardoor vuil er na een regenbui afspoelt. Ze hebben daarom weinig tot geen onderhoud nodig. Over het algemeen is het aan te raden eens keer per jaar je zonnepanelen te controleren op zand of vogelpoep. Een twee-jaarlijkse schoonmaakbeurt is in bijna alle gevallen meer dan voldoende.`
                    },
                    {
                        type: 'p',
                        text: `Zijn je zonnepanelen na bijvoorbeeld een zandstorm wel zichtbaar smerig? Let dan op hoe je de zonnepanelen schoonmaakt. Zonnepanelen zijn broos en dus niet bestand tegen het gebruik van bijtende schoonmaakmiddelen, schuursponzen of hogedrukspuiten. De panelen kunnen hierdoor beschadigen. Gebruik liever lauw water en een zachte spons of doek. Is je dak minder goed bereikbaar, gebruik dan een telescoopwisser die je aan kan sluiten op je tuinslang. Schoonmaakmiddel is bij het schoonmaken niet nodig. Wil je meer informatie over het schoonmaken van zonnepanelen? We vertellen je het graag!`
                    },
                ]
            },

        ]
    },
    {
        title: `ZonneLaden`,
        text: `Alle vragen over elektrisch rijden en laden beantwoord.`,
        content: [
            {
                ques: `Hoe werkt het laden?`,
                content: [
                    {
                        type: 'p',
                        text: `Onze laadpaal voor thuis heeft een standaard laadvermogen van 11 kW. Een auto met een accucapaciteit van 58 kW kan hiermee in zes uur volledig worden opgeladen. Tijdens het opladen wordt loadbalancing toegepast, zodat je zonder problemen meerdere zware apparaten tegelijk kunt aanzetten. Via de ZonneLaden-laadpas en het slimme thuislaadpunt worden de laadtransacties bijgehouden.`
                    },
                    {
                        type: 'p',
                        text: `Onderweg kun je met de ZonneLaden-laadpas bij ruim 70.000 publieke en snellaadpunten terecht, verspreid over heel Europa. Je kunt kiezen voor vaste tarieven per kWh voor standaard en snel laden of je betaalt de tarieven van de exploitant van het laadpunt. Lees meer over een laadpaal thuis.`
                    },

                ]
            },
            {
                ques: `Waar kan ik laden?`,
                content: [
                    {
                        type: 'p',
                        text: `Voor het opladen van je elektrische of hybride auto gebruik je een laadpaal en een laadkabel. Wanneer je thuis wilt opladen, heb je een eigen parkeerplaats nodig of kun je gebruik maken van een openbaar laadpunt in de buurt. Wij verzorgen het hele traject voor jou. Van offerte tot en met de installatie bij je thuis.`
                    },
                    {
                        type: 'p',
                        text: `Zakelijk of privé, huren of kopen. Met ZonneLaden kies je wat het best bij jou past. Slimme laadpunten zorgen voor een eenvoudige verrekening van de laadkosten. Heb je meerdere elektrische auto’s in jouw wagenpark, dan bieden wij je een laadoplossing op maat.`
                    },
                    {
                        type: 'p',
                        text: `Onderweg kun je terecht bij publieke laadpunten of snel- laadstations. De laadtijd is afhankelijk van het laadvermogen, wat per laadpunt en type auto kan verschillen.`
                    },

                ]
            },
            {
                ques: `Hoe duurzaam is elektrisch laden?`,
                content: [
                    {
                        type: 'p',
                        text: `Rijden met een elektrische auto is een stuk schoner dan rijden met een conventionele auto met verbrandingsmotor. Waarom precies? De belangrijkste reden is dat een elektrische auto tijdens het rijden geen CO2 en stikstof uitstoot en je fijnstofuitstoot fors afneemt.`
                    },
                    {
                        type: 'p',
                        text: `Er zijn nog veel elektrische auto’s die opgeladen worden met grijze stroom uit kolen, olie en gas. Wij kiezen er met ZonneLaden voor om uitsluitend zonne-energie te leveren afkomstig van onze eigen zonnedaken in Nederland. Zo ben je altijd 100% verzekerd van een duurzame rit.`
                    },

                ]
            },
            {
                ques: `Waarom zou ik kiezen voor een eigen laadpaal?`,
                content: [
                    {
                        type: 'p',
                        text: `Waar je je elektrische auto oplaadt (thuis, op de zaak of onderweg) maakt een enorm verschil in kosten. Thuis of op de zaak ben je altijd het voordeligst uit. Door de snelle toename van de hoeveelheid elektrische auto’s in Nederland verhoogt daarnaast de druk op publieke laadpalen, zeker in de spitsuren. Met je eigen laadpaal ga je opgeladen op weg en ben je niet afhankelijk van openbare laadpunten.`
                    },
                ]
            },
            {
                ques: `Wat moet ik weten over de actieradius?`,
                content: [
                    {
                        type: 'p',
                        text: `Een elektrische auto heeft een accu die je moet opladen. De actieradius is het aantal kilometers dat je kunt rijden met een opgeladen accu. Dit is afhankelijk van meerdere factoren, zoals je snelheid, rijstijl, heuvels of bergen en de buitentemperatuur.`
                    },
                    {
                        type: 'p',
                        text: `Een rustige rijstijl, een beperkte constante snelheid en een voorverwarmde auto in de winter zorgen voor een grotere actieradius. Daarnaast wordt het netwerk van openbare laadpalen in Nederland en Europa snel uitgebreid waardoor er altijd een laadpaal in de buurt is.`
                    },

                ]
            },
        ]
    },
    {
        title: `MKB ZonneLeasen`,
        text: `Zonnepanelen leasen voor het MKB.`,
        content: [
            {
                ques: `Ik heb (nog) geen accu's nodig. Hoe zit het met MKB ZonneLeasen?`,
                content: [
                    {
                        type: 'p',
                        text: `Ja, dat kan. We kijken graag met je naar de beste oplossing van MKB ZonneLeasen voor jouw situatie. Wil je over een aantal jaar toch accu’s toevoegen? Geen probleem, dat regelen we. `
                    },


                ]
            },
            {
                ques: `Wat voor contract ga ik aan bij ZonneLeasen?`,
                content: [
                    {
                        type: 'p',
                        text: `Het leasecontract heeft een looptijd van tien jaar. Na die tien jaar kun je het gehele pakket overnemen voor slechts € 25,- per zonnepaneel (inclusief laadpalen, accu’s, omvormers). Na deze overname ben je volledig eigenaar en draait je onderneming nog gegarandeerd twintig jaar op eigen zonne-energie.`
                    },


                ]
            },
            {
                ques: `Wat als mijn bedrijfsdak niet groot genoeg is?`,
                content: [
                    {
                        type: 'p',
                        text: `Kun je niet genoeg zonnepanelen op je bedrijfsdak kwijt om in je stroombehoefte te voorzien? Dan kun je ervoor kiezen om aanvullend 100% zonne-energie af te nemen van sunnygreen.nl. Wij wekken deze zonne-energie op op grote bedrijfsdaken door het hele land.`
                    },


                ]
            },
            {
                ques: `Waarom zou ik kiezen voor 100% zelfvoorzienend?`,
                content: [
                    {
                        type: 'p',
                        text: `Het elektriciteitsnet in Nederland staat onder druk door de snelle toename van het aantal zonnepanelen. Om het niet verder te belasten, is het belangrijk dat consumenten hun zonne-energie zelf verbruiken en opslaan. Zo zijn we minder afhankelijk van het elektriciteitsnet en kunnen we Nederland veel sneller verduurzamen.`
                    },
                    {
                        type: 'p',
                        text: `Voor je onderneming betekent het dat je 100% van je stroombehoefte voorziet met je zonnepanelen. Zo weet je dat je altijd duurzaam onderneemt, ook als de zon niet schijnt. Verder ben je met accu’s beschermd tegen tijdelijke stroomuitval en houd je je bedrijf altijd draaiende.`
                    },


                ]
            },
            {
                ques: `Waarom sunnygreen.nl?`,
                content: [
                    {
                        type: 'p',
                        text: `Wij grijpen de uitdagingen van de energietransitie met beide handen aan om met zijn allen zo snel mogelijk te kunnen genieten van goedkope, klimaatneutrale en decentrale energie. Wij zijn er om voor jou altijd een passende oplossing te vinden. Zakelijk of particulier, wel of geen eigen zonnepanelen. We staan voor je klaar. Als enieaan maak je deel uit van een snel groeiende community van huishoudens en bedrijven die zich inzetten voor een 100% duurzame toekomst. Lees hier meer over ons.`
                    },


                ]
            },

        ]
    },

]

export default FAQ