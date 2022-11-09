import React from 'react'
import List from '../common/List'

const BigImgCard = ({ data, i }) => {
    return (
        <>
            <div className='relative py-12 mt-12 md:flex hidden '>
                <div className={`${i % 2 === 0 ? 'right-0' : 'left-0'} absolute h-full  top-0 w-full max-w-[80%] rounded-3xl overflow-hidden`}>
                    <img src={data.img} alt={data.img} className='w-full object-cover h-full rounded-3xl overflow-hidden select-none transition-all duration-1000' />
                </div>
                <div className={`z-20 relative w-full max-w-[40rem] ${i % 2 === 1 ? 'ml-auto' : 'mr-auto'}`}>
                    <div className="h-full bg-white rounded-3xl shadow-2xl p-12 flex flex-col gap-6 lg:gap-10 ">
                        <h2 className='text-2xl lg:text-[40px] leading-[50px]'>
                            {data.title}
                        </h2>
                        <div className="h-[4px] max-w-[10rem] rounded-sm bg-gradient-to-r from-themeYellow to-themeOrange"></div>
                        {data.content?.map((item, i) => (
                            item?.type === 'list' ?
                                <List data={item.content} />
                                : item?.type === 'custom' ? <>{item?.comp}</> : <p className="text-base lg:text-lg font-light">
                                    {item}
                                </p>

                        ))}
                        <div className="flex gap-4">
                            {data.btns.map((btn, i) => (
                                <div className='w-fit' key={i}>
                                    {btn}
                                </div>
                            ))}
                        </div>
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
                        item?.type === 'list' ?
                            <List data={item.content} />
                            : item?.type === 'custom' ? <>{item?.comp}</> : <p className="text-base lg:text-lg font-light">
                                {item}
                            </p>

                    ))}
                    <div className="flex flex-col gap-3 items-center">
                        {data.btns.map((btn, i) => (
                            <div key={i}>
                                {btn}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BigImgCard