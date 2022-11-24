
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
            </div>

        </Layout >
    )
}

export default OverSunnyGreenNL