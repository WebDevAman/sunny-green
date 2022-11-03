import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AiOutlineCheck, AiFillStar } from 'react-icons/ai'
import { Button } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { atomImageFromGoogle } from '../../atoms'

const Hero = () => {
    const [data, setData] = useState({})
    const [requested, setRequested] = useState(false)
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
        <div
            className="flex px-3 flex-col items-center  pt-32 lg:pt-2 min-h-[40rem] justify-center z-10 relative gap-10">
            <h1 className=' text-white text-3xl lg:text-[50px] text-center max-w-md'>Zonnepanelen prijs <spam className='leading-normal'>berekenen</spam></h1>
            <div className="rounded-3xl text-center bg-white p-5 lg:p-8 w-full max-w-[60rem]">
                <h2 className='font-medium text-2xl '>Hoeveel leveren zonnepanelen jou op?</h2>
                <p className="text-base hidden md:flex lg:text-lg pt-4">
                    Bereken direct hoeveel zonnepanelen je nodig hebt, hoeveel stroom ze opwekken én wat je daarmee bespaart.
                </p>
                <div className="p-5 mt-6 shadow-md border rounded-2xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input autoFocus={error.post_code} value={data.post_code} onChange={handleChange} type='text' id='post_code' className={`px-2.5 outline-none border rounded-md py-[8px] focus:border-gray-500  ${inputError.post_code ? 'border-red-500 placeholder-red-500' : 'border-gray-400'}`} placeholder='Postcode' />
                    <input onChange={handleChange} error={inputError.huisnummer} id='huisnummer' className={`px-2.5 outline-none border rounded-md py-[8px] focus:border-gray-500  ${inputError.huisnummer ? 'border-red-500 placeholder-red-500' : 'border-gray-400'}`} placeholder='Huisnummer' />
                    <div className='  border-gray-400 border bg-white rounded-md px-2  focus-within:border-gray-500'>
                        <select id='toev' onChange={handleChange} className='opacity-80 bg-white h-full px-2.5 py-[10px] rounded-md w-full outline-none' defaultValue={'Toev. (opt)'} placeholder='Toev. (opt)'>
                            <option className='w-full bg-white' value='toev'>Toev. (opt)</option>
                        </select>
                    </div>
                    <Button disabled={error} onClick={handleSubmit} variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-base !bg-gradient-to-r !py-2.5  !from-themeYellow !to-themeOrange !font-semibold !rounded-full'} >
                        BEREKEN PRIJS
                    </Button>
                </div>
                <div className="flex items-center pt-4 lg:px-4 justify-center md:justify-between">
                    <div className="flex items-center gap-2">
                        <img src='https://enie.nl.cdn.enie.dev/configurator/assets/img/google.png' alt='google' className='w-7 h-7' />
                        <div className="flex text-yellow-400 text-xl items-center gap-1">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                    </div>
                    <div className="hidden md:flex text-[#222] items-center gap-4">
                        <p className="flex items-center gap-2">
                            <AiOutlineCheck />
                            Huren of kopen
                        </p>
                        <p className="flex items-center gap-2">
                            <AiOutlineCheck className='!border-yellow-300 !outline-yellow-300' />
                            Direct besparen
                        </p>
                        <p className="flex items-center gap-2">
                            <AiOutlineCheck />
                            Binnen 8-12 weken geïnstalleerd
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hero