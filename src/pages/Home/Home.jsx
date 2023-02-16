import React from 'react'
import Posts from '../../components/posts/Posts'
import Status from '../../components/Status/Status'
import Story from '../../components/Story/Story'
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Story />
      <Status />
      <Posts />
    </div>
  )
}

export default Home