import React from 'react'

const Blogs = () => {
    return (
        <div className='flex flex-col py-12 items-center text-center max-w-[70rem] gap-8 mx-auto'>
            <h3 className="text-2xl font-medium lg:text-4xl">
                Kennisbank zonnepanelen huren
            </h3>
            <p className="text-base pb-6">
                Raak je niet uitgelezen over zonnepanelen?  Dan vind je deze <br /> artikelen vast interessant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, i) => (
                    <div key={i} className='flex rounded-2xl border shadow-lg overflow-hidden !text-left flex-col gap-6'>
                        <img src={item.img} alt={"img"} className="aspect-video object-cover" />
                        <h3 className="text-xl lg:text-2xl font-medium px-5">
                            {item.title}
                        </h3>
                        <p className="text-base opacity-90 pb-4 pt-3 px-5">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const data = [
    {
        img: 'https://www.enie.nl/wp-content/uploads/2022/07/zonnepanelen-op-het-dak-400x246.png',
        title: 'Hoeveel zonnepanelen heb ik nodig?',
        text: `Het is vaak de eerste vraag die men zichzelf stelt in de oriënterende fase voor zonnepanelen: “hoeveel zonnepanelen heb ik nodig?” Idealiter wil je precies genoeg zonnepanelen installeren om je jaarlijkse stroomverbruik ‘dekkend’ te hebben. Dit betekent dat je minder afhankelijk bent van het elektriciteitsnet, terwijl de stroom die je niet gebruikt kan worden gesaldeerd.`
    },
    {
        title: 'Hoe werken zonnepanelen?',
        text: `Informatie en specificaties over zonnepanelen. We geven antwoord op de vraag ‘hoe werken zonnepanelen?’, met zoveel mogelijk algemene informatie over het product en systeem. Ook bespreken we de afmetingen van een zonnepaneel, het proces van energie opwekken, de levensduur van een paneel/systeem, de capaciteit, de potentiële opbrengst en de terugverdientijd.`,
        img: `https://www.enie.nl/wp-content/uploads/2020/09/200904_1_portret_werkveld_enie_web-e1603358270406-400x196.jpg`
    },
    {
        title: 'Wat kosten zonnepanelen?',
        text: `De kosten van zonnepanelen zijn van veel factoren afhankelijk. Wil je bijvoorbeeld de zonnepanelen huren of kopen? En hoeveel zonnepanelen heb je nodig? Hoe dan ook; zonnepanelen zijn altijd een hele slimme financiële keuze.`,
        img: `https://www.enie.nl/wp-content/uploads/2020/09/190820_6_portret_noorderplantsoen_enie-400x266.jpg`
    },
]
export default Blogs