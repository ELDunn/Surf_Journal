import React from 'react'
import TsunamiIcon from '@mui/icons-material/Tsunami';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BookIcon from '@mui/icons-material/Book';
import SurfingIcon from '@mui/icons-material/Surfing';
import LogoutIcon from '@mui/icons-material/Logout';


export const SideBarData =  [
    {
        title:'New Entry',
        icon:<BeachAccessIcon/>,
        link: '/'
    },
    {
        title:'Surf Log',
        icon:<BookIcon />,
        link: '/Page2'
    },
    {
        title:'Surf Statistics',
        icon:<SurfingIcon />,
        link: '/Page3'
    },
    {
        title:'Current Conditions',
        icon:<TsunamiIcon />,
        link: '/Page1'
    },
    {
        title:'Logout',
        icon:<LogoutIcon />,
        link: '/logout'
    }
]