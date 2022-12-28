
import Layout from '../Layout'
import React from 'react'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import BigImgCard from '../cards/BigImgCard'
import { Link } from 'react-router-dom'
import ThemeButton from '../common/ThemeButton'
import News from '../common/News'
import Impact from '../common/Impact'
import ProcessLayout from '../common/ProcessLayout'
import List from '../common/List'

const Bcorp = () => {
    return (
      <Layout
        noHero
        img="https://www.enie.nl/wp-content/uploads/2021/02/b-corp-mountains-enienl.jpg"
      >
        <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[50vh] lg:min-h-[30rem] justify-center z-10 relative gap-6">
          <h2 className="text-3xl lg:text-6xl max-w-[50rem] mx-auto text-center text-white font-light">
            Business as a force for good
          </h2>
        </div>

        <div className="max-w-[80rem] mx-auto  px-4 lg:pt-40 flex flex-col gap-6 lg:gap-12">
          <div className="py-4 lg:py-10"></div>
          <img
            src="https://www.enie.nl/wp-content/uploads/2022/03/sustainability-report-enienl-enie-south-africa-min.png"
            alt="img"
            className="w-full object-cover h-full rounded-3xl overflow-hidden select-none transition-all duration-1000"
          />
        </div>
        <Impact />

        <div className="max-w-[80rem] mx-auto px-4 lg:pt-12 flex flex-col gap-6 lg:gap-12">
          <div className="flex gap-4 pt-8 lg:gap-12">
            <div className="min-h-full px-1 bg-gradient-to-b from-themeGreen to-themeDarkGreen"></div>
            <div className="flex max-w-[60rem] lg:ml-[10%] flex-col  py-6 gap-8">
              <h2 className="text-2xl lg:text-4xl max-w-[50rem] font-medium">
                Hier komen onze producten vandaan
              </h2>
              <p className="text-base lg:text-lg font-light">
                Als B Corp staan we voor volledige transparantie. In het Impact
                Report heb je kunnen lezen met welke fabrikanten we samenwerken.
                Hieronder zie je waar onze producten vandaan komen en welke reis
                ze afleggen tot de daken van de klanten.
              </p>
              <img
                src="https://www.enie.nl/wp-content/uploads/2021/01/source-map-supply-chain-1-992x511.jpg"
                alt="img"
              />
            </div>
          </div>
          <ProcessLayout
            data={{
              title: '',
              steps: [
                {
                  title: `Van grondstoffen tot producten`,
                  text: `	
Grondstoffen van over de hele wereld worden in verschillende fabrieken in het oosten van China verwerkt tot eindproducten.`,
                },
                {
                  title: `De oversteek`,
                  text: `Deze producten komen samen in de haven van Shanghai en worden op grote containerschepen naar Rotterdam verscheept.`,
                },
                {
                  title: `	Klaar voor actie`,
                  text: `We slaan de producten op in ons magazijn in Rosmalen. Hier liggen ze klaar om per vrachtwagen te worden vervoerd naar de verschillende installateurs door heel Nederland.`,
                },
              ],
            }}
          />

          {[
            {
              title: `Zonne-energie opwekken met een goed gevoel`,
              content: [
                `Alleen de meest duurzame producten`,
                `De partners en fabrikanten waar we mee samenwerken hebben een grote impact op de maatschappij en het klimaat. Daarom zijn we kritisch in elke productkeuze. We kiezen producten die het langst bruikbaar blijven, recyclebaar zijn en in eerlijke en veilige werkomstandigheden zijn geproduceerd. Zo zijn klanten niet alleen zeker van de beste kwaliteit, maar ook van producten die het milieu minimaal belasten.`,
              ],
              btns: [
                <Link to="/over-sunnygreen-nl">
                  <ThemeButton text="Onze productkeuzes" grayBtn />
                </Link>,
              ],
              img: `https://www.enie.nl/wp-content/uploads/2020/09/200904_6_portret_werkveld_enie_web.jpg`,
            },
          ].map((x, y) => (
            <BigImgCard data={x} i={y} />
          ))}
          <div className="py-4 lg:py-10"></div>
        </div>
      </Layout>
    )
}

export default Bcorp