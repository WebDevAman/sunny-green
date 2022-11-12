import React, { useEffect } from 'react'
import Layout from '../../Layout'
import { useRecoilValue } from 'recoil'
import { BsChevronDown } from 'react-icons/bs'
import { GrUserWorker } from 'react-icons/gr'
import { FaSolarPanel } from 'react-icons/fa'
import { AiOutlineMobile } from 'react-icons/ai'
import { SiConvertio } from 'react-icons/si'
import { atomImageFromGoogle } from '../../atoms'
import { Link, useNavigate } from 'react-router-dom'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const FormAndImage = () => {
    const leftSideImage = useRecoilValue(atomImageFromGoogle)
    const [data, setData] = React.useState({
        no_of_panels: 1,
        appointment_type: 'Videogesprek',
        post_code: leftSideImage.post_code,
        huisnummer: leftSideImage.huisnummer,
        own_the_house: false,
    })
    const [showLeft, setShowLeft] = React.useState(false)
    const navigate = useNavigate()
    const [show, setShow] = React.useState(1)
    const handleNext = () => {
        setShow(show < 3 ? show + 1 : show)
    }
    useEffect(() => {
        if (!leftSideImage.isImage) {
            navigate('/')
        }
    }, [leftSideImage])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [show]);
    return (
        <Layout noNav>
            <div style={{ boxShadow: '1px -1px 21px -7px #999' }} className='grid  md:max-w-2xl lg:max-w-[1550px] my-6 shadow-lg border mx-3 rounded-3xl overflow-hidden sm:mx-auto lg:pl-4 grid-cols-1 lg:grid-cols-9 gap-6'>

                <div className="lg:hidden flex justify-center gap-1 py-3">
                    {[1, 2, 3].map(num => (
                        <div key={num} className={`${show === num ? 'to-themeGreen from-themeDarkGreen text-white ' : 'bg-white text-black'} bg-gradient-to-r w-7 h-7 flex text-xs items-center cursor-pointer justify-center rounded-full`}>
                            {num}
                        </div>
                    ))}
                </div>
                <div className="flex col-span-1 lg:col-span-5 relative lg:overflow-hidden">
                    <div className="hidden lg:flex flex-col justify-center gap-3 pr-4">
                        {[1, 2, 3].map(num => (
                            <div key={num} onClick={() => setShow(num)} className={`${show === num ? 'to-themeGreen from-themeDarkGreen text-white ' : 'bg-white text-black'} bg-gradient-to-r w-9 h-9 flex items-center cursor-pointer justify-center rounded-full`}>
                                {num}
                            </div>
                        ))}
                    </div>
                    {show === 3 ?
                        <div className='flex w-full lg:bg-gray-100  items-center justify-center flex-col gap-5 px-3'>
                            <div className="flex lg:hidden flex-col gap-3">
                                <p className="text-base font-light">
                                    Definitieve offerte opstellen
                                </p>

                                <h2 className="text-2xl lg:text-3xl font-semibold">
                                    Hoe kunnen we je bereiken?
                                </h2>
                                <div className="h-[5px] max-w-[6rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                            </div>
                            <div className="border lg:hidden flex flex-col p-6 relative rounded-3xl border-themeGreen">
                                <p className="text-lg font-medium">
                                    Onze adviseurs helpen je graag verder
                                </p>
                                <p className="text-base font-light pt-2 max-w-[95%]">
                                    Het voorstel is uiteraard vrijblijvend en nog niet definitief. Om een definitief voorstel te maken nemen we graag contact met je op.
                                </p>

                            </div>
                            <ThirdPageTotalChart leftSideImage={leftSideImage} data={data} />
                        </div>

                        :
                        <div className="bg-gray-100 mt-4 lg:h-[80vh] lg:mt-0 h-[13rem] w-full">
                            <img src={leftSideImage.img || 'https://media.tenor.com/64UaxgnTfx0AAAAC/memes-loading.gif'} alt='img' className='w-full object-cover max-h-[13rem] lg:max-h-[85vh] object-center md:aspect-1.8 lg:min-h-[85vh]' />
                        </div>
                    }
                    {show === 1 ?
                        <div style={{ boxShadow: '1px -1px 21px -7px #999' }} className="absolute group max-w-[15rem] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-16 -top-5 border-t shadow-xl lg:top-4 gap-4 flex rounded-[35px] bg-white w-full">
                            <ButtonIcon setShowLeft={setShowLeft} showLeft={showLeft} />

                            <div className="flex justify-center flex-col">
                                <p>{leftSideImage.post_code}</p>
                                <p>Huisnummer: {leftSideImage.huisnummer}</p>
                                {showLeft &&
                                    <Link to='/' className='pt-2 underline'>
                                        Modify?
                                    </Link>
                                }
                            </div>
                        </div>
                        :
                        show === 2 ?
                            <div style={{ boxShadow: '1px -1px 21px -7px #999' }} className={`absolute group left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-20 -top-5 border-t shadow-xl lg:top-8 gap-4 flex rounded-[45px] bg-white w-full ${showLeft ? 'max-w-[90%] md:max-w-md' : 'max-w-[90%] md:max-w-[80%]  '}`}>
                                <ButtonIcon setShowLeft={setShowLeft} showLeft={showLeft} />
                                <div className={`${showLeft ? 'pb-4' : 'pb-0'} flex pr-6 justify-center w-full flex-col`}>
                                    <div className="flex justify-between items-center ">
                                        <div className={`${showLeft ? 'flex flex-col gap-1 -ml-5 pt-6' : 'flex flex-col gap-1 '}`}>
                                            <p className='text-sm md:text-base'>{leftSideImage.post_code}</p>
                                            <p className='text-sm md:text-base'>Huisnummer: {leftSideImage.huisnummer}</p>

                                        </div>
                                        {!showLeft &&
                                            <div className=" hidden  md:flex items-center gap-2">
                                                <span className="text-sm font-light">
                                                    Koopbedrag na btw-teruggave:
                                                </span>
                                                <span className='text-base font-medium opacity-90'>
                                                    € {(((data.no_of_panels * 549).toFixed(2) - ((data.no_of_panels * 549) * 0.21))).toFixed(2)}</span>
                                            </div>
                                        }
                                    </div>
                                    {showLeft &&
                                        <div className='-ml-5'>
                                            <div className="h-[4px] my-2 max-w-[6rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                                            <p className="text-medium">
                                                ZonneKopen
                                            </p>

                                            <div className="grid py-2 grid-cols-2 w-full">
                                                <div className="flex flex-col gap-2">
                                                    <div className='flex items-center gap-2'>
                                                        <FaSolarPanel />
                                                        <span className='text-xs opacity-90'>Zonnepanelen</span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <SiConvertio />
                                                        <span className='text-xs opacity-90'>Omvormer</span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <AiOutlineMobile />
                                                        <span className='text-xs opacity-90'>Monitoring via app</span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <GrUserWorker />
                                                        <span className='text-xs opacity-90'>Installatie</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col text-right gap-2">
                                                    <span className='text-xs opacity-90'>{data.no_of_panels}x</span>
                                                    <span className='text-xs opacity-90'>Serieel</span>
                                                    <span className='text-xs opacity-90'>Inclusief</span>
                                                    <span className='text-xs opacity-90'>Inclusief</span>
                                                </div>
                                            </div>
                                            <div className="grid py-2 mt-2 border-t pt-2 grid-cols-2 w-full">
                                                <div className="flex flex-col gap-2">
                                                    <div className='flex items-center gap-2'>
                                                        <span className='text-xs opacity-90'>Subtotaal</span>
                                                    </div>

                                                </div>
                                                <div className="flex flex-col text-right gap-2">
                                                    <span className='text-xs opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <PayBackTime data={data} />

                                            <div className="grid py-2 mt-2 border-t pt-2 grid-cols-2 w-full">
                                                <div className="flex flex-col gap-2">
                                                    <div className='flex items-center gap-2'>
                                                        <span className='text-xs opacity-90'>Totaal incl. btw</span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <span className='text-xs opacity-90'>Btw-teruggave </span>
                                                    </div>
                                                    <div className='flex items-center gap-2'>
                                                        <span className='text-xs font-medium opacity-90'>Totaal na btw-teruggave </span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col text-right gap-2">
                                                    <span className='text-xs opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
                                                    <span className='text-xs opacity-90'>€ {((data.no_of_panels * 549) * 0.21).toFixed(2)}</span>
                                                    <span className='text-xs font-medium opacity-90'>€ {(((data.no_of_panels * 549).toFixed(2) - ((data.no_of_panels * 549) * 0.21))).toFixed(2)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                            :
                            ''

                    }
                </div>
                <div className=" col-span-1 lg:col-span-4 flex w-full items-center">
                    {show === 1 ?
                        <StepOne data={data} handleNext={handleNext} setData={setData} />
                        : show === 2 ?
                            <StepTwo show={show} setShow={setShow} data={data} handleNext={handleNext} setData={setData} />
                            :
                            <StepThree data={data} setShow={setShow} handleNext={handleNext} setData={setData} />

                    }
                </div>
            </div>
        </Layout>
    )
}

const ButtonIcon = ({ showLeft, setShowLeft }) => {
    return (
        <div onClick={() => setShowLeft(!showLeft)} className={`${showLeft ? 'rotate-180 w-14 h-14 -ml-5 -mt-5' : 'rotate-0 h-[70px] w-[70px] aspect-square '} transition-all duration-300 aspect-square shadow-md border-4 border-white cursor-pointer rounded-full from-themeDarkGreen flex items-center justify-center text-white text-3xl to-themeGreen bg-gradient-to-r`}>
            <BsChevronDown />
        </div>
    )
}
const ThirdPageTotalChart = ({ leftSideImage, data }) => {
    const [mobSum, setMobSum] = React.useState(true)
    return (
        <>
            <div style={{ boxShadow: '1px -1px 21px -7px #999' }} className="lg:flex hidden group w-full max-w-xl rounded-3xl p-5 lg:p-8 lg:mt-0 gap-4 sm:rounded-[35px] bg-white">

                <div className="flex gap-3 w-full flex-col">
                    <h3 className="text-xl lg:text-2xl">
                        Alles op een rijtje
                    </h3>
                    <p>{leftSideImage.post_code}</p>
                    <p>Huisnummer: {leftSideImage.huisnummer}</p>
                    <>
                        <div className="h-[4px] my-2 max-w-[6rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                        <p className="text-medium">
                            ZonneKopen
                        </p>

                        <div className="grid py-2 grid-cols-2 w-full">
                            <div className="flex flex-col gap-3">
                                <div className='flex items-center gap-2'>
                                    <FaSolarPanel />
                                    <span className='text-sm opacity-90'>Zonnepanelen</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <SiConvertio />
                                    <span className='text-sm opacity-90'>Omvormer</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiOutlineMobile />
                                    <span className='text-sm opacity-90'>Monitoring via app</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <GrUserWorker />
                                    <span className='text-sm opacity-90'>Installatie</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-right gap-3">
                                <span className='text-sm opacity-90'>{data.no_of_panels}x</span>
                                <span className='text-sm opacity-90'>Serieel</span>
                                <span className='text-sm opacity-90'>Inclusief</span>
                                <span className='text-sm opacity-90'>Inclusief</span>
                            </div>
                        </div>
                        <div className="grid py-2 mt-2 border-t pt-2 grid-cols-2 w-full">
                            <div className="flex flex-col gap-3">
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm opacity-90'>Subtotaal</span>
                                </div>

                            </div>
                            <div className="flex flex-col text-right gap-2">
                                <span className='text-sm opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
                            </div>
                        </div>
                        <PayBackTime data={data} />

                        <div className="grid py-2 mt-2 border-t pt-2 grid-cols-2 w-full">
                            <div className="flex flex-col gap-3">
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm opacity-90'>Totaal incl. btw</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm opacity-90'>Btw-teruggave </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-xs font-medium opacity-90'>Totaal na btw-teruggave </span>
                                </div>
                            </div>
                            <div className="flex flex-col text-right gap-2">
                                <span className='text-sm opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
                                <span className='text-sm opacity-90'>€ {((data.no_of_panels * 549) * 0.21).toFixed(2)}</span>
                                <span className='text-sm font-medium opacity-90'>€ {(((data.no_of_panels * 549).toFixed(2) - ((data.no_of_panels * 549) * 0.21))).toFixed(2)}</span>
                            </div>
                        </div>
                    </>
                </div>
            </div>



            <div style={{ boxShadow: '1px -1px 21px -7px #999' }} className="lg:hidden flex group w-full max-w-xl rounded-3xl p-5 lg:p-8 lg:mt-0 gap-4 sm:rounded-[35px] bg-white">

                <div className="flex  gap-2 w-full flex-col">
                    <h3 className="text-xl lg:text-2xl">
                        Alles op een rijtje
                    </h3>
                    <p>{leftSideImage.post_code}</p>
                    <p>Huisnummer: {leftSideImage.huisnummer}</p>
                    <>
                        <div className="h-[4px] my-2 max-w-[6rem] rounded-sm bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                        <p className={`${mobSum ? 'h-fit py-2  text-base' : 'h-0 py-0 overflow-hidden  text-[1px]'} transition-all duration-300`}>
                            ZonneKopen
                        </p>

                        <div className={`${mobSum ? 'h-fit py-2 ' : 'h-0 py-0 overflow-hidden'} grid grid-cols-2 w-full transition-all duration-300`}>
                            <div className="flex flex-col gap-3">
                                <div className='flex items-center gap-2'>
                                    <FaSolarPanel />
                                    <span className='text-sm opacity-90'>Zonnepanelen</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <SiConvertio />
                                    <span className='text-sm opacity-90'>Omvormer</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <AiOutlineMobile />
                                    <span className='text-sm opacity-90'>Monitoring via app</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <GrUserWorker />
                                    <span className='text-sm opacity-90'>Installatie</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-right gap-3">
                                <span className='text-sm opacity-90'>{data.no_of_panels}x</span>
                                <span className='text-sm opacity-90'>Serieel</span>
                                <span className='text-sm opacity-90'>Inclusief</span>
                                <span className='text-sm opacity-90'>Inclusief</span>
                            </div>
                        </div>

                        <PayBackTime data={data} />
                        <div className="grid py-2 mt-2 border-t pt-2 grid-cols-2 w-full">
                            <div className="flex flex-col gap-3">
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm opacity-90'>Subtotaal</span>
                                </div>

                            </div>
                            <div className="flex flex-col text-right gap-2">
                                <span className='text-sm opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={`${mobSum ? 'h-fit py-2 mt-2 pt-2 border-t' : 'h-0 py-0 overflow-hidden'} grid grid-cols-2 transition-all duration-300 w-full`}>
                            <div className="flex flex-col gap-3">
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm opacity-90'>Totaal incl. btw</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm opacity-90'>Btw-teruggave </span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-xs font-medium opacity-90'>Totaal na btw-teruggave </span>
                                </div>
                            </div>
                            <div className="flex flex-col text-right gap-2">
                                <span className='text-sm opacity-90'>€ {(data.no_of_panels * 549).toFixed(2)}</span>
                                <span className='text-sm opacity-90'>€ {((data.no_of_panels * 549) * 0.21).toFixed(2)}</span>
                                <span className='text-sm font-medium opacity-90'>€ {(((data.no_of_panels * 549).toFixed(2) - ((data.no_of_panels * 549) * 0.21))).toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-center">
                            <div onClick={() => setMobSum(!mobSum)} className={`${mobSum ? 'rotate-180' : 'rotate-0'} h-[70px] w-[70px] aspect-square transition-all duration-300 -mb-16 shadow-md border-4 border-white cursor-pointer rounded-full from-themeDarkGreen flex items-center justify-center text-white text-3xl to-themeGreen bg-gradient-to-r`}>
                                <BsChevronDown />
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    )
}

const PayBackTime = ({ data }) => {
    return (
        <div className="rounded-xl grid grid-cols-2 border border-themeDarkGreen p-2.5">
            <div className="flex flex-col gap-2">
                <p className='text-sm'>Terugverdientijd</p>
                <p className='text-sm'>Jaarlijkse besparing</p>
            </div>
            <div className="flex text-right flex-col gap-2">
                <p className='text-sm'>
                    {((data.no_of_panels * 549) / 1600).toFixed(1)} jaar
                </p>
                <p className='text-sm'>€ {((data.no_of_panels * 549) * .104533).toFixed(2)}</p>
            </div>
        </div>
    )
}
export default FormAndImage