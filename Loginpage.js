import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Loginpage.css'

function Loginpage() {
    const navigate = useNavigate()
    const [uname , setUname] = useState('')
    const [pwd,setPwd] = useState('')
    

    const userName = useSelector(state=>state.login.userName)
    const passWord = useSelector(state=>state.login.password)

    const handleLogin = () => {
        if(uname === userName && pwd===passWord){
           navigate('/homePage')
        }
        else{
            alert('Incorrect details')
        }
      
    }
  return (
    <>

    <h1>Login</h1>
    <div className='login-main'>
    <div className='Login-container'>
       Enter username: <input type='text' placeholder='username' onChange={(e)=>setUname(e.target.value)}/><br /><br />
       Enter password:<input type='text' placeholder='password' onChange={(e)=>setPwd(e.target.value)}/><br /><br />
        <button onClick={handleLogin}>Login</button>
    </div>
    </div>
    </>
  )
}

export default Loginpage
