import { Link } from "react-router-dom";

export const Navbar = () => {
  return <>
        <div>
          


<nav className="bg-gray-500 dark:bg-gray-9000">

    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
               <li>
              <Link to='/' className="text-gray-900 dark:text-white hover:underline">Home</Link>
                </li>
                <li>
              <Link to='/' className="text-gray-900 dark:text-white hover:underline">Home</Link>
                </li>
                <li>
                  <Link to='/signup'  className="text-gray-900 dark:text-white hover:underline">SignUp</Link>
                </li>
                <li>
                   <Link  to='/login'  className="text-gray-900 dark:text-white hover:underline" >Login</Link>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        </div>
    
   
    
     
      </>
    
  
}

export default Navbar;
