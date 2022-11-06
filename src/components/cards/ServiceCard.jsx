import React from 'react'

const ServiceCard = ({ data }) => {
    return (
        <div className='p-6 shadow-lg border text-left rounded flex flex-col gap-5'>
            <div className='text-themeYellow text-5xl'>{data.icon}</div>
            <h3 className='text-xl lg:text-2xl font-medium'>{data.title}</h3>
            <p>{data.text}</p>
        </div>
    )
}

export default ServiceCard