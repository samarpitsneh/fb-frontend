import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import "./DropDownMenu.scss"
import { AuthContext } from '../../context/authContext';


import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpIcon from '@mui/icons-material/Help';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';


const DropDownMenu = () => {
    const {currUser} =useContext(AuthContext) ;

  return (
    <div className='dropDownMenu'>
        
        <div className='menu'>
          
          <div className='item pf'>
          <img src={currUser.profilePic} alt="profile pic"></img>
          <Link to={`/profile/djbdj`} style={{textDecoration:"none",color:"black"}}>
          <span>{currUser.name}</span>
          </Link>
          
          </div>
          <div className='item'>
          <SettingsRoundedIcon className='icons' />
          <span>Settings & privacy</span>
          
          </div>
          <div className='item'>
          <HelpIcon className='icons'/>
          
         <span> Help & support</span>
          
          </div>

          <div className='item'>
          <DarkModeIcon className='icons' />

          <span>Display & accessibility</span>
          
          </div>

          <div className='item'>
          <FeedbackIcon className='icons'/>
          <span>Give feedback</span>
          
          </div>

          <div className='item'>
          <LogoutIcon className='icons'/>
          <Link to={`/login`} style={{textDecoration:"none",color:"black"}}>
          <span>Log Out</span>
          </Link>
          
          </div>

          
        </div>

        <div className="links">
            <ul>
                <li>
                    <a href='/'>Privacy</a>
                    <span aria-hidden="true"> · </span>
                </li>

                <li >
                    <a href='/'>Terms</a>
                    <span aria-hidden="true"> · </span>
                </li>

                <li>
                <a href='/'>advertising</a>
                <span aria-hidden="true"> · </span>
                </li>

                <li>
                <a href='/'>Ad choices</a>
                <span aria-hidden="true"> · </span>
                </li>

                <li>
                <a href='/'>Cookies</a>
                <span aria-hidden="true"> · </span>
                </li>

                <li>
                <a href='/'>More</a>
                <span aria-hidden="true"> · </span>
                </li>

                <li>
                    <span>Meta © 2023</span>
                </li>
            </ul>
          </div>


        
    </div>
  )
}

export default DropDownMenu