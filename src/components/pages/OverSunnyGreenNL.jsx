
import Layout from '../Layout'
import React from 'react'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import BigImgCard from '../cards/BigImgCard'
import { Link } from 'react-router-dom'
import ThemeButton from '../common/ThemeButton'
import News from '../common/News'
import Reasons from '../common/Reasons'

const OverSunnyGreenNL = () => {
    return (
        <Layout noHero img='https://upload.wikimedia.org/wikipedia/commons/6/6d/Installing_solar_panels_%283049032865%29.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[50vh] lg:min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-3xl lg:text-6xl max-w-[50rem] mx-auto text-center text-white font-light">
                    Een missiegedreven organisatie
                </h2>
            </div>
            <div className="max-w-[80rem] pt-24 mx-auto px-4 lg:pt-40 flex flex-col gap-6 lg:gap-12">
                <div className="flex gap-4 lg:gap-12">
                    <div className="min-h-full px-1 bg-gradient-to-b from-themeGreen to-themeDarkGreen"></div>
                    <div className="flex flex-col  py-6 gap-8">
                        <h2 className="text-2xl lg:text-4xl max-w-[50rem] font-medium">
                            Wij zien de toekomst zonnig tegemoet
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                <p className="text-base lg:text-lg font-light">
                                    Fossiele brandstoffen hebben ons veel gebracht, maar tegen een prijs. Ze hebben hun tijd gehad. Waar stappen we op over? Dat is de grote vraag. Voor de natuur is de zon altijd al de grootste energieleverancier geweest. Ze is onze schoonste en meest toegankelijke bron. Ze geeft de meeste energie, letterlijk en figuurlijk. Ze vervuilt onze horizon niet, maar trakteert ons op magische zonsop- en ondergangen.
                                </p>

                                <p className="text-base lg:text-lg font-light">
                                    Zoals onze aarde om de zon draait, draait ook bij sunnygreen.nl alles om de zon.
                                </p>
                            </div>
                            <p className="text-base lg:text-lg font-light">

                                We zijn hard bezig om zonne-energie voor iedereen beschikbaar te maken. Of je nu zonnepanelen hebt of niet. En nu we daar dicht bij zijn, beseffen we dat er een groter doel is. Binnen tien jaar kunnen we de zon als energiebron weer op 1 hebben. Een sprong vooruit voor onze aarde, met de slimste, mooiste, sterkste energiebron die er is. Maar eigenlijk gewoon terug naar de bron die ons al miljoenen jaren van energie voorziet. Iedere grote verandering begint klein. Doe je mee om de zon weer op 1 te krijgen? Het kan.
                            </p>
                        </div>
                    </div>
                </div>
                {[
                    {
                        title: `Zonne-energie voor iedereen beschikbaar.`,
                        content: [
                            `SunnyGreen.nl is in 2013 opgericht met één doel: zonne-energie voor iedereen beschikbaar te maken. Wij grijpen de uitdagingen van de energietransitie met beide handen aan om met zijn allen zo snel mogelijk te kunnen genieten van goedkope, klimaatneutrale en decentrale energie.`,
                            ` Als enieaan ben je onderdeel van een betrokken community met meer dan 20.000 huishoudens en bedrijven, die zich net als jij inzetten voor een duurzame toekomst. Lees hier meer over wat onze klanten zeggen.`
                        ],
                        btns: [

                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/04/dsc_0642_bart-lindenhovius-1-e1603725827977-1200x1027.jpg`,
                    },

                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}
                <div className="py-4 lg:py-10"></div>
                <div className="flex flex-col gap-6 items-center text-center">
                    <h2 className="text-2xl lg:text-4xl max-w-[50rem] font-medium">
                        Onze impact blijft niet onopgemerkt
                    </h2>
                    <img src="https://www.enie.nl/wp-content/uploads/2021/11/logos-568x373.jpg" alt="img" />
                </div>
                <div className="flex flex-col py-12 w-full max-w-[55rem] gap-6 mx-auto">
                    <div className="flex mr-auto gap-6">
                        <div className="min-h-full w-1 bg-themeDarkGreen"></div>
                        <div className="flex flex-col gap-3">
                            <h2 className='text-2xl py-4 lg:text-4xl '>
                                TED Talks: Solar energy for everyone
                            </h2>
                            <p className='text-base lg:text-lg font-light'>Bekijk de Ted Talk van Patrick van der Meulen: ‘Solar energy for everyone.’
                            </p>
                        </div>
                    </div>
                    <div className="w-full aspect-video rounded-2xl overflow-hidden">
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/L1dOAgfcZk8" title="Solar energy for everyone | Patrick van der Meulen | TEDxWageningenUniversity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                {[
                    {
                        title: `Niet alleen de beste van de wereld, maar ook de beste voor de wereld`,
                        content: [
                            `Wij zijn een B Corp-gecertificeerde onderneming. Dat zie je niet alleen aan het B Corp-certificaat op onze uitingen, dat merk je aan alles wat we doen. We zetten extra stappen voor het milieu, sociale gelijkheid, onze medewerkers en zijn transparant in ons beleid. Hierdoor brengen we onze missie en winst met elkaar in evenwicht. Lees op onze B Corp pagina alles over wat B Corp zijn voor ons betekent.`
                        ],
                        btns: [
                            <Link to='/'>
                                <ThemeButton grayBtn text=' Onze B Corp pagina' />
                            </Link>
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2021/02/b-corp-forest-sun-enienl-1-1200x800.jpg`,
                    },
                    {
                        title: `Wij zijn CO2-neutraal voor 2030`,
                        content: [
                            ` Wij hebben een doel: voor 2030 CO2-neutraal. Samen met 500 andere B Corps hebben we op het podium van de VN Klimaattop in Madrid gecommitteerd om onze CO2-uitstoot voor 2030 tot nul te brengen. Om dit waar te maken, timmeren we de komende jaren hard aan de weg.`,

                            `We brengen de totale uitstoot van onze keten in kaart en zorgen dat we zo weinig mogelijk broeikasgassen uitstoten. Alle overblijvende uitstoot, compenseren we. Hierin nemen we al onze leveranciers en partners mee en zorgen we ervoor dat we onze duurzame missie delen met hogescholen en universiteiten.`,

                            ` Met het bedrijfsleven écht het verschil maken. Het kan.`
                        ],
                        btns: [
                        ],
                        img: `https://www.enie.nl/wp-content/uploads/2020/02/ac01cf44-ff80-43ce-a007-d2e96af049d1.jpg`,
                    },

                ].map((x, y) => (
                    <BigImgCard data={x} i={y} />
                ))}

                <div className="py-4 lg:py-8"></div>
                <News />
            </div>
            <div className="py-4 lg:py-8"></div>
            <Reasons />
        </Layout >
    )
}

export default OverSunnyGreenNL