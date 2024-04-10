import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

   const { user, logOut } = useContext(AuthContext);
   const handleLogout = () => {
      logOut()
      .then(()=> console.log("User Logout Successfully!"))
      .catch(error => console.log(error.message))
    
   }

    const navList = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/register'>Register</NavLink> </li>
        <li> <NavLink to='/login'>Login</NavLink> </li>
        <li> <NavLink to='/about'>About</NavLink> </li>
        <li> <NavLink to='/order'>Order</NavLink> </li>
        {
          user && 
          <>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/dashborad'>Dashboard</NavLink></li>
          </>
        }
    </>

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                navList
              }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            navList
           }
          </ul>
        </div>
        <div className="navbar-end">
          <a onClick={handleLogout} className="btn btn-sm">Button</a>
          {
            user && <p>{user.email}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
