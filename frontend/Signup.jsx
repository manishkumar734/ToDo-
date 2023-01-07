import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"
function Signup() {
   const [data,setData] = useState({email :"",password:"",cpassword:""})
   const navigator=useNavigate();
   const onSubmit=(e)=>{
    e.preventDefault()
    if(data.password !==data.cpassword){
        return alert(`password doesn't match`)
    }
fetch("http://localhost:5000/api/v1/signup",{
    method:"post",
    headers:{
        "Content-Type" : "application/json"
    },
    body:JSON.stringify({
        email:data.email,
        password:data.password,
        confirmpassword:data.cpassword
    })
}).then(res=>res.json())
.then(data=>{console.log(data);
    if(data.message=="user already exist"){
        return alert("user already exist")
    }
    alert(`user signup successfully`)
    navigator("/");
})

    
}

    return (

        <>
        <div className="login-main" >
            <div className="login-box">
                <div className="login-logo">LOGO</div>
                <div className="login-para">Create New Account</div>
                <form className='login-form'>
                    <input className='login-input'  type="email" placeholder="Mail ID" name="email"  required  onChange={(e)=>{setData({...data,email:e.target.value})}} />
                    <input className='login-input'  type="password" placeholder="Password" name="password"  required onChange={(e)=>{setData({...data,password:e.target.value})}} />
                    <input className='login-input'  type="password" placeholder="Confirm Password" name="cpassword"  required onChange={(e)=>{setData({...data,cpassword:e.target.value})}} />
                    <button className='login-btn' type="submit" onClick={onSubmit} >Sign up</button>
                </form>
            </div>
            <div className='addition'>
            <a href='/'>Sign in</a>
            </div>
        </div>
        </>

    )
}








export default Signup