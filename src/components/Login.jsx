import "./signup.css"

export const Login = () => {
  return (
    <div>

<div className="container">
       <div className="login wrap">
  <div className="h1">Login</div>
  
  <input pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" 
  placeholder="Email" 
  id="email" name="email" type="text"/>
  <input placeholder="Password" id="password" 
  name="password" type="password"/>
  <input value="Login" className="btn" type="submit"/>
</div>
    </div>
    </div>
  )
}

export default Login;
