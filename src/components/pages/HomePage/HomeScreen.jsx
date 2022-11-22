import React, { useState, useEffect } from 'react'
import Navbar from '../../Navbar'
import ThemeButton from '../../common/ThemeButton'
import Footer from '../../Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { atomImageFromGoogle } from '../../atoms'
import { BsChevronDown, BsChevronRight } from 'react-icons/bs'
import { Button } from '@material-ui/core'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { FreeMode, Navigation, Pagination } from 'swiper'

const HomeScreen = () => {
    const [data, setData] = useState({})
    const [requested, setRequested] = useState(false)
    const [drop, setDrop] = useState(false)
    const [dropVal, setDropVal] = useState('Toev. ')
    const [img, setImg] = useState('')
    const [imageFromGoogle, setImageFromGoogle] = useRecoilState(atomImageFromGoogle)
    const [error, setError] = useState(false)
    const [inputError, setInputError] = useState({ post_code: false, huisnummer: false })
    const navigate = useNavigate()
    const country = 'netherlands'
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = () => {
        setRequested(true)
        if (data.post_code.length > 1) {
            if (data.huisnummer) {
                setImageFromGoogle({
                    img: `https://true-ortho.int.enie.dev/api/readar/map?zipcode=${data.post_code.toUpperCase()}&house_number=${data.huisnummer}`,
                    post_code: data.post_code,
                    isImage: true,
                    huisnummer: data.huisnummer
                })
                navigate('/configurator')
            } else {
                setInputError({ post_code: false, huisnummer: true })
            }
        } else {
            setInputError({ ...inputError, post_code: true })
        }
    }



    useEffect(() => {
        console.log(data, '-------------> data')
        if (requested) {
            if (data.post_code?.length > 1) {
                setInputError({ ...inputError, post_code: false })
            } else if (data.huisnummer?.length > 1) {
                setInputError({ ...inputError, huisnummer: false })
            } else if (data.huisnummer?.length === 0 || undefined) {
                setInputError({ ...inputError, huisnummer: true })
            } else {
                setInputError({ ...inputError, post_code: true })
            }
        }
    }, [data, requested])
    return (
        <div className='flex flex-col'>
            <Navbar isImg={true} />

            <div
                style={{ background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(https://insolationenergy.in/wp-content/uploads/2021/10/Solar-Panels-in-India-Cost-Installation-Requirements-1-scaled.jpg)` }}
                className="w-full -mt-16 md:-mt-20 flex items-center inset-0 !bg-cover !bg-center py-20 min-h-screen bg-black">
                <div className="container items-center grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
                    <div className="flex flex-col gap-3">
                        <h1 className='text-4xl lg:text-6xl font-light'>Zonne-energie <br /> <span className='leading-normal'>voor iedereen.</span></h1>
                        <h3 className="text-4xl pb-1 lg:pb-8 lg:text-6xl font-medium">
                            Het kan..
                        </h3>
                        <div className="py-[3px] max-w-[6rem] md:max-w-[10rem] bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                        <div className="hidden md:flex max-w-lg 2xl:pr-12 flex-col gap-4">
                            <p className="text-base">
                                Binnen tien jaar kunnen we de zon als energiebron weer op 1 hebben. Een sprong vooruit voor onze aarde, met de slimste, mooiste, sterkste energiebron die er is.
                            </p>
                            <p className="text-base">
                                Iedere grote verandering begint klein. Doe je mee?
                            </p>
                        </div>
                    </div>


                    <div style={{ background: 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2))' }} className="flex border-2 border-white ml-auto flex-col max-w-[400px] gap-4 p-8 rounded-3xl">
                        <h3 className="text-2xl lg:text-3xl font-medium">
                            Bereken binnen 1 minuut jouw voordeel.
                        </h3>
                        <p>
                            Vul je gegevens in en bereken direct je prijs én besparing.


                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            <input autoFocus={error.post_code} value={data.post_code} onChange={handleChange} type='text' id='post_code' className={`p-3 bg-transparent text-white placeholder:text-white outline-none border rounded-md focus:border-gray-100  ${inputError.post_code ? 'border-red-500 ' : 'border-white'}`} placeholder='Postcode' />
                            <input onChange={handleChange} error={inputError.huisnummer} id='huisnummer' className={`p-3 bg-transparent text-white outline-none border rounded-md placeholder:text-white focus:border-gray-100  ${inputError.huisnummer ? 'border-red-500 ' : 'border-white'}`} placeholder='Huisnummer' />

                            <div onClick={() => setDrop(!drop)} className="w-full cursor-pointer flex relative p-[9px] justify-between bg-transparent text-white rounded-md border  border-white items-center focus-within:border-gray-500">
                                <p>{dropVal}</p>
                                <BsChevronDown />
                                {drop &&
                                    <div onClick={() => setDropVal('Geen')} className="absolute border-gray-300  top-[101%] rounded-b-md border-t shadow-2xl border w-full left-0 bg-transparent text-white z-20 flex flex-col">
                                        <div className="w-full p-2">Geen</div>
                                    </div>
                                }
                            </div>
                            <div className="pb-1"></div>
                            <Button disabled={error} onClick={handleSubmit} variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-base col-span-3 !bg-gradient-to-r !py-2.5  !from-themeDarkGreen !to-themeGreen !font-semibold !rounded-full'} >
                                BEREKEN PRIJS
                            </Button>
                        </div>
                        <p className='text-center'>
                            Meer dan 20.000 klanten gingen je voor.
                        </p>
                        <div className="flex mx-auto items-center gap-2">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white">
                                <img src='https://enie.nl.cdn.enie.dev/configurator/assets/img/google.png' alt='google' className='w-5 h-5' />
                            </div>
                            <div className="flex text-yellow-400 text-xl items-center gap-1">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-12 lg:py-20'>


                <div className="lg:grid hidden container  gap-y-12 gap-x-4 overflow-visible border rounded p-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {secondData.map((item, i) => (
                        <CardItem {...item} />
                    ))}
                </div>
                <div className="flex container py-6 border lg:hidden">
                    <CarouselCompo>
                        {secondData.map((item, i) => (
                            <SwiperSlide key={i} className='p-3'>
                                <CardItem isCarousel {...item} />
                            </SwiperSlide>
                        ))}

                    </CarouselCompo>
                </div>

                <div className="flex container py-8 lg:py-12 flex-col gap-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col gap-3 text-left items-start">
                            <p className='text-themeGreen font-medium'>ONS VERHAAL</p>
                            <h3 className="text-2xl pb-1 lg:pb-3 md:text-4xl font-medium">
                                Waarom al meer dan 20.000 <span className='leading-normal'>huishoudens</span> en bedrijven voorsunnygreen.nl kozen.
                            </h3>
                            <p>Wij maken zonne-energie toegankelijk voor iedereen die vandaag wil besparen en mee wil bouwen aan de duurzame wereld van morgen. Daarom geven wij je advies dat helemaal afgestemd is op jouw situatie én leveren we duurzame zonnepanelen met het hoogste rendement. En ook nog eens heel betaalbaar!</p>
                            <div className="py-[3px] w-full max-w-[10rem] bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                        </div>
                        <div></div>
                    </div>
                    <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className='lg:flex hidden'></div>
                        {thirdData.map(({ title, img, text }, i) => (
                            <div key={i} className='flex flex-col gap-4 p-6 rounded-3xl shadow-card'>
                                <img src={img} alt={title} className='w-20' />
                                <p className="text-lg lg:text-xl">{title}</p>
                                <p className="text-sm lg:text-base font-light">{text}</p>
                            </div>

                        ))}
                    </div>
                    <div className="lg:hidden flex">
                        <CarouselCompo>
                            {thirdData.map(({ title, img, text }, i) => (
                                <SwiperSlide key={i} className='p-3'>
                                    <div className='flex flex-col min-h-[300px] gap-4 p-6 rounded-3xl shadow-card'>
                                        <img src={img} alt={title} className='w-20' />
                                        <p className="text-lg lg:text-xl">{title}</p>
                                        <p className="text-sm lg:text-base font-light">{text}</p>
                                    </div>
                                </SwiperSlide>

                            ))}
                        </CarouselCompo>

                    </div>
                </div>

                <BigSection />

                <div className="flex flex-col gap-16 pt-10 lg:pt-16">
                    <div className="flex flex-col gap-5 container">
                        <h2 className='text-lg text-themeGreen md:text-xl'>
                            REVIEWS
                        </h2>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium'>
                            Onze klanten aan het woord
                        </h2>
                        <div className="py-[3px] max-w-[10rem] bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>

                    </div>
                    <div className="w-full px-2">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                540: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 10,
                                },
                                828: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                    spaceBetween: 10,
                                },
                                1308: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                    spaceBetween: 10,
                                },
                                1508: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper !overflow-y-visible carousel_themePagination carousel_themeButton !py-12"
                        >
                            {reviews.map((item, i) => (
                                item.type === 'full' ?
                                    <SwiperSlide key={i} className='!px-2'>
                                        <div style={{ background: `url(${item.img})` }} className='flex group relative !bg-cover !bg-center min-h-[380px] flex-col hover:-translate-y-8 transition-all duration-700 gap-4 p-6 text-white rounded-3xl shadow-card'>
                                            <div className="border-2 px-5 py-2.5 w-fit border-themeGreen rounded-full">
                                                Klantcase
                                            </div>
                                            <p className="text-lg mt-20 lg:text-xl">{item.title}</p>
                                            <div className="min-h-[120px]">
                                                <p className="text-sm lg:text-base font-light">{item.text}</p>
                                            </div>
                                            <div className="absolute group-hover:flex hidden left-1/2 z-10 -bottom-6 -translate-x-1/2">
                                                <ThemeButton text={'lees meer'} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    :
                                    <SwiperSlide key={i} className='!px-2'>
                                        <div className='flex group hover:-translate-y-8 transition-all duration-700 min-h-[380px] flex-col gap-4 p-6 rounded-3xl shadow-card'>
                                            <img src={`https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_Review.svg`} alt={item.title} className='w-20' />
                                            <p className="text-lg lg:text-xl">{item.title}</p>
                                            <div className="min-h-[120px]">
                                                <p className="text-sm lg:text-base font-light">{item.text}</p>

                                            </div>
                                            <div className="flex gap-3">
                                                <img src={item.image} alt={item.title} className='w-7 h-7' />
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium lg:text-base">{item.name}</p>
                                                    <p className="text-sm lg:text-base font-light">{item.last}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
                <div className="pt-6 justify-center w-full flex">
                    <button className='font-medium text-base  hover:bg-themeGreen border-2 border-themeGreen hover:text-white px-3 md:px-6 transition-all duration-500 rounded-full py-3'>
                        Meer ervaringen oversunnygreen.nl lezen

                    </button>

                </div>

                <div className="flex container pt-10 lg:pt-16 flex-col">
                    <div className="hidden lg:grid border border-b-0 grid-cols-1 lg:grid-cols-2">
                        <div className="flex max-w-[40rem] mx-auto p-4 lg:p-16 flex-col gap-6">
                            <p className='text-lg lg:text-xl font-medium text-themeGreen'>VEELGESTELDE VRAGEN</p>
                            <h3 className="text-2xl lg:text-4xl font-medium">
                                Alles wat je moet weten over zonnepanelen
                            </h3>
                            <p className="font-light">
                                Zonnepanelen neem je voor de komende dertig jaar, dus je wilt zeker zijn van je zaak. Bekijk alle vragen die enieanen ons geregeld stellen. Hoef je het niet meer zelf te doen.
                            </p>
                            <div className="mt-auto">
                                <button className='font-medium text-base  hover:bg-themeGreen border-2 border-themeGreen hover:text-white px-3 md:px-6 transition-all duration-500 rounded-full py-3'>
                                    Bekijk de veelgestelde vragen
                                </button>

                            </div>
                        </div>
                        <div className="w-full max-w-[40rem] mx-auto h-full aspect-square">
                            <img src="https://content3.jdmagicbox.com/comp/def_content/solar-panel-dealers/shutterstock-630302630-solar-panel-dealers-2-i44i3.jpg?clr=4d590d" alt="img" className='w-full h-full object-cover object-center select-none' />
                        </div>

                    </div>
                    <div className="lg:hidden grid border border-b-0 grid-cols-1 lg:grid-cols-2">

                        <div className="w-full max-w-[40rem] mx-auto h-full aspect-square">
                            <img src="https://content3.jdmagicbox.com/comp/def_content/solar-panel-dealers/shutterstock-630302630-solar-panel-dealers-2-i44i3.jpg?clr=4d590d" alt="img" className='w-full h-full object-cover object-center select-none' />
                        </div>
                        <div className="flex max-w-[40rem] mx-auto p-4 lg:p-16 flex-col gap-6">
                            <p className='text-lg lg:text-xl font-medium text-themeGreen'>VEELGESTELDE VRAGEN</p>
                            <h3 className="text-2xl lg:text-4xl font-medium">
                                Alles wat je moet weten over zonnepanelen
                            </h3>
                            <p className="font-light">
                                Zonnepanelen neem je voor de komende dertig jaar, dus je wilt zeker zijn van je zaak. Bekijk alle vragen die enieanen ons geregeld stellen. Hoef je het niet meer zelf te doen.
                            </p>
                            <div className="mt-auto">
                                <button className='font-medium text-base  hover:bg-themeGreen border-2 border-themeGreen hover:text-white px-3 md:px-6 transition-all duration-500 rounded-full py-3'>
                                    Bekijk de veelgestelde vragen
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="grid border border-t-0 grid-cols-1 lg:grid-cols-2">
                        <div className="w-full max-w-[40rem] mx-auto h-full aspect-square">
                            <img src="https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Afbeelding_BlokVisie.jpg" alt="img" className='w-full h-full object-cover object-center select-none' />
                        </div>
                        <div className="flex max-w-[40rem] mx-auto p-4 lg:p-16 flex-col gap-6">
                            <p className='text-lg lg:text-xl font-medium text-themeGreen'>
                                GARANTIE OP TOPKWALITEIT
                            </p>
                            <h3 className="text-2xl lg:text-4xl font-medium">
                                Jouw duurzame energie, onze verantwoordelijkheid
                            </h3>
                            <p className="font-light">
                                Iedereen moet kunnen genieten van goedkope, klimaatneutrale en decentrale energie. Elk jaar voorzien we duizenden mensen van advies over zonnepanelen en stappen ook duizenden mensen met ons over.
                            </p>
                            <div className="mt-auto">
                                <button className='font-medium text-base  hover:bg-themeGreen border-2 border-themeGreen hover:text-white px-3 md:px-6 transition-all duration-500 rounded-full py-3'>
                                    Bekijk de veelgestelde vragen
                                </button>

                            </div>
                        </div>


                    </div>


                </div>

                <div className="container py-16">
                    <div className="!bg-cover !bg-center !p-4 lg:!p-12" style={{ background: `url(https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Afbeelding_Zon1.jpg)` }}>
                        <div style={{ background: 'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3))' }} className="flex border-2 border-white ml-auto flex-col max-w-[400px] gap-4 p-8 lg:p-12 rounded-3xl">
                            <h3 className="text-2xl lg:text-4xl font-medium text-white">
                                sunnygreen.nl zet de zon weer op 1

                            </h3>
                            <p className='text-base lg:text-lg text-white'>
                                Dit is hoe wij zonne-energie voor iedereen toegankelijk maken
                            </p>
                            <p className='text-base lg:text-lg text-white'>

                                Wij grijpen de uitdagingen van de energietransitie met beide handen aan om met zijn allen zo snel mogelijk te kunnen genieten van goedkope, klimaatneutrale en decentrale energie.
                            </p>
                            <button className='font-medium text-base text-white hover:bg-themeGreen border-2 border-themeGreen hover:text-white px-3 md:px-6 transition-all duration-500 rounded-full py-3'>
                                Zie het licht
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-col mb-12 gap-16 py-16 bg-gradient-to-b to-themeDarkGreen from-themeGreen">
                    <div className="max-w-[60rem] mx-auto flex flex-col gap-8 w-full">
                        <h3 className="text-2xl lg:text-5xl font-medium text-white text-center">
                            Benieuwd wat er met zonne-energie op jouw <span className='leading-normal'>adres mogelijk is?</span>
                        </h3>
                        <p className='text-xl lg:text-2xl text-white text-center'>
                            Bereken binnen 1 minuut wat jij kunt besparen met zonnepanelen. Vul je gegevens in en ontvang gelijk een vrijblijvende gratis offerte
                        </p>
                        <div className="px-5 lg:px-10 py-6 rounded-3xl bg-white">
                            <h3 className='text-xl lg:text-2xl text-center'>
                                Bereken hoeveel zonnepanelen jou opleveren!

                            </h3>
                            <div className="p-5 mt-6 shadow-md border rounded-2xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <input autoFocus={error.post_code} value={data.post_code} onChange={handleChange} type='text' id='post_code' className={`px-2.5 outline-none border rounded-md py-[8px] focus:border-gray-500  ${inputError.post_code ? 'border-red-500 placeholder-red-500' : 'border-gray-400'}`} placeholder='Postcode' />
                                <input onChange={handleChange} error={inputError.huisnummer} id='huisnummer' className={`px-2.5 outline-none border rounded-md py-[8px] focus:border-gray-500  ${inputError.huisnummer ? 'border-red-500 placeholder-red-500' : 'border-gray-400'}`} placeholder='Huisnummer' />
                                <div onClick={() => setDrop(!drop)} className="w-full cursor-pointer flex relative p-[9px] justify-between bg-white rounded-md border  border-gray-400 items-center focus-within:border-gray-500">
                                    <p>{dropVal}</p>
                                    <BsChevronDown />
                                    {drop &&
                                        <div onClick={() => setDropVal('Geen')} className="absolute border-gray-300  top-[101%] rounded-b-md border-t shadow-2xl border w-full left-0 bg-white z-20 flex flex-col">
                                            <div className="w-full p-2">Geen</div>
                                        </div>
                                    }
                                </div>
                                <Button disabled={error} onClick={handleSubmit} variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-base !bg-gradient-to-r !py-2.5  !from-themeDarkGreen !to-themeGreen !font-semibold !rounded-full'} >
                                    BEREKEN PRIJS
                                </Button>
                            </div>
                        </div>
                        <div className="py-3 lg:py-6"></div>
                        <div className="flex pb-12 lg:pb-20 flex-col max-w-[45rem] mx-auto gap-8 w-full">
                            <div className="flex gap-4">
                                <div className="text-2xl lg:text-5xl text-white font-medium">
                                    01.
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-white text-xl lg:text-2xl font-medium'>
                                        Bereken je prijs
                                    </p>
                                    <p className='text-white text-base lg:text-lg'>
                                        Via de ZonneConfigurator kom je er binnen één minuut achter wat zonnepanelen jou kosten én opleveren.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-2xl lg:text-5xl text-white font-medium">
                                    02.
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-white text-xl lg:text-2xl font-medium'>
                                        Advies op maat
                                    </p>
                                    <p className='text-white text-base lg:text-lg'>
                                        Hele ZonneConfigurator doorlopen? Dan houden we nog een kort adviesgesprek met je, wanneer het jou uitkomt.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="text-2xl lg:text-5xl text-white font-medium">
                                    03.

                                </div>
                                <div className="flex flex-col gap-3">
                                    <p className='text-white text-xl lg:text-2xl font-medium'>
                                        Offerte en installatie

                                    </p>
                                    <p className='text-white text-base lg:text-lg'>
                                        Je ontvangt een vrijblijvende offerte na het adviesgesprek.Akkoord?Dan installeren we binnen 12 tot 16 weken je zonnepanelen.
                                    </p>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>

                <div className=" grid max-w-[40rem] mx-auto px-4 w-full lg:container border grid-cols-1 lg:grid-cols-3">

                    <div className="flex col-span-2 p-3 md:p-8 flex-col gap-6">
                        <p className='text-lg lg:text-xl font-medium text-themeGreen'>
                            HULP NODIG?
                        </p>
                        <h3 className="text-2xl lg:text-4xl font-medium">
                            Vertel hoe we je kunnen helpen
                        </h3>
                        <p className="font-light">
                            Kom je er toch niet helemaal uit of heb je een aanvullende vraag? Geen wolkje aan de lucht! Kom in contact met een van onze collega’s via de mail of de telefoon. Ook kan je ons een chatbericht sturen.
                        </p>
                        <div className="py-[3px] max-w-[10rem] bg-gradient-to-r from-themeDarkGreen to-themeGreen"></div>
                        <div className="mt-auto">
                            <button className='font-medium text-base  hover:bg-themeGreen border-2 border-themeGreen hover:text-white px-3 md:px-6 transition-all duration-500 rounded-full py-3'>
                                neem contact op
                            </button>

                        </div>
                    </div>
                    <div className="col-span-1">
                        <img src="
                    https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Afbeelding_CTA.png" className='w-full h-full object-contain min-h-full' alt="imh" />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

const CardItem = ({ img, title, link, isCarousel, btn, text }) => {
    return (
        isCarousel ?
            <div className={'flex min-h-[340px] group p-6 flex-col text-center items-center gap-4 border-2 shadow-card border-themeGreen pb-8 relative bg-white lg:hover:-translate-y-12 transition-all duration-700 rounded-3xl '}>
                <img src={img} alt={title} />
                <img src={`https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Check.svg`} alt={title} />
                <p className="text-lg lg:text-xl">{text}</p>
                <div className="mt-auto">
                    <Link to={link}>
                        <ThemeButton text={btn} />
                    </Link>
                </div>
            </div>
            :
            <div className={'flex group p-6 flex-col text-center items-center gap-4 border-2 hover:shadow-card hover:border-themeGreen pb-8 border-white relative bg-white lg:hover:-translate-y-12 transition-all duration-700 rounded-3xl '}>
                <img src={img} alt={title} />
                <img src={`https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Check.svg`} alt={title} />
                <p className="text-lg lg:text-xl">{text}</p>
                <div className="absolute group-hover:flex hidden left-1/2 z-10 -bottom-6 -translate-x-1/2">
                    <Link to={link}>
                        <ThemeButton text={btn} />
                    </Link>
                </div>
            </div>
    )
}
const secondData = [
    {
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_8jaar.svg`,
        text: `Al meer dan 8 jaar maken we zonne-energie voor iedereen toegankelijk.`,
        btn: 'lees meer',
        link: '/over-sunnygreen-nl'
    },
    {
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_Milieu.svg`,
        text: `Wij werken aan een positieve impact voor mens en milieu.`,
        btn: 'lees meer',
        link: '/over-sunnygreen-nl/bcorp/'
    },
    {
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_Enieaan.svg`,
        text: `Al meer dan 20.000 klanten gingen je voor.`,
        btn: 'lees meer',
        link: 'https://www.feedbackcompany.com/nl-nl/reviews/enie-nl/?starter=30'
    },
    {
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_2030.svg`,
        text: `Onze missie: voor 2030 volledig CO2-neutraal zijn.`,
        btn: 'lees meer',
        link: '/nieuws/co2-compensatie/'
    },
]
const thirdData = [
    {
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_Advies.svg`,
        title: ` Het snelste en beste advies`,
        text: `Met onze ZonneConfigurator bereken je al binnen één minuut je prijs.Daarna helpen onze ZonneAdviseurs je verder.`
    },
    {
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_4Weken.svg`,
        title: `Binnen 12 tot 16 weken zonnepanelen op je dak.`,
        text: `Met installatieteams door het hele land garanderen we dat je binnen no-time geniet van je eigen zonne-energie.`
    },
    {
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/USP_Prijs.svg`,
        title: `De scherpste prijzen.`,
        text: `Dat we zo open zijn met onze prijzen heeft een reden. Bijsunnygreen.nl kies je voor kwaliteit én een scherpe prijs.`
    },
]

const CarouselCompo = ({ children }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                },
                828: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 10,
                },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper !overflow-y-visible carousel_themePagination carousel_themeButton py-12"
        >
            {children}
        </Swiper>
    )
}


const reviews = [
    {
        title: `Zééér tevreden!`,
        text: `“Vlotte en nette afhandeling van de aanvraag, goed bereikbaar voor de planning(en mijn aanpassing van de planning) Ook het plaatsen / monteren van de installatie is vlot verlopen.”`,
        name: `George`,
        last: `Zwolle`,
        image: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Logo_TrustPilot.png`
    },
    {
        title: `Snelle installatie`,
        text: `“Enorm tevreden over de installatie van onze zonnepanelen. Voortraject was duidelijk, ze konden snel plaatsen en de monteurs waren erg meedenkend. Dank!”`,
        name: `Jamilla`,
        last: `Harderwijk`,
        image: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Logo_Google.png`
    },

    {
        type: 'full',
        img: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Afbeelding_Klantcase.jpg`,
        title: `Volledig het roer om`,
        text: `“In de samenwerking wassunnygreen.nl zeer flexibel en behulpzaam. Speciale wensen waren geen probleem en ook over kleine details werd meegedacht.”`
    },
    {
        title: `Het ziet er goed uit`,
        text: `“De service van deze mensen was fantastisch. Het personeel dat het heeft geplaatst was klantvriendelijk en het was snel gelegd.”`,
        name: `Bert`,
        last: `Peize`,
        image: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Logo_Google.png`
    },
    {
        title: `Sterk over de gehele linie`,
        text: `“Helder en duidelijk van verkoop tot plaatsing. Vakbekwame en goed functionerende mensen in de buitendienst.”`,
        name: `Chris`,
        last: `Haarlem`,
        image: `https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Logo_Google.png`
    },
]

const BigSection = () => {
    const [initial, setInitial] = useState(1)
    return (
        <div className="w-full flex flex-col gap-6 lg:gap-16 pt-10 lg:pt-16 bg-gradient-to-b to-themeDarkGreen from-themeGreen">
            <div className="flex flex-col text-white gap-2 container">
                <h2 className='text-lg pb-4 md:text-xl'>
                    AAN JOU DE KEUZE
                </h2>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium'>
                    Waar krijg jij energie van?
                </h2>
            </div>
            <div className="hidden lg:grid grid-cols-1 transition-all duration-300 lg:grid-cols-2">
                <div onMouseEnter={() => setInitial(1)} className={`w-full overflow-hidden transition-all group duration-300 h-full min-h-[730px] relative !bg-cover ${initial === 1 ? '!bg-bottom' : '!bg-center'}`} style={{ background: 'url(https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Afbeelding_Particulier.jpg)' }}>
                    <div className={`absolute w-full transition-all duration-300 inset-0 h-full opacity-80 ${initial === 1 ? 'bg-transparent' : ' bg-themeGreen'}`}>
                        <p className={`pl-12 pt-12 transition-all duration-300 font-medium text-xl ${initial === 1 ? 'text-white' : 'text-black'}`}>Particulier</p>
                    </div>
                    <div className={`bg-white grid grid-cols-2 gap-6 p-8 absolute ${initial === 1 ? ' bottom-0' : '-bottom-full'} transition-all duration-300  w-full`}>

                        <div className="flex border-b-2 w-full pb-4 gap-4">
                            <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkKopen.svg' alt='img' className='aspect-square w-10 h-10' />
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center w-full justify-between">
                                    <h3 className='text-base font-medium'>Zonnepanelen kopen</h3>
                                    <BsChevronRight className='text-2xl' />
                                </div>
                                <p className='max-w-[20rem]'>
                                    Direct besparen met je eigen zonnepanelen.
                                </p>
                            </div>
                        </div>
                        <div className="flex border-b-2 w-full pb-4 gap-4">
                            <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkLeasen.svg' alt='img' className='aspect-square w-10 h-10' />

                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center w-full justify-between">
                                    <h3 className='text-base font-medium'>
                                        Zonnepanelen huren
                                    </h3>
                                    <BsChevronRight className='text-2xl' />
                                </div>
                                <p className='max-w-[20rem]'>
                                    Stroom opwekken met een abonnement op de zon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div onMouseEnter={() => setInitial(2)} className={`w-full overflow-hidden transition-all duration-300 h-full min-h-[730px] relative !bg-cover ${initial === 2 ? '!bg-bottom' : '!bg-center'}`} style={{ background: 'url(	https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Afbeelding_Zakelijk.jpg)' }}>

                    <div className={`absolute w-full transition-all duration-300 inset-0 h-full opacity-80 ${initial === 2 ? 'bg-transparent' : ' bg-themeGreen'}`}>
                        <p className={`pl-12 pt-12 transition-all duration-300 font-medium text-xl ${initial === 2 ? 'text-white' : 'text-black'}`}>Zakelijk</p>
                    </div>
                    <div className={`bg-white grid grid-cols-2 gap-6 p-8 absolute ${initial === 2 ? ' bottom-0' : '-bottom-full'} transition-all duration-300  w-full`}>
                        <div className="flex border-b-2 w-full pb-4 gap-4">
                            <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkKopen.svg' alt='img' className='aspect-square w-10 h-10' />
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center w-full justify-between">
                                    <h3 className='text-base font-medium'>Zonnepanelen kopen</h3>
                                    <BsChevronRight className='text-2xl' />
                                </div>
                                <p className='max-w-[20rem]'>
                                    Het hoogste rendement en een duurzame investering.
                                </p>
                            </div>
                        </div>
                        <div className="flex border-b-2 w-full pb-4 gap-4">
                            <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkLeasen.svg' alt='img' className='aspect-square w-10 h-10' />
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center w-full justify-between">
                                    <h3 className='text-base font-medium'>Zonnepanelen Leasen</h3>
                                    <BsChevronRight className='text-2xl' />
                                </div>
                                <p className='max-w-[20rem]'>

                                    Zonnepanelen, laadpalen en accu's zonder investering.
                                </p>
                            </div>
                        </div>

                        <div className="flex border-b-2 w-full pb-4 gap-4">
                            <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkCarport.svg' alt='img' className='aspect-square w-10 h-10' />
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center w-full justify-between">
                                    <h3 className='text-base font-medium'> Carport zonnepanelen</h3>
                                    <BsChevronRight className='text-2xl' />
                                </div>
                                <p className='max-w-[20rem]'>
                                    Rijden én werken op zonne-energie van je parkeerterrein.
                                </p>
                            </div>
                        </div>
                        <div className="flex border-b-2 w-full pb-4 gap-4">
                            <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkWKR.svg' alt='img' className='aspect-square w-10 h-10' />
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex items-center w-full justify-between">
                                    <h3 className='text-base font-medium'>Groene werkkostenregeling</h3>
                                    <BsChevronRight className='text-2xl' />
                                </div>
                                <p className='max-w-[20rem]'>

                                    Duurzaam ondernemen, zonder extra kosten.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex lg:hidden flex-col gap-8">
                <div className="flex items-center gap-4">
                    <button onClick={() => setInitial(1)} className={`${initial === 1 ? 'bg-white text-black' : 'text-white'} px-5 py-2.5 rounded-full`}>
                        Particulier
                    </button>
                    <button onClick={() => setInitial(2)} className={`${initial === 2 ? 'bg-white text-black' : 'text-white'} px-5 py-2.5 rounded-full`}>
                        Zakelijk
                    </button>
                </div>
                <div className={`bg-white  grid-cols-1 gap-6 p-8  ${initial === 1 ? 'grid' : 'hidden'} transition-all duration-300  w-full`}>

                    <div className="flex border-b-2 w-full pb-4 gap-4">
                        <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkKopen.svg' alt='img' className='aspect-square w-10 h-10' />
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center w-full justify-between">
                                <h3 className='text-base font-medium'>Zonnepanelen kopen</h3>
                                <BsChevronRight className='text-2xl' />
                            </div>
                            <p className='max-w-[20rem]'>
                                Direct besparen met je eigen zonnepanelen.
                            </p>
                        </div>
                    </div>
                    <div className="flex border-b-2 w-full pb-4 gap-4">
                        <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkLeasen.svg' alt='img' className='aspect-square w-10 h-10' />

                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center w-full justify-between">
                                <h3 className='text-base font-medium'>
                                    Zonnepanelen huren
                                </h3>
                                <BsChevronRight className='text-2xl' />
                            </div>
                            <p className='max-w-[20rem]'>
                                Stroom opwekken met een abonnement op de zon.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`bg-white  grid-cols-1 gap-6 p-8  ${initial === 2 ? 'grid' : 'hidden'} transition-all duration-300  w-full`}>
                    <div className="flex border-b-2 w-full pb-4 gap-4">
                        <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkKopen.svg' alt='img' className='aspect-square w-10 h-10' />
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center w-full justify-between">
                                <h3 className='text-base font-medium'>Zonnepanelen kopen</h3>
                                <BsChevronRight className='text-2xl' />
                            </div>
                            <p className='max-w-[20rem]'>
                                Het hoogste rendement en een duurzame investering.
                            </p>
                        </div>
                    </div>
                    <div className="flex border-b-2 w-full pb-4 gap-4">
                        <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkLeasen.svg' alt='img' className='aspect-square w-10 h-10' />
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center w-full justify-between">
                                <h3 className='text-base font-medium'>Zonnepanelen Leasen</h3>
                                <BsChevronRight className='text-2xl' />
                            </div>
                            <p className='max-w-[20rem]'>

                                Zonnepanelen, laadpalen en accu's zonder investering.
                            </p>
                        </div>
                    </div>

                    <div className="flex border-b-2 w-full pb-4 gap-4">
                        <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkCarport.svg' alt='img' className='aspect-square w-10 h-10' />
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center w-full justify-between">
                                <h3 className='text-base font-medium'> Carport zonnepanelen</h3>
                                <BsChevronRight className='text-2xl' />
                            </div>
                            <p className='max-w-[20rem]'>
                                Rijden én werken op zonne-energie van je parkeerterrein.
                            </p>
                        </div>
                    </div>
                    <div className="flex border-b-2 w-full pb-4 gap-4">
                        <img src='https://www.enie.nl/wp-content/themes/enie/enie-2/style/dist/assets/Icon_Product_ZakelijkWKR.svg' alt='img' className='aspect-square w-10 h-10' />
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex items-center w-full justify-between">
                                <h3 className='text-base font-medium'>Groene werkkostenregeling</h3>
                                <BsChevronRight className='text-2xl' />
                            </div>
                            <p className='max-w-[20rem]'>

                                Duurzaam ondernemen, zonder extra kosten.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeScreen
