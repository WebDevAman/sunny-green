import React from 'react'

const InfoCard = ({ data }) => {
    return (
        <div style={{ boxShadow: '0 0 10px #c9c9c9' }} className='w-full rounded-xl  max-w-[280px] bg-gray-50 flex flex-col'>
            <div style={{ boxShadow: '0 0 10px #d9d9d9' }} className="bg-white rounded-t-xl w-full p-6 pt-12 relative ">
                <div style={{ boxShadow: '0 0 10px #d9d9d9' }} className="bg-white left-1/2 -translate-x-1/2 p-6 absolute -top-12 rounded-full flex items-center justify-center">{data?.icon}</div>
                <h3 className="text-center max-w-[200px] mx-auto text-xl lg:text-2xl font-medium pt-4">{data.title}</h3>
            </div>
            <div className="p-6 min-h-[130px] border-b font-light">{data.text}</div>
            <ul className='p-6 pl-10 flex flex-col gap-2 font-light'>
                {data.list.map(item => (
                    <li className=' list-disc' key={item}>{item}</li>
                ))}
            </ul>
            <div className={`${data.btns && data.btns.length > 0 ? 'border-t' : ''} p-6 `}>
                {data.btns.map((btn, i) => (
                    btn
                ))}
            </div>
        </div >
    )
}

export default InfoCard