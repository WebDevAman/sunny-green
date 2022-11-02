import React from 'react'

const HowItWorks = () => {
    return (
        <div className='flex max-w-[70rem] mx-auto py-12 flex-col gap-12'>
            <div className="flex gap-2 md:gap-10">
                <div className="w-0 px-[3px] min-h-full rounded-sm bg-gradient-to-b from-themeYellow to-themeOrange"></div>
                <div className="flex flex-col gap-4 py-6">
                    <h2 className='text-2xl lg:text-4xl '>
                        Snel inzicht in jouw kosten én besparing
                    </h2>


                    <h3 className='text-xl lg:text-2xl '>
                        Met de ZonneConfigurator
                    </h3>
                    <p className='text-base lg:text-lg'>
                        Zonne-energie voor iedereen beschikbaar maken. Dat is onze missie. Om dat voor elkaar te krijgen, maken we zonnepanelen kopen of huren voor iedereen zo makkelijk mogelijk. Een heel adviestraject door om je prijs te weten te komen? Niet bij enie.nl. Met onze ZonneConfigurator weet je binnen één minuut wat het jou gaat kosten. Ga naar de ZonneConfigurator!
                    </p>

                </div>
            </div>
            <div className="flex flex-col text-center max-w-[55rem] gap-6 mx-auto items-center">
                <h2 className='text-2xl lg:text-4xl '>
                    Hoe werkt het?
                </h2>
                <img src='https://www.enie.nl/wp-content/uploads/2022/03/001-infographic-configuratorwebsite-1-992x517.png' alt='img' />
                <p className='text-base lg:text-lg'>
                    Ga naar de ZonneConfigurator.
                </p>
            </div>
            <div className="mt-12 lg:mt-20">
                <p className='text-base text-center max-w-[55rem]  mx-auto lg:text-lg'>
                    Wil je graag de prijs berekenen voor zonnepanelen, om dit te kunnen afzetten tegen de opbrengsten en terugverdientijd (tvt)? Dan ben je al goed bezig. Je bent je bewust van de voordelen van zonnepanelen, maar wilt natuurlijk ook weten hoeveel panelen er op je dak passen en wat de aanschafwaarde voor zonnepanelen is. Wij helpen je daarom op weg bij het berekenen van de prijs voor zonnepanelen.
                </p>
            </div>
            <div className="mt-12 flex flex-col gap-6 lg:mt-20">
                <h2 className='text-2xl lg:text-4xl '>
                    Hoe wordt de prijs voor zonnepanelen opgebouwd?
                </h2>
                <p className='text-base  mx-auto lg:text-lg'>
                    Een inschatting van de prijs voor zonnepanelen wordt gebaseerd op de kale prijs voor het paneel, dan wel een totaalprijs van alle zonnepanelen die in zijn totaliteit op het dak passen.Dit kan per aanbieder verschillen.Bij enie.nl kiezen we er bewust voor een totaalprijs aan te bieden, zodat je precies weet waar je aan toe bent en niet voor verrassingen komt te staan.Ook zijn binnen de prijs voor zonnepanelen materiaalkosten en arbeidsuren inbegrepen.
                </p>
                <div className="flex gap-2 lg:gap-6">
                    <div className="px-[3px] min-h-full rounded-sm bg-gradient-to-b from-themeYellow to-themeOrange"></div>
                    <p className="text-lg py-4 lg:text-xl italic">
                        ”Wist je dat je bij enie.nl heel eenvoudig de prijs voor zonnepanelen kunt berekenen? Het enige dat jij hoeft te doen is je postcode en huisnummer invullen binnen onze ZonneConfigurator, en wij berekenen direct de mogelijkheden. Geheel vrijblijvend natuurlijk!”
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks