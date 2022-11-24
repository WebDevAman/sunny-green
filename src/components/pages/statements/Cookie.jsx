import React from 'react'
import Reasons from '../../common/Reasons'
import Layout from '../../Layout'


const Index = () => {
    return (
        <Layout noHero img='https://www.enie.nl/wp-content/uploads/2020/10/2009_showcase_assen_enie_6_web.jpg'>
            <div className="flex px-3 flex-col items-center  pt-12 lg:pt-2 min-h-[30rem] justify-center z-10 relative gap-6">
                <h2 className="text-2xl lg:text-5xl max-w-xl mx-auto text-center text-white font-light">
                    Cookie statement

                </h2>

            </div>
            <div className="flex max-w-[70rem] mt-0 lg:mt-32 px-4 mx-auto w-full  gap-12">
                <div className="min-h-full w-5 hidden md:flex bg-gradient-to-b from-themeGreen to-themeDarkGreen"> </div>
                <div className="py-2 lg:py-16 flex flex-col gap-4 lg:gap-6">
                    <h3 className='text-xl lg:text-3xl font-medium'  >Amendments</h3>
                    <p className='text-lg font-light'>This cookie statement can be changed by enie.nl without prior notice.&nbsp;The amended version is provided with the date on which the last amendment was made.&nbsp;enie.nl advises you to re-read the cookie statement regularly, so that you are aware of any changes.</p>
                    <h3 className='text-xl lg:text-3xl font-medium' >To ask</h3>
                    <p className='text-lg font-light'>Do you have questions about what enie.nl does with the collected cookies?&nbsp;Then call 085 401 7000 or contact us by e-mail at&nbsp;<a className='text-themeGreen text-lg hover:underline' href="mailto:klantenservice@sunnygreen.nl">klantenservice@sunnygreen.nl</a> .</p>
                    <p className='text-lg font-light'>This cookie statement was last changed in October 2020.</p>
                </div >
            </div>
            <Reasons />
        </Layout >
    )
}

export default Index