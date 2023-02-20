import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import "./Story.scss";



const stories = [
  {
    id: 1,
    name: "sneh samarpit",
    img: "https://images.pexels.com/photos/4409969/pexels-photo-4409969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "sneh samarpit",
    img: "https://images.pexels.com/photos/4409969/pexels-photo-4409969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "sneh samarpit",
    img: "https://images.pexels.com/photos/4409969/pexels-photo-4409969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "sneh samarpit",
    img: "https://images.pexels.com/photos/4409969/pexels-photo-4409969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  

]

const Story = () => {

  const {currUser} = useContext(AuthContext);
  return (
    <div className='stories'>

          <div className='story'>
              <img src= {currUser.profilePic} alt="img"/>
              <div className='create'>
                <button>+</button>
              </div>
          </div>
    

      {
        stories.map( story => (
          <div className='story'>
              <img src= {story.img} alt="img"/>
              <span>{story.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Story