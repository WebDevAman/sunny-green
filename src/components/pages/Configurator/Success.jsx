import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Layout'

const Success = () => {
    return (
        <Layout>
            <div className='rounded-3xl text-center my-6 p-8 pb-20 border shadow-xl mx-auto max-w-2xl flex items-center flex-col gap-12'>
                <img src='https://configurator.enie.nl/assets/images/medal.png' alt='success' className='max-w-sm' />
                <div className="flex flex-col gap-4">
                    <p className="text-lg">
                        Thank you! We have received your request.
                    </p>
                    <h3 className="text-2xl lg:text-4xl">
                        We will call you as soon as possible!
                    </h3>
                    <Link to='/' className='underline'>
                        Back to home page
                    </Link>
                </div>
            </div>
        </Layout >
    )
}

export default Success