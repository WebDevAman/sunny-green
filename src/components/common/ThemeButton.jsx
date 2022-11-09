import React from 'react'
import { Button } from '@material-ui/core'
const ThemeButton = ({ text, grayBtn, full }) => {
    return (
        full ?
            <Button variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-base !bg-gradient-to-r !px-8 !py-2.5  !from-themeYellow !to-themeOrange !min-w-full !font-semibold !rounded-full'} >
                {text}
            </Button>
            : grayBtn ?
                <Button variant='outlined' color='info' className={'hover:!text-white !text-[#7D7D7D] !border-2 border-[#7D7D7D] whitespace-nowrap !text-sm bg-white hover:!bg-[#7D7D7D] !px-8 !py-2.5  !font-semibold !rounded-full'} >
                    {text}
                </Button>
                :
                <Button variant='outlined' className={'!text-white !border-none whitespace-nowrap !text-base !bg-gradient-to-r !px-8 !py-2.5  !from-themeYellow !to-themeOrange !font-medium !rounded-full'} >
                    {text}
                </Button>
    )
}

export default ThemeButton