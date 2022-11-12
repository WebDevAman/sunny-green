import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
const News = () => {
    return (
        <div className='flex flex-col gap-8'>
            <h2 className="text-2xl text-center mx-auto lg:text-4xl max-w-[50rem] font-medium">
                Het laatste nieuws
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                    },
                    988: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween: 10,
                    },

                }}
                modules={[Pagination, Navigation]}
                className="mySwiper !overflow-y-visible container carousel_themePagination carousel_themeButton !py-12"
            >
                {newsData.map(item => (
                    <SwiperSlide key={item.img} className='!min-h-[400px]  !px-2'>
                        <div className='rounded-2xl flex flex-col overflow-hidden  min-h-[400px] shadow-card'>
                            <img src={item.img} className='aspect-video object-cover' alt={item.title} />
                            <div className="p-4 text-lg lg:text-xl font-light">
                                "{item.text}"
                            </div>
                            <div className="mt-auto ml-auto p-4 pr-6">
                                <Link className='text-themeGreen' to={item.btn.link}>
                                    {item.btn.text}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

const newsData = [
    {
        img: `https://www.enie.nl/wp-content/uploads/2022/08/post26-social-daviddal-website-568x352.png`,
        text: `David Dalderup nieuwe COO zonne-energieleverancier enie.nl`,
        btn: {
            text: `Lees meer`,
            link: '/'
        }
    },
    {
        img: `https://www.enie.nl/wp-content/uploads/2020/12/huis-zonnepanelen-bloesem.jpg`,
        text: `Stroomnet vol: wat merk je daar als particulier van?`,
        btn: {
            text: `Lees meer`,
            link: '/'
        }
    },
    {
        img: `https://www.enie.nl/wp-content/uploads/2022/10/gerrie-568x350.png`,
        text: `Zonnepanelen zijn een logische stap om gasloos te wonen`,
        btn: {
            text: `Lees meer`,
            link: '/'
        }
    },
    {
        img: `https://www.enie.nl/wp-content/uploads/2022/10/bovenaanzicht-zuidhorn-opleverrapport-min-768x364.png`,
        text: `Enie.nl en gemeente Westerkwartier openen carport met zonnepanelen in Zuidhorn`,
        btn: {
            text: `Lees meer`,
            link: '/'
        }
    },
]

export default News