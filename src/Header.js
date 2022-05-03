import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src="https://www.pngarts.com/files/3/Yellow-Add-To-Cart-Button-PNG-Image-Background.png"/>
        <div className='header_search'>
        <input className='header_searchInput' placeholder='Search Stopbuy' />
        <SearchIcon className="header_searchIcon" />
    </div>

    <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOn'>
                Hello Guest
            </span>
            <span className='header_optionLineTwo'>
                Sign In
            </span>
        </div>

        <div className='header_option'>
            <span className='header_optionLineOn'>
                Returns
            </span>
            <span className='header_optionLineTwo'>
                & Orders
            </span>
        </div>

        <div className='header_option'>
            <span className='header_optionLineOn'>
                Your
            </span>
            <span className='header_optionLineTwo'>
                Prime
            </span>
        </div>

        <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>

    </div>
    </div>

    
  )
}

export default Header