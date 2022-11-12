
import Layout from '../Layout'
import React from 'react'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import BigImgCard from '../cards/BigImgCard'
import { Link } from 'react-router-dom'
import ThemeButton from '../common/ThemeButton'
import News from '../common/News'
import Reasons from '../common/Reasons'

const CO2 = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2021/05/rwandafieldwall-min-2000x1330.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[50vh] lg:min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-3xl lg:text-6xl max-w-[50rem] mx-auto text-center text-white font-light">
                    We hebben onze CO2-uitstoot vanaf oprichting gecompenseerd
                </h2>
            </div>
            <div className="max-w-[70rem] px-4 mx-auto w-full pt-24  lg:pt-40 flex flex-col gap-6 lg:gap-12">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="flex flex-col col-span-2  gap-6">
                        <p className="text-base lg:text-lg font-light">
                            In het begin van 2021 brachten we ons grote Climate Action Report uit: een uitgebreide analyse van waar al onze uitstoot vandaan komt en hoe we dat kunnen minimaliseren en compenseren. Dit rapport was voor ons een grote stap in de goede richting naar het behalen van ons #NetZero2030-doel. Nu is het tijd voor actie om deze uitstoot daadwerkelijk terug te brengen of te compenseren. Achter de schermen zijn we druk bezig met interne verduurzaming en vandaag kunnen we daarover iets speciaals delen.
                        </p>
                        <p className="text-base lg:text-lg font-light">
                            <b>Alle eigen CO₂-emissies vanaf oprichting gecompenseerd</b> <br />
                            We zijn trots om de lancering van ons CO₂-compensatieproject aan te kondigen. Met dit ‘Gold Standard’ project compenseren we alle 500 ton CO₂ die we sinds onze oprichting in 2013 hebben uitgestoten door bijvoorbeeld de inkoop van energie op kantoor en al onze eigen vervoer. Dit zijn de Scope 1 en Scope 2-emissies die in het Climate Action Report staan beschreven.
                        </p>

                    </div>
                    <img src="https://www.enie.nl/wp-content/uploads/2021/05/gigawatt-project-rwanda-drone-14-14-min.jpg" alt="" />
                </div>
                <p className="text-base lg:text-lg font-light">
                    We hebben gekozen om te investeren in het ‘Gigawatt Global Solar’-project in de Agahozo Shalom Youth Village in Rwanda. Dit 8,5 MW grote project was het eerste commerciële zonneveld dat in Oost-Afrika werd aangelegd en levert genoeg elektriciteit om 15.000(!) huishoudens van groene stroom te voorzien. Het project heeft niet alleen de hernieuwbare opwekkingscapaciteit van Rwanda met 6% verhoogd, het genereert ook banen, zorgt voor beter onderwijs in de regio en biedt off-grid plattelandsgebieden toegang tot elektriciteit.
                </p>
                <p className="text-base lg:text-lg font-light">
                    <b> More to come!</b> <br />
                    Het compenseren van al onze Scope 1 en Scope 2-emissies sinds oprichting is weer een grote stap in de richting van compleet CO₂-neutraal opereren. Door grote CO₂-reducties in factoren die we kunnen beïnvloeden en door het compenseren van onze Scope 3 CO₂-uitstoot veroorzaakt door onze leveranciers, zijn we goed op weg om ons doel van NetZero voor 2030 te behalen.
                </p>

                <p className="text-base lg:text-lg font-light">
                    Meer informatie over het compensatieproject is hier te vinden.
                </p>
            </div>
            <div className="py-4 lg:py-8"></div>
            <Reasons />
        </Layout >
    )
}

export default CO2