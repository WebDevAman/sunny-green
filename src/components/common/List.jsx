import React from 'react'
import { FiCheck } from 'react-icons/fi'

const List = ({ data }) => {
    return (
        <ul className='flex text-base lg:text-lg flex-col gap-3'>
            {data.map((item, i) => (
                <li className='flex items-start gap-3'><FiCheck className='text-themeOrange text-xl' />{item}</li>
            ))}
        </ul>
    )
}

export default List