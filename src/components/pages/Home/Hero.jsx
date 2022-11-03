import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { AiOutlineCheck, AiFillStar } from 'react-icons/ai'
import { Button } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { atomImageFromGoogle } from '../../atoms'

const Hero = () => {
    const [data, setData] = useState({})
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
        if (data.post_code) {
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
    }, [data])
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
                    <TextField onChange={handleChange} error={inputError.post_code} id='post_code' variant="outlined" label="Post Code" />
                    <TextField onChange={handleChange} error={inputError.huisnummer} id='huisnummer' variant="outlined" label="Huisnummer" />
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            variant='outlined'
                            defaultValue={'Toev'}
                            onChange={handleChange}
                        >

                        </Select>
                    </FormControl>
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