import React from 'react'
import "./Header.css";
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Fab from '@mui/material/Fab';
const Header = () => {
    return (
        <div className='header'>
            <a className="logo" href="#">
                <img className='header_icon' src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" alt='Logo' />
            </a>
            <div className='header_right'>
                <button className='extended_1' >
                    <p>Become a host</p>
                </button>

                <IconButton>
                    <LanguageIcon />
                </IconButton>



                <button className='extended_2' >
                    <DehazeIcon sx={{ mr: 1 }} />
                    <AccountCircleIcon />
                </button>


            </div>
        </div>
    )
}

export default Header