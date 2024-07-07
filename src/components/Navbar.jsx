import { Link  , useNavigate} from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {currentUser} from "../redux/slices/user"






export const Navbar = () => {
  
const [state , setState] = useState(true);

// const   {currentuser } = useSelector(s => s.auth)
  // console.log("navbar user: "  ,currentuser.cuurentuser && currentuser.cuurentuser.length , state)

  const dispatch = useDispatch();
  const navigation = useNavigate();

  
  



 


  

  
  const navItems = [
    {
      name : "home",
      path  : "/",
      user : true
    },
    {
      name : "login",
      path  : "/login",
      user : state
    },
    {
      name : "signup",
      path  : "/signup",
      user : state
    }
 

  ]









  
  return <>
        <div>
          


<nav className="bg-gray-500 dark:bg-gray-9000">

    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
             
                {/* <li>
              <Link to='/' className="text-gray-900 dark:text-white hover:underline">Home</Link>
                </li>
                <li>
                  <Link to='/signup'  className="text-gray-900 dark:text-white hover:underline" >SignUp</Link>
                </li>
                <li>
                   <Link  to='/login'  className="text-gray-900 dark:text-white hover:underline" >Login</Link>
                </li>
                <li> */}

                  {/* <button onClick={() =>{
                    setcount(count+1);
                    dispatch(counter());
                  }}>Counter({count})</button> */}

                {/* </li> */}

                 {/* {

               navItems.map((ele) =>
                    ele.user ? (
                      <li key={ele.name}>
                      <Link to={ele.path}  className="text-gray-900 dark:text-white hover:underline">{ele.name}</Link>
                    </li>

                    ) : null
              )

                 } */}


                 {
                  navItems.map((ele) =>
                   ele.user ? (
                    <button key={ele.name}
                    onClick={() =>
                       navigation(ele.path)
                      }
                    >{ele.name}</button>
                   ) 
                   : null
                  )
                 }
            </ul>
        </div>
    </div>
  

</nav>

        </div>
    
   
    
     
      </>
    
  
}

export default Navbar;
