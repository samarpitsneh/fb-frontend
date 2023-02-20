import React from 'react'
import { Link } from 'react-router-dom'


import './Login.scss'

const Login = () => {

  

  
  return (
    <div className='login'>
      <div className='card'>
            
        <div className='left-c'>
            <h1>facebook</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, rerum. Consequatur similique cumque accusamus 
                atque explicabo, dignissimos.</p>

                <span>
                don't you have an account?
            </span>
            <Link to="/register">
            <button>Sign Up</button>
            </Link>
            
        </div>
            

            
       
        <div className='right'>
            <h1>log in to facebook</h1>
            <form>
      
              <input type='text' placeholder='Username'></input>

              
              <input type='password' placeholder='password'></input>
              <Link to="/">
              <button>Login</button>
              </Link>
            </form>
        </div>

      </div>
    </div>
  )
}

export default Login