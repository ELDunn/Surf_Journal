import React from 'react';
import "../styles.css";
import { SideBarData } from './SideBarData.jsx';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div id='titleBlock'>
            <div><RotateLeftIcon/></div>
            <h1>TURNS</h1>
        </div>
        <ul className='sidebarList'>
            {SideBarData.map((val,key)=> {
                return(
                    <li key = {key} id={key}className='sideBOptions' onClick = {()=> {
                        window.location.pathname = val.link
                        }}
                        >
                        <div>{val.icon}</div>
                        <div>{val.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Sidebar