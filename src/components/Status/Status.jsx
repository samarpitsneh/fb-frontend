import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import "./Status.scss"

import LiveTvIcon from '@mui/icons-material/LiveTv';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';

const Status = () => {

  const {currUser} = useContext(AuthContext);
  
  return (

    <div className='status'>
      
        <div className='text'>
          <img src={currUser.profilePic}></img>
          <input placeholder={`whats on your mind, ${currUser.name}?`}></input>
        </div>
        <hr />
        <div className='icon-list'>
            <div className='icons'>
              <LiveTvIcon className='icon1' />
              <span>Live video</span>
            </div>

            <div className='icons'>
              <InsertPhotoOutlinedIcon className='icon2' />
              <span>Photo/video</span>
            </div>

            <div className='icons'>
              <InsertEmoticonOutlinedIcon className='icon3' />
              <span>Feeling/activity</span>
            </div>

        </div>
      
    </div>

  )

}

export default Status