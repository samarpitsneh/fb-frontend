import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'
const Register = () => {
  return (
    <div className="register">
        <h1>facebook</h1>
        <div className='card'>
            <div className='top'>
                <h2>Create a new account</h2>
                <p>It's quick and easy.</p>
            </div>

            
            <div className='bottom'>
                <form>
                    <input type='text' placeholder='Username'></input>
                    <input type='email' placeholder='email'></input>
                    <input type='password' placeholder='password'></input>
                    <input type='text' placeholder='Name'></input>

                    <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                    <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>

                    <button className='register-btn'>Sign Up</button>
                    
                    <Link to='/login'>
                    <button className='login-btn'>Already have an Account?</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register