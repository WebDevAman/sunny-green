import React from 'react'
import { Button } from '@material-ui/core'
const ThemeButton = ({ text, full }) => {
    return (
        full ?

            <Button variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-base !bg-gradient-to-r !px-8 !py-2.5  !from-themeYellow !to-themeOrange !min-w-full !font-semibold !rounded-full'} >
                {text}
            </Button>
            :
            <Button variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-base !bg-gradient-to-r !px-8 !py-2.5  !from-themeYellow !to-themeOrange !font-semibold !rounded-full'} >
                {text}
            </Button>
    )
}

export default ThemeButton