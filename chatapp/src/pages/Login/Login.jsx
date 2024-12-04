import React, {useState} from 'react'
import Image from '../../assets/image'
import './login.css'


const Login = () => {
  
  const [action, setAction] = useState("SignUp")
  return (
    <div className='login'>
      <img src={Image.Soup} alt="" className='logo' />
      <form className='login-form'>
        <h2>{action}</h2>
          <input type="text" placeholder='username' required/>
          {action==="SignUp"?<input type="email" placeholder='Email' required />: null}
          
          <input type="password" placeholder='password' required />
          {action==="Login"?<p className='login-toggle'>Forgot password <span>click here</span></p>:null}
          <button type='submit'>{action}</button>
          {action==="Signup"?<div  className='login-term'>
            <input type="checkbox" required/>
            <p>Agree to the terms of use  & privacy policy</p>
          </div>:null}
          
          <div className='login-forgot'>
            {action==="Login"?<p className='login-toggle'>Dont have an account <span onClick={()=>setAction("SignUp")}>Create one</span></p>
            :<p className='login-toggle'>Already have an account<span onClick={()=>setAction("Login")}>click here!</span></p>}
            
          </div>
          </form>
    </div>
  )
}

export default Login
