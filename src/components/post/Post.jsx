import React from 'react'
import { Link } from 'react-router-dom';

import "./post.scss"

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


import { useState } from 'react';
import Comments from "../comments/Comments";

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className='post'>
        <div className='container'>
            <div className='user'>
                <div className='user-info'>
                    <Link to={`/profile/${post.userId}`}>
                        <img src={post.profilePic} /> 
                    </Link>

                    <div className='details'>
                    <Link to={`/profile/${post.userId}`} style={{textDecoration: "none"}}>
                        <span>{post.name}</span>
                        
                    </Link>
                    <p>1 min ago</p>
                    </div>
                </div>

            <MoreHorizOutlinedIcon />
            </div>

            <div className='content'>

                
                    <p>{post.desc}</p>
                 <img src={post.img} />
                
            </div>

            <hr />

            <div className='actions'>
                <div className='item'>
                    <ThumbUpOutlinedIcon />
                    <span>Like</span>
                </div>

                <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
                    <ChatBubbleOutlineOutlinedIcon />
                    <span>Comment</span>
                </div>

                <div className='item'>
                    <ShareIcon />
                    <span>Share</span>
                </div>
            </div>

            {commentOpen && <Comments />}
        </div>
    </div>
  )
}

export default Post;