import React, { useContext } from 'react'
import './LeftBar.scss';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import StoreIcon from '@mui/icons-material/Store';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { AuthContext } from '../../context/authContext';

import { Link } from 'react-router-dom';
const LeftBar = () => {

  const {currUser} =useContext(AuthContext) ;
  return (
    <div className='leftbar'>
      <div className='container'>
      <div className='menu'>
          <div className='item-lb'>
            <HomeRoundedIcon className='icon' />
            <span>Home</span>
          </div>
          <div className='item-lb'>
          <img src={currUser.profilePic} alt="profile pic"></img>
          <Link to={`/profile/djbdj`} style={{textDecoration:"none",color:"black"}}>
          <span>{currUser.name}</span>
          </Link>
          
          </div>
        </div>
        
        <hr />

        <div className='menu'>
          <div className='item-lb'>
              <SmartDisplayRoundedIcon className='icon' />
              <span>watch</span>
          </div>

          <div className='item-lb'>
            <StoreIcon className='icon' />
            <span>MarketPlace</span>
          </div>

          <div className='item-lb'>
            <SportsEsportsIcon className='icon' />
            <span>Gaming</span>
          </div>

          <div className='link-lb'>
            <AppsRoundedIcon className='icon' />
            <span>See all</span>
          </div>
        </div>

        <hr />
        
        <div className='menu'>
          <div className='link-lb'>
            <PeopleRoundedIcon className='icon' />
            <span>See all groups</span>
          </div>
        </div>

        <hr />

        <div className='menu'>
          <div className='link-lb'>
            <InsertLinkIcon className='icon'/>
            <span>See all shortcuts</span>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default LeftBar