import React, { useContext, useState } from 'react'
import './SignInForm.css';
import { Link, useNavigate } from 'react-router-dom';
import spinner from "./images/spinner2.gif";
import { loginDataContext } from '../context/loginData';
import { useGetUserData } from '../hooks/UserData';


export const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [responseJson , setResponseJson] = useState('')
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')
   const navigate = useNavigate();
   const [userData,setUserData] = useContext(loginDataContext)
   const [userLoginData, setUserLoginData] = useGetUserData("")


   const handleSubmit = async(e) => {
     e.preventDefault();
    //  console.log('Form submitted:', { email, password });
     setLoading(true)

    //  const response = await fetch("https://shopnow-r8ja.onrender.com/login", {
     const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        // mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password })
    });
  
    const json = await response.json();

    if(json.sucess){
      // setResponseJson(json)
      // setUserLoginData(json)
      // console.log(json.authToken)
      const userData= 
            {name:json.user.name,
              email:json.user.email,
              token:json.authToken
            }

      const saved = localStorage.setItem("userData", JSON.stringify(userData))
      setLoading(false)
      setError("")
      navigate('/')
      }
      else{
        setLoading(false)
       setError(json.error);
      }
      // console.log(json)
   };


  return (
    <>
    {loading?<div className="spinner loginSpinner"><img src={spinner} alt="" /></div>:""}
    <div className="formContainer">
    <form onSubmit={handleSubmit}>
      <h2>Log In Now</h2> 
<div className='error'>{error}</div>
      <label>
        <span>Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </label>
      <button type="submit">Log In</button>
      <Link to="/signup" className='signup'>New User/SignUp</Link>
    </form>
  </div>
  </>
  )
}
