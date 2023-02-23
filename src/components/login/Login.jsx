import React, { useEffect,useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setloginName] = useState('')
  const [password, setpassword] = useState('')
  const [message, setMessage] = useState(null);

  const navigate=useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/')
    }
  },[])

  const login = (e) => {
    e.preventDefault()
    axios.post('https://dummyjson.com/auth/login', {
    username: 'kminchelle',
    password: '0lelplR',
    }).then(
      (res) => {

        localStorage.setItem('user_data', JSON.stringify(res.token));
        navigate('Dashboard');
        console.log(res)
        setMessage(res.message);
      },
      (err) => {
        console.log(err)
        alert(err);
      }
    )
    // username: 'kminchelle',
    // password: '0lelplR',
    

  }

  return (
    <div>
      <div className='login'>
        <div className='form'>
          <div>
            <h1 className='text-large'>Sign In</h1>
            <p className="text text-normal">New user? <span><Link to={"Signup"} className="text text-links">Create an account</Link></span></p>
          </div>
          <form className="signin">
            <input className='input-control' placeholder='Email Address' onInput={(e) => setloginName(e.target.value)}
              type="text"
              name="email"
              value={username}
            /><br />
            <input className='input-control' placeholder='Password' onInput={(e) => setpassword(e.target.value)}
              type="password"
              name="password" 
              value={password}
              /><br />
            <button className='input-submit' onClick={login}>
              Submit
            </button>
            {message && <div>{message}</div>}
          </form>
        </div>
      </div>
    </div>
  )
}

