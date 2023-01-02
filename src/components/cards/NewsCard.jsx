import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const NewsCard = ({ img, desc }) => {
  return (
    <div className="bg-white flex flex-col gap-y-2 shadow-lg relative">
      <img src={img} alt="" />
      <h4 className='text-gray-600 font-[100] text-lg'>{desc}</h4>
      <div className="flex gap-x-1 items-center absolute b-0 r-0 justify-end">
        <p>Lees meer</p>
        <BsChevronRight className="text-gray-400" />
      </div>
    </div>
  )
}

export default NewsCard
