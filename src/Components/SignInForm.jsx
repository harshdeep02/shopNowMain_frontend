import React, { useEffect, useState } from 'react';
import './SignInForm.css';
import { Link, useNavigate } from 'react-router-dom';
import spinner from "./images/spinner2.gif";

const SignInForm = () => {

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [responseJson , setResponseJson] = useState('')
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')
   const navigate = useNavigate();
 

   
   const handleSubmit = async (e) => {
     e.preventDefault();

      setLoading(true)

      // const response = await fetch("https://shopnow-r8ja.onrender.com/signup", {
      const response = await fetch("http://localhost:5000/signup", {
         method: "POST",
        //  mode: 'no-cors',
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({name, email, password })
     });

     const json = await response.json();
     
     if(json.sucess){
         setResponseJson(json)
         setLoading(false)
         navigate('/login')
         setError("")
      }
      else{
         setLoading(false)
         setError(json.errors);
        }
      
     
};

   return (
      <>
      {loading?<div className="spinner loginSpinner"><img src={spinner} alt="" /></div>:""}
     <div className="formContainer">
       <form onSubmit={handleSubmit}>
         <h2>Sign Up</h2>
         <div className='error'>{error}</div>
         <label>
           <span>Name:</span>
           <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Enter your name"
           />
         </label>
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
         <button type="submit">Register</button>
         <Link to="/login" className='loginText'>Log In</Link>
       </form>
     </div>
     </>
   );
 };

export default SignInForm;
