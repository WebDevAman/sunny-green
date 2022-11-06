import React from 'react'
import List from '../common/List'

const BigImgCard = ({ data, i }) => {
    return (
        <>
            <div className='relative max-h-[40rem] mt-12 md:flex hidden '>
                <div className={`${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} h-fit w-full max-w-[80%] rounded-3xl overflow-hidden`}>
                    <img src={data.img} alt={data.img} className='w-full object-cover rounded-3xl overflow-hidden select-none hover:scale-110 transition-all duration-1000' />
                </div>
                <div className={`absolute top-1/2 -translate-y-1/2 flex items-center w-1/2 max-w-[40rem] ${i % 2 === 1 ? 'right-0' : 'left-0'}`}>
                    <div className="h-full bg-white rounded-3xl shadow-2xl p-12 flex flex-col gap-6 ">
                        <h2 className='text-2xl lg:text-4xl'>
                            {data.title}
                        </h2>
                        <div className="h-1 py-1 min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
                        {data.content?.map((item, i) => (
                            item.type ?
                                item?.type === 'list' ?
                                    <List data={item.content} />
                                    : ''
                                :
                                <p className="text-base lg:text-lg font-light">
                                    {item}
                                </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex md:hidden flex-col" i>
                <img src={data.img} alt={data.img} className='w-full aspect-video object-cover rounded-t-2xl' />
                <div className="h-full bg-white rounded-b-2xl shadow-xl p-6 flex flex-col gap-6 ">
                    <h2 className='text-2xl lg:text-4xl'>
                        {data.title}
                    </h2>
                    <div className="h-1 py-1 min-h-full max-w-[10rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
                    {data.content?.map((item, i) => (
                        item.type ?
                            item?.type === 'list' ?
                                <List data={item.content} />
                                : ''
                            :
                            <p className="text-base lg:text-lg font-light">
                                {item}
                            </p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BigImgCard