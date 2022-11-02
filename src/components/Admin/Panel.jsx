import { Card, CardActionArea, CardContent, CardMedia, List, ListItem, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'

const Panel = () => {
    const [rightData, setRightData] = useState({})
    const [data, setData] = useState([])
    React.useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/users')
            setData(data.data)
            console.log(data)
        })()
    }, [])
    React.useEffect(() => {
        setRightData(data[0])

    }, [data])

    return (
        <Layout>
            {data.length > 0 ?
                <div className='container my-6  grid grid-cols-2 gap-6  !px-0 rounded-2xl border shadow-xl'>
                    <div className="flex bg-gray-50 h-[90vh] overflow-y-scroll flex-col gap-6 p-6 border-r">
                        <h2 className="text-xl lg:text-2xl">Total Requests ({data?.length})</h2>
                        {data?.map((item, i) => (
                            <div key={i} className="h-32">
                                <Card onClick={() => setRightData(item)} variant='outlined' sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <div className="p-4 flex flex-col min-h-32">
                                            <div className="flex items-center justify-between">
                                                <p className='capitalize'>{item?.fname} {item?.lname}</p>
                                                <p>ID: {item?._id}</p>
                                            </div>
                                            <div className="grid pt-3 grid-cols-2">
                                                <div className="flex text-xs flex-col gap-2">
                                                    <p>Total Price</p>
                                                    <p>VAT Refund</p>
                                                    <b>Total Price After VAT Refund</b>
                                                </div>
                                                <div className="flex text-right text-xs flex-col gap-2">
                                                    <p>€ {item?.total_price}</p>
                                                    <p>€ {item?.vat_refund}</p>
                                                    <b>€ {item?.price_with_vat_refund}</b>
                                                </div>
                                            </div>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </div>
                        ))}
                    </div>
                    {data && data.length > 0 ?
                        <div className='flex px-4 lg:px-8 justify-center flex-col gap-8'>
                            <h3 className="text-lg lg:text-xl">ID: {rightData?._id} </h3>
                            <div className="w-full grid grid-cols-2 ">
                                <div className="flex gap-3 font-medium flex-col">
                                    <p className='text-base'>First Name</p>
                                    <p className='text-base'>Last Name</p>
                                    <p className='text-base'>Email Address</p>
                                    <p className='text-base'>Mobile Number</p>
                                    <p className='text-base'>Post Code</p>
                                    <p className='text-base'>House No.</p>
                                    <p className='text-base'>Toev.</p>
                                    <p className='text-base'>Is House Owner</p>
                                    <hr />
                                    <p className='text-base'>Type Of Appointment</p>
                                    <p className='text-base'>Date</p>
                                    <p className='text-base'>Time</p>
                                    <hr />
                                    <p className='text-base'>Solar Panels</p>
                                    <p className='text-base'>converter</p>
                                    <p className='text-base'>Monitoring via app</p>
                                    <p className='text-base'>Installation</p>
                                    <hr />
                                    <p className='text-base'>Total Price</p>
                                    <p className='text-base'>VAT Refund</p>
                                    <p className='text-base'>Total Price With VAT Refund</p>
                                </div>
                                <div className="flex text-right flex-col gap-3">
                                    <p className='text-base'>{rightData?.fname || '---'}</p>
                                    <p className='text-base'>{rightData?.lname || '---'}</p>
                                    <a className="text-base text-blue-500 underline" target={'_blank'} rel='noreferrer' href={`mailto:${rightData?.email}`}>
                                        {rightData?.email}
                                    </a>
                                    <a className="text-base text-blue-500 underline" target={'_blank'} rel='noreferrer' href={`tel:${rightData?.phone}`}>
                                        {rightData?.phone}
                                    </a>
                                    <p className='text-base'>{rightData?.post_code || '---'}</p>
                                    <p className='text-base'>{rightData?.huisnummer || '---'}</p>
                                    <p className='text-base'>{rightData?.toev || '---'}</p>
                                    <p className='text-base'>{rightData?.own_the_house ? 'Yes' : 'No'}</p>
                                    <hr />
                                    <p className='text-base'>{rightData?.appointment_type || '---'}</p>
                                    <p className='text-base'>{rightData?.date || '---'}</p>
                                    <p className='text-base'>{rightData?.time || '---'}</p>
                                    <hr />
                                    <p className='text-base'>x{rightData?.no_of_panels || '---'}</p>
                                    <p className='text-base'>{rightData?.converter || '---'}</p>
                                    <p className='text-base'>{rightData?.monitoring_via_app || '---'}</p>
                                    <p className='text-base'>{rightData?.installation || '---'}</p>
                                    <hr />
                                    <p className='text-base'>€ {rightData?.total_price || '---'}</p>
                                    <p className='text-base'>€ {rightData?.vat_refund || '---'}</p>
                                    <p className='text-base'>€ {rightData?.price_with_vat_refund || '---'}</p>
                                </div>
                            </div>
                        </div>
                        :
                        <h1>Nothing to show!</h1>
                    }
                </div>
                :
                <div className="flex flex-col max-w-lg m-auto my-40 gap-8 p-12 border rounded-3xl shadow-xl">
                    <h2 className="text-xl lg:text-2xl">No Requests Yet</h2>
                </div>
            }

        </Layout>
    )
}



export default Panel