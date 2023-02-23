import React from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";

export default function Signup() {
    return (
        <div>
            <div className='Signup'>
                <div className='form'>
                    <div>
                        <h1 className='text-large'>Sign Up</h1>
                        <p className="text text-normal">Already have an account? <span><Link to={"/"} className="text text-links">Login</Link></span></p>
                    </div>
                    <form className="signin">
                        <input className='input-control' placeholder='Username'
                            type="text"
                            name="username"
                        /><br />
                        <input className='input-control' placeholder='Email Address'
                            type="email"
                            name="email"
                        /><br />
                        <input className='input-control' placeholder='Password'
                            type="password"
                            name="password"
                        /><br />
                          <input className='input-control' placeholder='Confirm Password'
                            type="password"
                            name="Confirm-password"
                        /><br />
                        <button className='input-submit' >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
