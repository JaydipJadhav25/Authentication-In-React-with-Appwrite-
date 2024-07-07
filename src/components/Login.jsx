import "./signup.css"
import { useState  } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/user";
import {useNavigate} from "react-router-dom"


export const Login = () => {
  
  const[data , setData] =useState();
const dispatch = useDispatch();
const navigat = useNavigate()


function inputhandler(e){
  setData({...data , [e.target.name] :e.target.value});
  console.log(data);   
}

function hanlderSubmit(e){
  e.preventDefault()
  console.log("data : " , data);
  dispatch(loginUser(data))
  .then(() =>{
    console.log("user login done : " )
  })
  navigat("/")
  
}



  return (
    <div>

<div className="container">
       <div className="login wrap">
  <div className="h1">Login</div>
  
  <input pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" 
  placeholder="Email" 
  id="email" name="email" type="text"
  onChange={inputhandler}
  />
  <input placeholder="Password" id="password" 
  name="password" type="password"
  onChange={inputhandler}
  />
  <input value="Login" className="btn" type="submit"
  onClick={hanlderSubmit}
  />
</div>
    </div>
    </div>
  )
}

export default Login;
