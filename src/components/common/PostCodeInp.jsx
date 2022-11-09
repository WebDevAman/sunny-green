import { Button } from '@material-ui/core'
import React from 'react'
import ThemeButton from './ThemeButton'

const PostCodeInp = () => {
    return (
        <div className='p-2 bg-white rounded-full'>
            <input type="text" className='outline-none px-3 py-2 max-w-[130px] md:max-w-full text-center' placeholder='Je postcode' />
            <Button variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-sm !bg-gradient-to-r !px-4 md:!px-8 !py-3  !from-themeYellow !to-themeOrange !font-medium !rounded-full'} >
                Gratis voorstel
            </Button>
        </div>
    )
}

export default PostCodeInp