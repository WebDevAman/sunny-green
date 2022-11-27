import Layout from '../Layout'
import React from 'react'
import { BsMessenger, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_6_web.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-3xl lg:text-6xl max-w-[50rem] mx-auto text-center text-white font-light">
                    Neem contact met ons op
                </h2>
                <h2 className="text-xl lg:text-3xl text-white font-light">
                    We zitten voor je klaar
                </h2>
            </div>
            <div className="max-w-[70rem] mx-auto px-4 lg:pt-40 flex flex-col gap-6 lg:gap-12">

                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl lg:text-4xl max-w-[50rem]  font-light">
                        Direct antwoord op je vraag?
                    </h2>
                    <p className='text-base lg:text-lg tracking-wide font-light'>
                        Kom je ergens niet uit of werkt iets volgens jou niet helemaal naar behoren?Geen wolkje aan de lucht, we zoeken het voor je uit.We kunnen je het snelst helpen via onze directe chat (rechtsonder op deze pagina), Facebook Messenger of via WhatsApp op ons algemene telefoonnummer +31 (0)642237360.
                    </p>
                    <a href='https://wa.me/0642237360' target={'_blank'} rel='noreferrer' className='flex  text-white bg-green-500 px-5 rounded-md max-w-[14rem] justify-center hover:opacity-90 p-3 items-center gap-3'>
                        <BsWhatsapp className='text-2xl' />
                        <p>WhatsApp</p>
                    </a>
                    <button className='flex  text-white bg-blue-600 px-5 rounded-md max-w-[14rem] justify-center hover:opacity-90 p-3 items-center gap-3'>
                        <BsMessenger className='text-2xl' />
                        <p>Messenger</p>
                    </button>
                </div>
                <div className="flex gap-6 pb-20  lg:gap-12">
                    <div className="min-h-full bg-gradient-to-b from-themeGreen to-themeDarkGreen w-4">
                    </div>
                    <div className="flex flex-col py-4 gap-6">

                        <h2 className="text-2xl lg:text-4xl max-w-[50rem]  font-light">
                            Andere contactmogelijkheden
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex flex-col gap-6">
                                <p className="text-base lg:text-lg tracking-normal font-light">
                                    Heb je vragen over je zonne-installatie of het btw-teruggave proces? Vul dan ons serviceformulier in.
                                </p>
                                <p className="text-base lg:text-lg tracking-normal">
                                    Bezoekadres:
                                </p>
                                <p className="text-base lg:text-lg tracking-normal font-light">
                                    Diepenhorstlaan 2Z006<br />
                                    2288ew Rijswijk
                                </p>

                                <p className="text-base lg:text-lg tracking-normal">
                                    Postadres:
                                </p>
                                <p className="text-base lg:text-lg tracking-normal font-light">
                                    Diepenhorstlaan 2Z006<br />
                                    2288ew Rijswijk
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">

                                <p className="text-base lg:text-lg tracking-normal">
                                    Openingstijden:
                                </p>
                                <p className="text-base lg:text-lg tracking-normal font-light">
                                    Maandag t/m donderdag: 08:30 tot 18:00.<br />
                                    Vrijdag: 08:30 tot 17:00 uur.<br />
                                </p>


                                <p className="text-base lg:text-lg tracking-normal font-light">
                                    Bel ons: 0642237360<br />

                                    Of mail onze klantenservice: klantenservice@sunnygreen.nl<br />
                                    Voor het snelste antwoord kies je hier rechts voor chat of stuur je ons een berichtje op WhatsApp of Facebook Messenger.<br />
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </Layout >
    )
}

export default Contact