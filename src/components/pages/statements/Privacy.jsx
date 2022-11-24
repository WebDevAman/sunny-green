import React from 'react'
import Layout from '../../Layout'


const Index = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_6_web.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Privacy statement
                </h2>

            </div>
            <div className="flex max-w-[70rem] mt-0 lg:mt-32 px-4 mx-auto w-full  gap-12">
                <div className="min-h-full w-7 hidden md:flex bg-gradient-to-b from-themeGreen to-themeDarkGreen"> </div>
                <div className="py-2 lg:py-16 flex flex-col gap-4 lg:gap-6">
                    <h3 className='text-xl lg:text-3xl font-medium'>Privacy</h3>
                    <p className='text-lg font-light' >Persoonsgegevens vinden wij belangrijk en we hechten dan ook veel waarde aan de bescherming van de privacy van onze klanten en de bezoekers van onze website. Hieronder lees je hoe wij ervoor zorgen dat jouw privacy blijft gewaarborgd, welke gegevens wij verwerken, waarom, hoelang wij de gegevens bewaren en welke rechten je hebt.</p>
                    <p className='text-lg font-light' >Wij beschrijven ook de door ons getroffen maatregelen en met welke partijen wij eventueel de gegevens delen.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Wie zijn wij?</h3>
                    <p className='text-lg font-light' >Wij zijn enie.nl, een merknaam van Enie.nl Holding B.V. en onderliggende vennootschappen. Wij zijn gevestigd aan de Eemsgolaan 5 (9727 DW) in Groningen.</p>
                    <p className='text-lg font-light' >Telefonisch zijn we bereikbaar op 085 401 7000 en per mail op&nbsp;<a className='text-themeGreen text-lg hover:underline' href="mailto:klantenservice@sunnygreen.nl">klantenservice@sunnygreen.nl</a>.</p>
                    <p className='text-lg font-light' >Wij zijn bereikbaar op maandag t/m donderdag van 08:30 tot 18:00 uur<br />en op vrijdag van 08:30 tot 17:00 uur.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Wat doen wij?</h3>
                    <p className='text-lg font-light' >Onze dienstverlening bestaat uit het aanbieden van duurzame energie in de particuliere en zakelijk markt. Hierbij kan je denken aan het leveren, installeren en onderhouden van zonnepanelen installaties, het verhuren van zonnepanelen installaties en het leveren van groene stroom.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Technische en organisatorische maatregelen</h3>
                    <p className='text-lg font-light' >Bij enie.nl vinden wij het belangrijk dat jouw persoonsgegevens zo goed mogelijk worden beschermd. Dit doen wij door het treffen van technische en organisatorische maatregelen aan de hand van onze informatiebeveiligingsbeleid en wij houden rekening met de laatste stand der techniek. Deze maatregelen worden regelmatig ge&euml;valueerd en waar nodig geactualiseerd.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Welk privacy statement is op jou van toepassing?</h3>
                    <p className='text-lg font-light' >Enie.nl wil graag een leesbaar privacy statement aanbieden die van toepassing is op jouw situatie.</p>
                    <p className='text-lg font-light' >Bezoek je alleen onze website en/of heb je jouw gegevens achtergelaten op onze website of social media accounts?&nbsp;<strong><a className='text-themeGreen text-lg hover:underline' href="https://www.enie.nl/privacy-statement-voor-onze-websitebezoeker/">Klik hier</a>.</strong></p>
                    <p className='text-lg font-light' >Ben je een particuliere of zakelijke klant van enie.nl?&nbsp;<strong><a className='text-themeGreen text-lg hover:underline' href="https://www.enie.nl/privacy-statement-voor-onze-particulieren-en-of-zakelijke-klanten/">Klik hier</a>.</strong></p>
                    <ul className='flex flex-col gap-4 list-disc pl-6 lg:pl-12 text-lg font-light'>
                        <li>Ook voor werkgeverscollectief</li>
                        <li>Ook voor klanten van Vereniging Eigen Huis</li>
                        <li>Ook voor klanten van Buurkracht of andere collectieven</li>
                        <li>Ook wanneer je energie afneemt van enie.nl</li>
                    </ul>
                    <p className='text-lg font-light' >Ben je een leverancier of andere zakelijke relatie van enie.nl?&nbsp;<strong><a className='text-themeGreen text-lg hover:underline' href="https://www.enie.nl/privacy-statement-voor-onze-leveranciers-en-andere-zakelijke-relaties/">Klik hier</a>.</strong></p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Kredietcheck</h3>
                    <p className='text-lg font-light' >Op het moment dat je een huurklant wenst te worden, verstrekken wij je gegevens aan Economic Data Resources B.V. (EDR). EDR zal op basis van deze gegevens een advies geven over je kredietwaardigheid. EDR gebruikt je gegevens voor onderzoek naar jouw kredietwaardigheid en contactgegevens. Als je bezwaar wilt maken of informatie wenst over het gebruik van je persoonsgegevens door EDR, zie&nbsp;<a className='text-themeGreen text-lg hover:underline' href="https://www.edrcreditservices.nl/privacy-statement/">het privacy statement van EDR.</a></p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Rechten van betrokkene</h3>
                    <p className='text-lg font-light' >Op grond van de Algemene verordening persoonsgegevens (AVG) heb je als betrokkene aantal privacyrechten wanneer enie.nl persoonsgegevens van jou verwerkt of wanneer je een formulier hebt ingediend op onze website. Ook wanneer je daadwerkelijk klant of medewerker bent blijven de rechten hetzelfde.</p>
                    <p className='text-lg font-light' >Je mag altijd schriftelijk een verzoek indienen wat betreft de onderstaande rechten. Wil je geen informatie meer over (nieuwe) producten en/of diensten (per post, e-mail en/of telefoon) ontvangen en gebruik maken van het recht van verzet of &eacute;&eacute;n van de onderstaande rechten uitoefenen? Dit kan door een e-mail te sturen naar:&nbsp;<a className='text-themeGreen text-lg hover:underline' href="mailto:klantenservice@sunnygreen.nl">klantenservice@sunnygreen.nl</a>.</p>
                    <ul className='flex flex-col gap-4 list-disc pl-6 lg:pl-12 text-lg font-light'>
                        <li>Inzage: wanneer je wil inzien welke persoonsgegevens wij van jou verwerken. Wij mogen je verzoek weigeren indien het niet opweegt tegen de door ons te dragen administratieve lasten of om rechten en vrijheden van andere personen te beschermen.</li>
                        <li>Bezwaar: indien je van mening bent dat wij jouw persoonsgegevens niet mogen gebruiken voor direct marketing dan wel voor een andere specifieke situatie. Je dient deze specifieke situatie te motiveren in het verzoek. Wij mogen je verzoek weigeren indien wij dwingende gerechtvaardigde gronden voor de verwerking hebben die zwaarder wegen dan jouw belangen, rechten en vrijheden dan wel te maken hebben met een rechtsvordering.</li>
                        <li>Rectificatie of aanvulling: wanneer wij onjuiste persoonsgegevens van je verwerken en je deze wil aanpassen of aanvullen. Indien je toegang hebt tot het enie.nl klantportaal kan je zelf ook je persoonsgegevens aanpassen.</li>
                        <li>Beperking: wanneer je van mening bent dat wij jouw persoonsgegevens alleen beperkt mogen gebruiken, tenzij wij een goede reden hebben, zoals het verwerken van deze gegevens op grond van een wettelijke plicht.</li>
                        <li>Verwijdering van persoonsgegevens: je mag verzoeken om jouw persoonsgegevens bij ons te laten verwijderen. Dit is niet mogelijk indien jouw persoonsgegevens nodig zijn voor het uitvoeren van een overeenkomst dan wel het nakomen van een wettelijke plicht.</li>
                        <li>Overdracht van persoonsgegevens: je persoonsgegevens worden dan rechtstreeks gestuurd naar een andere organisatie, met dezelfde dienstverlenende achtergrond. Wij dragen geen persoonsgegevens over naar organisaties met een andere type dienstverlening.</li>
                        <li>Intrekken van toestemming: wanneer je toestemming hebt gegeven voor een specifieke verwerking, mag je deze ook weer intrekken. Het intrekken van de toestemming heeft geen invloed op de rechtmatigheid van verwerkingen op basis van de eerder gegeven toestemming, of in het geval enie.nl verplicht is om diezelfde persoonsgegevens te verwerken op grond van een overeenkomst of wettelijke verplichting.</li>
                        <li>Klachten: indien je een gegronde reden hebt over de manier waarop enie.nl de persoonsgegevens verwerkt kan je altijd een klacht indienen bij enie.nl of bij de Autoriteit Persoonsgegevens.</li>
                    </ul>
                    <p className='text-lg font-light' >Enie.nl neem geen besluiten op basis van geautomatiseerde gegevensverwerking. Onze besluiten worden genomen door medewerkers.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Vastellen identiteit</h3>
                    <p className='text-lg font-light' >Om te kunnen vaststellen dat het verzoek wordt gedaan door de juiste persoon vragen wij je om eerst je identiteit vast te stellen. Het gaat immers om jouw gegevens die niet zomaar in iemand anders handen mogen vallen.</p>
                    <p className='text-lg font-light' >Je kan hiervoor langskomen op ons kantoor in Groningen. Vergeet niet een&nbsp;<strong>geldig legitimatiebewijs</strong> mee te nemen. Deze wordt door een van onze medewerkers gecontroleerd, maar er wordt geen kopie gemaakt. Mocht je niet in staat zijn af te reizen naar ons kantoor, neem dan contact met ons op per e-mail&nbsp;<a className='text-themeGreen text-lg hover:underline' href="mailto:klantenservice@sunnygreen.nl">(klantenservice@sunnygreen.nl)</a> of per telefoon via 085 401 7000.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Termijn</h3>
                    <p className='text-lg font-light' >enie.nl hanteert na ontvangst van het verzoek en het controleren van de identiteit een termijn van 4 weken, tenzij het verzoek (te) ingewikkeld is. In dat geval wordt de termijn verlengd tot 8 weken. In het geval van de verlenging van de termijn word je tijdig ge&iuml;nformeerd.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Cookies</h3>
                    <p className='text-lg font-light' >enie.nl plaatst, alleen met jouw toestemming, cookies in je webbrowser.&nbsp;<strong><a className='text-themeGreen text-lg hover:underline' href="https://www.enie.nl/cookie-statement/">Klik hier</a></strong> voor ons cookie statement en wat wij met deze gegevens doen.</p>
                    <h3 className='text-xl lg:text-3xl font-medium'>Toepassing en wijzigingen</h3>
                    <p className='text-lg font-light' >Dit privacy statement en onderliggende verklaringen zijn van toepassing op enie.nl en haar dienstverlening en is geldig vanaf september 2019.</p>
                    <p className='text-lg font-light' >Als je de aan ons verstrekte persoonsgegevens wilt bijwerken kan je contact met ons opnemen per e-mail&nbsp;<a className='text-themeGreen text-lg hover:underline' href="mailto:klantenservice@sunnygreen.nl">(klantenservice@sunnygreen.nl)</a> of per telefoon via 085 401 7000.</p>
                    <p className='text-lg font-light' >enie.nl heeft het recht om het privacy statement te wijzigen. Wij adviseren je om regelmatig het privacy statement te controleren.</p>
                    <p className='text-lg font-light' >Dit privacy statement is in overeenstemming met de vereisten van de AVG opgesteld en is voor het laatst gewijzigd op oktober 2020.</p>

                </div >
            </div>
        </Layout >
    )
}

export default Index