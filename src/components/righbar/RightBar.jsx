import React from 'react';
import './RightBar.scss';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className='container'>
        <div className='contacts'>
          <div className='heading'>
            <span>Contacts</span>

            <div>
                <VideoCallIcon className='icon' />
                <SearchIcon className='icon' />
                <MoreHorizIcon className='icon' />
            </div>
          </div>

          <div className='item'>
          <img src='https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <span>sneh</span>
          </div>
          <div className='item'>
          <img src='https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <span>sneh</span>
          </div>
          <div className='item'>
          <img src='https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <span>sneh</span>
          </div>
          <div className='item'>
          <img src='https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <span>sneh</span>
          </div>

          <div className='item'>
          <img src='https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <span>sneh</span>
          </div>

          <div className='item'>
          <img src='https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
          <span>sneh</span>
          </div>
        </div>

        <div className='groups'>
          <div className='heading'>
            <span>Group conversations</span>
          </div>

          <div className='create-group'>
            <AddIcon className='icon'/>
            <span>Create New Group</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar