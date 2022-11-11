import React from 'react'

const Section3 = () => {
    return (
        <div className='flex flex-col gap-12 lg:gap-20 lg:py-20'>
            {data.map((item, i) => (
                <Component key={i} i={i} data={item} />
            ))}
            <div className="flex gap-2 md:gap-16">
                <div className="w-0 px-[3px] min-h-full rounded-sm bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>
                <div className="flex flex-col gap-4 py-6">
                    <h2 className='text-2xl lg:text-4xl'>
                        Terugverdientijd zonnepanelen
                    </h2>

                    <p className='text-base lg:text-lg'>
                        De aanschafprijs en het rendement op zonnepanelen zijn uiteindelijk bepalend voor de terugverdientijd, afgekort als tvt. Zoals bij alle andere investeringen in duurzaamheid, wil je ook bij zonnepanelen graag de terugverdientijd laag houden. Gelukkig worden onze zonnepanelen kwalitatief steeds beter, neemt het aanbod toe en daalt daarmee de prijs, waardoor de terugverdientijd evenredig afneemt. Bij enie.nl streven we naar een terugverdientijd op zonnepanelen tussen de 3,9 en 5,4 jaar.
                    </p>
                    <p className='text-base lg:text-lg'>
                        Wil je direct de prijs van zonnepanelen laten berekenen, zonder ergens aan vast te zitten? Het kan.
                    </p>

                </div>
            </div>
        </div>
    )
}

const Component = ({ data, i }) => {
    return (
        <>
            <div className='relative max-h-[40rem] md:flex hidden '>
                <div className={`${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} h-fit w-full max-w-[80%] rounded-3xl overflow-hidden`}>
                    <img src={data.img} alt={data.img} className='w-full object-cover rounded-3xl overflow-hidden select-none hover:scale-110 transition-all duration-1000' />
                </div>
                <div className={`absolute top-1/2 -translate-y-1/2 flex items-center w-1/2 max-w-[40rem] ${i % 2 === 1 ? 'right-0' : 'left-0'}`}>
                    <div className="h-full bg-white rounded-3xl shadow-2xl p-12 flex flex-col gap-6 ">
                        <h2 className='text-2xl lg:text-4xl'>
                            {data.title}
                        </h2>
                        <div className="h-1 py-1 min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                        <p className="text-base lg:text-lg font-light">
                            {data.text}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex md:hidden flex-col" i>
                <img src={data.img} alt={data.img} className='w-full aspect-video object-cover rounded-t-2xl' />
                <div className="h-full bg-white rounded-b-2xl shadow-xl p-6 flex flex-col gap-6 ">
                    <h2 className='text-2xl lg:text-4xl'>
                        {data.title}
                    </h2>
                    <div className="h-1 py-1 min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                    <p className="text-base lg:text-lg font-light">
                        {data.text}
                    </p>
                </div>
            </div>
        </>
    )
}
const data = [
    {
        title: `Hoeveel zonnepanelen passen op mijn dak ?`,
        text: `Allereerst wil je weten: hoeveel zonnepanelen passen er op mijn dak ? Logisch, want de uitkomst geldt als basis voor het toekomstige rendement en de aanschafwaarde.Wij hebben hiervoor een hele makkelijke tool, waarin we realtime opmeten hoeveel zonnepanelen jouw dak kunnen dragen en welke constructie daarbij het beste past.Supersimpel!`,
        img: `https://www.enie.nl/wp-content/uploads/2020/09/200904_5_portret_werkveld_enie_web.jpg`,
    },
    {
        title: `Hoeveel tijd kost het installeren van zonnepanelen ?`,
        text: `Hoewel arbeidsuren al worden inbegrepen bij de prijs voor zonnepanelen, vind je het misschien wel interessant hoeveel tijd installatie van de panelen in beslag neemt.Dit hangt, je zult zeggen ‘natuurlijk’, samen met het aantal zonnepanelen dat op het dak wordt geplaatst.Ligt dit aantal rond de 10 panelen, dan is de plaatsing en installatie binnen een aantal uren afgerond.Naarmate dit aantal toeneemt, dan kan installatie een dagdeel of zelfs hele dag in beslag nemen.Uiteraard verkiezen we kwaliteit en zekerheid boven snelheid.`,
        img: `https://www.enie.nl/wp-content/uploads/2020/10/200904_1_portret_werkveld_enie_web.jpg`,
    },
]



export default Section3