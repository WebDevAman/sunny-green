import React from 'react'

const SpecCard = ({title,afm,gew,prod,img,antaldb}) => {
  return (
    <div className='flex items-center space-x-4'>
        <img src={img} alt="" className='max-w-[300px]' />
        <div className='flex flex-col'>
<h3>{title}</h3>
<h3 className='font-extrabold text-lg'>Afmetingen: <span className='font-[200]'>{afm}</span> </h3>
<h3 className='font-extrabold text-lg'>Gewicht: <span className='font-[200]'>{gew}</span> </h3>
<h3 className='font-extrabold text-lg'>Aantal dB: <span className='font-[200]'>{antaldb}</span> </h3>
<h3 className='font-extrabold text-lg'>Productiegarantie: <span className='font-[200]'>{prod}</span> </h3>

        </div>
    </div>
  )
}

export default SpecCard