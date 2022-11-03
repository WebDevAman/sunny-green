import { IconButton, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ThemeButton from '../../common/ThemeButton'
import axios from 'axios'
const StepThree = ({ data, handleNext, setShow, energy, setData }) => {
    const url = 'https://infinite-caverns-77320.herokuapp.com'
    const navigate = useNavigate()
    const [state, setState] = useState({ loading: false, error: false, success: false })
    const handleSubmit = async (e) => {
        e.preventDefault()
        setState({ ...state, loading: true })
        if (data.fname && data.email) {
            const res = await axios.post(url + `/api/users`, data)
            if (res.status === 201) {
                setState({ error: false, loading: false, success: true })
                navigate('/success')
            } else {
                setState({ success: false, loading: false, error: true })
            }
        } else {
            alert('Please fill the form!')
        }
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    React.useEffect(() => {
        console.log('data ------>>>>>>', data)
    }, [data])

    const totalPanelsRequired = Math.ceil(data.usage > 330 ? data.usage / 330 : 1)

    return (
        <div className='lg:max-h-[90vh] lg:overflow-y-scroll w-full'>
            <div className='flex flex-col justify-center relative py-12 gap-8 px-5 lg:px-8 w-full'>
                {state.loading ?
                    <div className="fixed top-0 lg:absolute flex flex-col w-full h-scree inset-0 bg-white items-center justify-center z-10">
                        <>
                            <img src='https://i.pinimg.com/originals/72/66/03/7266036c9f3383d21730484150602f01.gif' alt='processing' />
                            <h3 className="text-xl -mt-12 lg:text-2xl font-medium">Processing...</h3>
                        </>
                    </div>
                    :
                    state.error ?
                        <div className="fixed top-0 lg:absolute flex flex-col w-full h-scree inset-0 bg-white items-center justify-center z-10">
                            <img width={150} src='http://www.setra.com/hubfs/Sajni/crc_error.jpg' alt='processing' />
                            <h3 className="text-xl my-4 lg:text-2xl font-medium">Something went wrong...</h3>
                            <Link to='/'>
                                <ThemeButton text='Try again' />
                            </Link>
                        </div>
                        :
                        ''
                }

                <div className="lg:flex hidden flex-col gap-3">
                    <p className="text-base font-light">
                        Definitieve offerte opstellen
                    </p>

                    <h2 className="text-2xl lg:text-3xl font-semibold">
                        Hoe kunnen we je bereiken?
                    </h2>
                    <div className="h-[5px] max-w-[6rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
                </div>
                <div className="border lg:flex hidden p-6 relative flex-col rounded-3xl border-themeOrange">
                    <p className="text-lg font-medium">
                        Onze adviseurs helpen je graag verder
                    </p>
                    <p className="text-base font-light pt-2 max-w-[70%]">
                        Het voorstel is uiteraard vrijblijvend en nog niet definitief. Om een definitief voorstel te maken nemen we graag contact met je op.
                    </p>
                    <div className="absolute right-0 bottom-0">
                        <img src='https://configurator.enie.nl/assets/images/advisors.png' className='w-40 md:w-52' alt='img' />
                    </div>
                </div>
                <div className="flex lg:hidden flex-col gap-4">
                    <p className="text-base">Afspraak inplannen</p>
                    <p className="text-sm font-light">In een kort adviesgesprek lopen we het voorstel nog eens door, beantwoorden we al je vragen en passen het voorstel naar wens aan.</p>
                </div>
                <p className="text-lg">
                    Type afspraak
                </p>
                <div className="rounded-full w-full p-1 lg:p-2 grid grid-cols-2 shadow-inner bg-gray-100 max-w-sm shadow-inset">
                    <div onClick={() => setData({ ...data, appointment_type: 'Videogesprek' })} className={`cursor-pointer select-none  rounded-full w-full p-4 ${data.appointment_type === 'Videogesprek' ? 'bg-white shadow-lg' : 'bg-transparent'} max-w-sm shadow-inset flex justify-center`}>Videogesprek</div>
                    <div onClick={() => setData({ ...data, appointment_type: 'Bel Mij Terug' })} className={`cursor-pointer select-none rounded-full w-full p-4 ${data.appointment_type === 'Bel Mij Terug' ? 'bg-white  shadow-lg' : 'bg-transparent'} bg-white max-w-sm shadow-inset flex justify-center`}>Bel Mij Terug</div>
                </div>
                {data.appointment_type === 'Videogesprek' ?
                    <>
                        {data?.date?.length > 1 && data?.time?.length > 1 ?
                            <>
                                <div className="grid grid-cols-2 gap-4">
                                    <TextField
                                        id="date"
                                        label="Datum invoeren"
                                        variant='outlined'
                                        onChange={handleChange}
                                        defaultValue={data.date}
                                        type="date"
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="time"
                                        label="Voer tijd in"
                                        variant='outlined'
                                        onChange={handleChange}
                                        defaultValue={data.time}
                                        type="time"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        sx={{ width: 150 }}
                                    />
                                </div>
                                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                                    <div className="grid grid-cols-2 gap-4">
                                        <TextField id="fname" required label="Voornaam" onChange={handleChange} variant="outlined" />
                                        <TextField id="lname" required label="Achternaam" onChange={handleChange} variant="outlined" />
                                    </div>
                                    <TextField id="email" required label="E-mailadres" type={'email'} onChange={handleChange} variant="outlined" />
                                    <TextField id="phone" required label="Telefoonnummer" type={'number'} onChange={handleChange} variant="outlined" />
                                    <div className="grid grid-cols-3 gap-4">
                                        <TextField id="post_code" required label="Post Code" defaultValue={data.post_code} onChange={handleChange} variant="outlined" />
                                        <TextField id="huisnummer" required label="Huisnummer" type={'text'} defaultValue={data.huisnummer} onChange={handleChange} variant="outlined" />
                                        <TextField id="toev" required label="toev" type={'text'} defaultValue={data.toev} onChange={handleChange} variant="outlined" />
                                    </div>
                                    <textarea name="comments" id="comments" className='border p-3 rounded-lg outline-none focus:border-[#999] border-[#c4c4c4]' cols="30" rows="4" placeholder='Opmerkingen'></textarea>
                                    <div className="flex gap-2 items-center">
                                        <input type="checkbox" name="own_the_house" id="own_the_house" onChange={() => setData({ ...data, own_the_house: !data.own_the_house })} />
                                        <p className="text-base">Ik ben eigenaar van de woning.</p>
                                    </div>
                                    <p className="text-sm font-light">
                                        We verwerken je persoonsgegevens volgens ons privacy statement. Door verder te gaan, ga je hiermee akkoord.
                                    </p>
                                    <div className="flex gap-4 md:gap-8 flex-col sm:flex-row">
                                        <button onClick={() => setShow(2)} className='whitespace-nowrap hidden text-center items-center underline justify-center sm:flex'>Opnieuw beginnen</button>
                                        <button type='submit' className='w-full md:hidden flex lg:mr-auto'>
                                            <ThemeButton full text='VOLGENDE STAP' />
                                        </button>
                                        <button type='submit' className='w-full md:flex hidden lg:mr-auto'>
                                            <ThemeButton text='VOLGENDE STAP' />
                                        </button>
                                        <button onClick={() => setShow(2)} className='whitespace-nowrap  sm:hidden text-center w-full items-center underline justify-center flex'>Opnieuw beginnen</button>
                                    </div>
                                </form>
                            </>
                            :
                            <>

                                <div className="grid grid-cols-2 gap-4">
                                    <TextField
                                        id="date"
                                        label="Datum invoeren"
                                        variant='outlined'
                                        onChange={handleChange}
                                        defaultValue={data.date}
                                        type="date"
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        id="time"
                                        label="Voer tijd in"
                                        variant='outlined'
                                        onChange={handleChange}
                                        defaultValue={data.time}
                                        type="time"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        sx={{ width: 150 }}
                                    />
                                </div>
                                <p className="text-base -mt-4">
                                    Selecteer Datum en tijd om door te gaan
                                </p>
                                <div className="flex gap-4 md:gap-8 flex-col sm:flex-row">
                                    <button onClick={() => setShow(2)} className='whitespace-nowrap hidden text-center items-center underline justify-center sm:flex'>Opnieuw beginnen</button>
                                    <button type='submit' className='w-full md:hidden flex lg:mr-auto'>
                                        <ThemeButton full text='VOLGENDE STAP' />
                                    </button>
                                    <button type='submit' className='w-full md:flex hidden lg:mr-auto'>
                                        <ThemeButton text='VOLGENDE STAP' />
                                    </button>
                                    <button onClick={() => setShow(2)} className='whitespace-nowrap  sm:hidden text-center w-full items-center underline justify-center flex'>Opnieuw beginnen</button>
                                </div>
                            </>



                        }
                    </>
                    :
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <TextField id="fname" required label="Voornaam" onChange={handleChange} variant="outlined" />
                            <TextField id="lname" required label="Achternaam" onChange={handleChange} variant="outlined" />
                        </div>

                        <TextField id="email" required label="E-mailadres" type={'email'} onChange={handleChange} variant="outlined" />
                        <TextField id="phone" required label="Telefoonnummer" type={'number'} onChange={handleChange} variant="outlined" />
                        <div className="grid grid-cols-3 gap-4">
                            <TextField id="post_code" required label="Post Code" defaultValue={data.post_code} onChange={handleChange} variant="outlined" />
                            <TextField id="huisnummer" required label="Huisnummer" type={'text'} defaultValue={data.huisnummer} onChange={handleChange} variant="outlined" />
                            <TextField id="toev" required label="toev" type={'text'} defaultValue={data.toev} onChange={handleChange} variant="outlined" />
                        </div>
                        <textarea name="comments" id="comments" className='border p-3 rounded-lg outline-none focus:border-[#999] border-[#c4c4c4]' cols="30" rows="4" placeholder='Opmerkingen'></textarea>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" name="own_the_house" id="own_the_house" onChange={() => setData({ ...data, own_the_house: !data.own_the_house })} />
                            <p className="text-base">Ik ben eigenaar van de woning.</p>
                        </div>
                        <p className="text-sm font-light">
                            We verwerken je persoonsgegevens volgens ons privacy statement. Door verder te gaan, ga je hiermee akkoord.
                        </p>

                        <div className="flex gap-4 md:gap-8 flex-col sm:flex-row">
                            <button onClick={() => setShow(2)} className='whitespace-nowrap hidden text-center items-center underline justify-center sm:flex'>Opnieuw beginnen</button>
                            <button type='submit' className='w-full md:hidden flex lg:mr-auto'>
                                <ThemeButton full text='VOLGENDE STAP' />
                            </button>
                            <button type='submit' className='w-full md:flex hidden lg:mr-auto'>
                                <ThemeButton text='VOLGENDE STAP' />
                            </button>
                            <button onClick={() => setShow(2)} className='whitespace-nowrap  sm:hidden text-center w-full items-center underline justify-center flex'>Opnieuw beginnen</button>
                        </div>
                    </form>
                }

            </div>
        </div>
    )
}

export default StepThree