import React from 'react'
import BigImgCard from '../../cards/BigImgCard'
import ProcessLayout from '../../common/ProcessLayout'
import SpecCard from '../../common/SpecCard'
import Layout from '../../Layout'
import { AiOutlineRight } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import { GrFormCheckmark } from 'react-icons/gr'
import News from '../../common/News'

const Producten = () => {
  const img =
    'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2916&q=80'
  return (
    <Layout
      customHeight={'min-h-[20rem]  lg:min-h-[28rem]  max-h-[50vh]'}
      noHero
      img="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2916&q=80"
    >
      <div className="flex items-center justify-center min-h-[16rem] z-[999]">
        <h1 className="text-white z-[9999] text-[5vw] md:text-[4vw] font-[300]">
          De producten van Sunnygreen
        </h1>
      </div>
      <div className="container mt-[8rem] sm:mt-20 md:mt-[12rem] flex flex-col ">
        <div className="flex items-center md:space-x-20 min-h-[32rem] sm:min-h-[28rem] md:min-h-[22rem] h-[18rem]">
          <div className="min-h-full md:inline hidden w-6 bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>
          <div className="flex flex-col gap-y-5">
            <h2 className="font-[400] text-3xl lg:text-5xl">
              Zonne-energie opwekken met een goed gevoel
            </h2>
            <p className="font-[100] text-lg">
              De partners en fabrikanten waar we mee samenwerken hebben een
              grote impact op de maatschappij en het klimaat. Daarom zijn we in
              elke productkeuze uiterst selectief. Zo geniet je bij Sunnygreen,
              naast natuurlijk de beste garanties, opbrengst en levensduur,
              áltijd van producten van leveranciers met{' '}
              <strong className="font-semibold">B Corp DNA</strong>. Dus;
              duurzame en circulaire productie, eerlijke en veilige
              werkomstandigheden en een positieve impact op directe en indirecte
              omgeving.
            </p>
            <p className="font-[100] text-lg">
              Op deze pagina duiken we kort in de techniek van onze producten en
              lees je alles wat je verder wilt weten; van de garanties tot aan
              de CO₂-uitstoot tijdens de productie. Zo weten jij en wij altijd
              zeker dat we op de best mogelijke manier zonne-energie opwekken.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="font-normal text-3xl md:text-4xl">
            Onze productpartners
          </h1>
          <img
            className="lg:max-w-[900px]"
            src="https://www.enie.nl/wp-content/uploads/2022/12/partners-enie.jpg"
            alt=""
          />
        </div>

        <div>
          {[
            {
              title: `Zakelijk zonnepanelen leasen`,
              content: [
                `Een totaaloplossing`,
                `Met MKB ZonneLeasen kies je voor een moderne, duurzame energievoorziening. Daar hoef je geen cent voor te investeren. Je bent altijd zeker van service, onderhoud, garanties, verzekering en financiering.`,
                `Met de combinatie van zonnepanelen, een laadpaal en accu’s ben je gegarandeerd goedkoper of kostenneutraal uit. Een win-win. Het is één van de concepten waarmee we zonnepanelen zakelijk aantrekkelijk maken.`,
              ], 
              btns: [],
              img: `	https://www.enie.nl/wp-content/uploads/2020/09/200904_4_portret_werkveld_enie_web.jpg`,
            },
            {
              title: `Slim en onafhankelijk`,
              content: [
                `Heb je een wagenpark met elektrische auto’s en wil je graag iets extra’s bieden aan je werknemers? Met zonne-energie van eigen dak ben je 100% in-control. Zakelijk zonnepanelen leasen betekent op een reguliere werkdag energie opwekken én efficiënt inzetten. Is er meer opgewekt dan je hebt verbruikt? Dan sla je de energie op in accu’s – de thuisbatterij- om het te gebruiken wanneer de zon niet schijnt.`,
                `Daarnaast geniet je van alle voordelen van lease:sunnygreen.nl blijft gedurende de lease overeenkomst verantwoordelijk voor reparaties, onderhoud en garanties. Wel zo prettig.`,
              ],
              btns: [],
              img: `https://www.enie.nl/wp-content/uploads/2022/12/screenshot-2022-12-12-at-090746.png`,
            },
          ].map((x, y) => (
            <BigImgCard data={x} i={y} />
          ))}
        </div>

        <div className="flex items-center md:space-x-20 mt-20 w-full justify-center h-[85vh]">
          <div className="min-h-full md:inline hidden  w-3 bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>
          <div className="flex flex-col gap-y-5">
            <h2 className="font-[400] text-3xl lg:text-5xl">
              Hier komen onze producten vandaan
            </h2>
            <p className="font-[100] text-lg">
              Als B Corp staan we voor volledige transparantie. In ons Climate
              Action Report lees je met welke fabrikanten we samenwerken.
              Hieronder zie je waar onze producten vandaan komen en welke reis
              ze afleggen tot de daken van de klanten.
            </p>
            <img
              className="max-w-[400px] sm:max-w-[600px] lg:max-w-[900px]"
              src="	https://www.enie.nl/wp-content/uploads/2021/01/source-map-supply-chain-1-1600x825.jpg"
              alt=""
            />
          </div>
        </div>

        <ProcessLayout
          steps={4}
          data={{
            steps: [
              {
                title: `Van grondstoffen tot producten`,
                text: `Grondstoffen van over de hele wereld worden in verschillende fabrieken in het oosten van China verwerkt tot eindproducten.`,
              },
              {
                title: `De oversteek`,
                text: `Deze producten komen samen in de haven van Shanghai en worden op grote containerschepen naar Rotterdam verscheept.`,
              },
              {
                title: `Klaar voor actie`,
                text: `We slaan de producten op in ons magazijn in Rosmalen. Hier liggen ze klaar om per vrachtwagen te worden vervoerd naar de verschillende installateurs door heel Nederland.`,
              },
            ],
          }}
        />

        <div className="flex items-start lg:items-center mt-6 mx-auto lg:max-w-[900px] lg:justify-center flex-col gap-y-6">
          <h2 className="text-3xl lg:text-4xl font-normal">Onze omvormers</h2>
          <p className="font-[100] text-lg">
            De omvormer vormt het hart van de installatie. Het zorgt ervoor dat
            de energie uit de zonnepanelen omgevormd wordt naar bruikbare
            stroom. Vanwege deze essentiële rol zijn wij kritisch in het
            keuzeproces van de juiste leverancier. De grootte en het gewicht van
            de omvormer zijn afhankelijk van het aantal zonnepanelen. Hieronder
            de specificaties voor een systeem van 12 zonnepanelen.
          </p>
        </div>

        <div className="flex flex-col w-full mt-4 gap-y-8 max-w-[900px] mx-auto items-center justify-center">
          {[
            {
              img: 'https://www.enie.nl/wp-content/uploads/2021/11/growatt-tl-xe-serie.jpg',
              title: 'Growatt omvormer',
              afm: '27,1 x 26,7 x 14,2 cm',
              gew: '8,8 kg',
              antaldb:
                'Stil (minder dan 25dB) doordat er geen mechanische koeling is (natuurlijke koeling via convectie).',
              prod: '10 jaar Download de product sheet',
            },
            {
              img: 'https://www.enie.nl/wp-content/uploads/2022/12/enphase-568x568.png',
              title: 'Enphase micro-omvormer (parallel geschakeld)',
              afm: '21,2 x 17,5 mm x 3,2 cm',
              antaldb:
                'Stil (minder dan 25dB) en geen ventilatoren (natuurlijke koeling via convectie).',
              prod: '25 jaar',
              gew: '1,08 kg',
            },
          ].map(({ title, img, afm, antaldb, prod, gew }) => (
            <SpecCard
              img={img}
              title={title}
              afm={afm}
              antaldb={antaldb}
              prod={prod}
              gew={gew}
            />
          ))}
        </div>

        <div className="flex flex-col lg:items-center max-w-[900px] mx-auto mt-20 lg:justify-center gap-y-6">
          <h2 className="font-normal text-4xl">Montagemateriaal</h2>
          <p className="font-[100] text-lg leading-8">
            Het montagemateriaal is natuurlijk net zo belangrijk als alle andere
            onderdelen van het zonne-energiesysteem. We hebben de materialen
            uitvoerig getest op kwaliteit, duurzaamheid en weersinvloeden. Voor
            schuine daken maken wij gebruik van het merk Esdec ClickFit EVO. In
            het geval van platte daken werken wij met FlatFix Fusion van
            dezelfde leverancier. Al het materiaal heeft een garantie van 20
            jaar.
          </p>
          <img
            src="	https://www.enie.nl/wp-content/uploads/2019/02/schermafbeelding-2019-02-19-om-12-11-05-1200x335.png"
            alt=""
          />
        </div>

        <div className="flex flex-col mt-20  lg:items-center gap-y-5 lg:justify-center mx-auto max-w-[900px]">
          <h2 className="font-normal text-4xl lg:pb-6">Over de fabrikanten</h2>
          {[
            {
              img: 'https://www.enie.nl/wp-content/uploads/2022/12/1569497547-jinko-solar-logo1-1-568x194.png',
              para: 'Het bedrijf werd al in 1977 opgericht en geldt als een echte zonne-energiepionier. Wij werken met de zonnepanelen van de marktleider op het gebied van innovatie in de zonne-energiemarkt. Met zonnepanelen van JinKo Solar geniet je van de perfecte balans tussen betrouwbaarheid en een goede prijs. De zonnepanelen kunnen zowel particulier als zakelijk geplaatst worden. Met 25 jaar vermogensgarantie ben je verzekerd van het optimale profijt uit zonnepanelen op de korte en lange termijn.',
            },
            {
              img: 'https://www.enie.nl/wp-content/uploads/2022/12/enphase-logo-568x297.png',
              para: 'Enphase is een grote, relatief nieuwe speler op de markt van omvormers. Het bedrijf is gevestigd in de Verenigde Staten. Met ruim 52 miljoen geïnstalleerde micro-omvormers in meer dan 145 landen is de kans groot dat een parallel systeem zonnepanelen is gebaseerd op de Enphase technologie.  De omvormers van Enphase zijn inmiddels compatibel met vrijwel elk type zonnepanelen, en helemaal klaar voor de toekomst. De bekroonde technologie gaat namelijk naadloos samen met de slimme batterij.',
            },
            {
              img: '	https://www.enie.nl/wp-content/uploads/2019/02/growatt-logo-568x138.png',
              para: 'Het bedrijf Growatt is een van de grootste fabrikanten van omvormers in China. In totaal zijn er wereldwijd (en in Nederland) duizenden omvormers in huisinstallaties geplaatst en hebben ze een zeer goede reputatie. De betrouwbaarheid en het rendement van de omvormers zijn van een zeer hoog niveau. Zo is de Growatt 5000MTL-S in de Photon test voor zijn rendement met het label A bekroond.',
            },
            {
              img: '	https://www.enie.nl/wp-content/uploads/2019/02/esdec-logo-e1550578039571.png',
              para: 'Deze producent van professioneel montagemateriaal is in 2004 opgericht. Inmiddels is het montagemateriaal al toegepast op meer dan 4.000.000 zonnepanelen wereldwijd. Ook in Nederland is het één van de grootste producenten van zonnepaneel montagesystemen. ClickFit en FlatFix zijn uitvoerig getest door gerenommeerde testinstituten zoals DNW (windtunnel), BRE en zijn onder andere gecertificeerd volgens het Nederlands bouwbesluit en de NEN 7250 door BDA/KIWA.',
            },
          ].map(({ img, para }) => (
            <div className="flex flex-col items-center justify-center gap-y-10">
              <img src={img} alt="" className="max-w-[300px]" />
              <p className="font-[100] leading-8">{para}</p>
            </div>
          ))}
        </div>

        <div className="flex mt-20 items-center w-full space-x-14 min-h-[25rem] md:min-h-[20rem] md:h-[22rem]  mx-auto">
          <div className="min-h-full md:inline hidden w-2 bg-gradient-to-b from-themeDarkGreen to-themeGreen"></div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-3xl lg:text-4xl">B Corp en Holland Solar</h2>
            <div className="flex flex-col lg:flex-row space-x-10">
              {[
                {
                  img: 'https://www.enie.nl/wp-content/uploads/2021/01/2018-b-corp-logo-black-l-205x300.png',
                  desc: 'Sunnygreen is B Corp gecertificeerd. Een internationaal certificaat voor sociale ondernemingen die niet alleen de beste van de wereld willen zijn maar vooral ook voor de wereld. Lees meer over B Corp op onze B Corp pagina.',
                },
                {
                  img: 'https://www.enie.nl/wp-content/uploads/2021/01/logo-holland-solar-juni-2018-290x300.png',
                  desc: 'Wij zijn lid van de brancheorganisatie Holland Solar om samen met andere leden de potentie van zonne-energie zo veel en zo goed mogelijk te benutten.',
                },
              ].map(({ img, desc }) => (
                <div className="flex items-center space-x-4 max-w-[500px]">
                  <img src={img} alt="" className="max-w-[150px]" />
                  <p className="font-[100] text-lg leading-8">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col min-h-screen justify-center">
          <News />
        </div>
      </div>

      <div className="bg-[#f8f8f8] py-10 mt-10">
        <div className="container px-10 gap-x-3 mx-auto  min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center place-items-center w-full">
          <div className="flex bg-white relative flex-col px-5 py-5 gap-y-5 shadow-xl rounded-lg max-w-[330px] min-h-[430px] col-span-1  w-full">
            <h2 className="text-3xl">Klant beoordelingen</h2>
            <div className="flex items-center gap-x-1">
              {[1, 2, 3, 4].map((star) => (
                <AiFillStar className="text-[#f4a81d] font-bold" />
              ))}
              <AiOutlineStar className="text-[#f4a81d] font-bold" />
            </div>
            <p>
              <strong>Meer dan 20.000 huishoudens/strong>
            </p>
            <p className="font-[100] text-sm">
              We streven naar een wereld zonder fossiele brandstoffen. Daarom
              zijn we trots op al die duizenden huishoudens die samen met ons de
              stap al hebben gezet naar een duurzaam Nederland. Zet jij samen
              met ons ook deze stap?
            </p>
            <button className="bg-gray-100 flex items-center gap-x-2 justify-end text-md text-right absolute bottom-0 rounded-b-lg left-0 w-full text-[#f4a81d] py-3 px-5">
              Vraag een gratis voorstel aan
              <span>
                {' '}
                <AiOutlineRight />{' '}
              </span>
            </button>
          </div>

          <div className="flex bg-white relative flex-col px-5 py-5 gap-y-3 shadow-xl rounded-lg max-w-[330px] min-h-[430px] col-span-1  w-full">
            <h2 className="text-3xl">Het beste voorstel</h2>
            <p className="font-[100] text-sm">
              Er zijn veel aanbieders van zonnepanelen. Wat maakt Sunnygreen zo
              uniek?
            </p>

            <div className="flex flex-col gap-y-1">
              {[
                {
                  title: 'Jarenlange ervaring',
                },
                {
                  title: 'kWh-garantieg',
                },
                {
                  title: 'B Corp',
                },
                {
                  title: 'Uniek adviesconcept',
                },
                {
                  title: 'Binnen drie minuten je prijs',
                },
              ].map((item) => (
                <div className="gap-x-2 flex items-center">
                  <GrFormCheckmark />
                  <h4 className="text-sm font-[100]">{item.title}</h4>
                </div>
              ))}
            </div>

            <button className="bg-gray-100 flex items-center gap-x-2 justify-end text-md text-right absolute bottom-0 rounded-b-lg left-0 w-full text-[#f4a81d] py-3 px-5">
              Vraag een gratis voorstel aan
              <span>
                {' '}
                <AiOutlineRight />{' '}
              </span>
            </button>
          </div>

          <div className="flex  bg-white relative flex-col px-5 py-5 gap-y-3 shadow-xl rounded-lg max-w-[330px] min-h-[430px] col-span-1  w-full h-full">
            <h2 className="text-3xl">Gratis voorstel</h2>

            <p>
              Elke situatie is anders en daarom verdient iedereen een .
              <strong>persoonlijk voorstel</strong>
            </p>
            <p className="font-[100] text-sm">
              Onze <strong>Zonadviseurs</strong> zitten klaar en kunnen niet
              wachten om voor je aan de slag te gaan. Vraag een voorstel aan en
              we nemen binnen één werkdag contact met je op.
            </p>
            <div className="rounded-lg border-2  border-gray-300 flex items-center justify-center ">
              <input
                type="text"
                className="outline-none bg-transparent py-2 "
              />
              <button className="btn-bg py-[10px] px-2 max-w-full text-sm  rounded-lg  text-white ">
                AANVRAGEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Producten
