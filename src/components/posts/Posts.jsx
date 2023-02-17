import React from 'react'
import Post from '../post/Post'
import "./Posts.scss"

const Posts = () => {

  const posts = [
    {
      id: 1,
      name:"sneh samarpit",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam id vel, quisquam magni officiis autem repellendus nemo sapiente doloribus?",
      img : "https://images.pexels.com/photos/4409969/pexels-photo-4409969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name:"sneh samarpit",
      userId: 2,
      profilePic: "https://images.pexels.com/photos/5199158/pexels-photo-5199158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nam id vel, quisquam magni officiis autem repellendus nemo sapiente doloribus?"
    }
  ]


  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts