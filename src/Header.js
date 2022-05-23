import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';

import logo from './amazon.png';

import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
      if(user){
          auth.signOut();
      }
  }

  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo' src={logo} alt='logo' />
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text' />
            <SearchIcon className='header_searchIcon'/>
            {/* LOGO */}
        </div>
        <div className='header_nav'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className='header_optionLine1'>Hello Guest</span>
                    <span className='header_optionLine2'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionLine1'>Returns</span>
                <span className='header_optionLine2'>& Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLine1'>Your</span>
                <span className='header_optionLine2'>Prime</span>
            </div>
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketRoundedIcon />
                    <span className='header_optionLine2 header_basketCount'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header