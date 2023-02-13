import React ,{useState}from "react";
import "./Login.css"

const Login=()=>
{
    const[state,setstate]=useState({
        username:"",
        password:"",
    })
    const handleChange=(event,id)=>{
        setstate({
            ...state,
            [id]:event.target.value,
        })
    }
    const handleSubmit=()=>{
        const{username,password}=state;
        console.log("username",username);
        console.log("password",password);
        
    }
    const{username,password}=state;
    return(
        <div className="Log">
            <h2>Login</h2>
            <input type="text" value={username} onChange={(event)=>{handleChange(event,"username")}} placeholder="user name"/>
            <input type="password" value={password} onChange={(event)=>{handleChange(event,"password")}} placeholder="password"/>
            <button onClick={()=>handleSubmit()}>submit</button>
        </div>
    );
}
export default Login;