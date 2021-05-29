import React from 'react';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Sidebardata =[
    {
        tittle :"Profile",
        icon:<PermIdentityIcon/>,
        
    },
    {
        tittle :"Setting",
        icon:< SettingsRoundedIcon/>,
        
    },{
        tittle :"About",
        icon:<InfoIcon />,
        
    },
    {
        tittle :"Log out",
        icon:< ExitToAppIcon />,
        
    }
]