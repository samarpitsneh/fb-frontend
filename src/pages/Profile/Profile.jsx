import React from 'react'
import './Profile.scss';

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';


import Posts from "../../components/posts/Posts"


const Profile = () => {
  return (
    <div className='profile'>
       <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
         
          <div className="center">
            <span>Sneh Samarpit</span>
            <p>6 friends</p>
          </div>
          <div className='buttons'>
          <button className='btn1' ><PersonAddIcon />add  friends</button>
          <button className='btn2'><MapsUgcIcon />message</button>
          </div>


          <hr />
          <div className="right">
            <div className="info">

                <span>Posts</span>
                <span>About</span>
                <span>Friends</span>
                <span>Photos</span>
                <span>Videos</span>
                <span>Check-ins</span>
                <span> More</span>
            </div>


              
              <MoreHorizIcon className='moreicon' />
              
          </div>
        </div>
      <Posts />
      </div>
    </div>
  )
}

export default Profile