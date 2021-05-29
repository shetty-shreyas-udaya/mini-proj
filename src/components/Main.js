import React from 'react';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import ListSharpIcon from '@material-ui/icons/ListSharp';
import './Main.css';


function Main(){
    

    return(
        <div className = "M_data">
<ul >
    <span id = "new-file-icon"> <AddSharpIcon/><a href = "/">new file</a></span>
    <span id = "file-icon"><ListSharpIcon /><a href = "/"> files</a>
    </span>
</ul>
        </div>
    )
}

export default Main;