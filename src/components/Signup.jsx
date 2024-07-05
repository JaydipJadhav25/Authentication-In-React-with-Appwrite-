import { useState  } from "react";
import { useDispatch } from "react-redux";
import "./signup.css"
import { createUser } from "../redux/slices/user";
// import {useNavigation} from "react-router-dom"

export const Signup = () => {
const[data , setData] =useState();
const dispatch = useDispatch();


function inputhandler(e){
  setData({...data , [e.target.name] :e.target.value});
  console.log(data);
    
}

function hanlderSubmit(e){
  e.preventDefault()
  console.log("data : " , data);
  dispatch(createUser(data));
  
}

  return (
    <div className="container">
       <div className="login wrap">
  <div className="h1">SignUp</div>
 {/* <form onSubmit={hanlderSubmit}> */}
             
  <input pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" 
  placeholder="Name" 
  id="name" name="name" type="text"
  onChange={inputhandler}
  />
  
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
  {/* </form> */}
</div>
    </div>
  )
}

export default Signup;