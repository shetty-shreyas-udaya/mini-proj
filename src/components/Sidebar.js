import React from 'react';
import './Sidebar.css';
import {Sidebardata} from './Sidebardata';


function Sidebar() {


    return(
        <div className = "SD_menu"><ul className = "SD_list">{Sidebardata.map((val,key) =>{
            return(
                <li key = {key} className = "row">
                    {""}
                    <div id = "icon">{val.icon}</div>
                    {""}
                    <div id = "tittle">{val.tittle}</div>
                </li>
            )
        })}</ul>
            
        </div>

    )
}

export default Sidebar;