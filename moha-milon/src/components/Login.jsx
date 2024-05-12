import { useContext } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";




const Login = () => {


    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate();
   

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        loginUser(email, password)
        .then( result => {
            console.log(result.user);
            e.target.reset();
            navigate('/');

            
        })
        .catch(error => {
            console.log(error.message);
        })

    }

  


    return (
        <div className="bg-gray-800 text-white">
        <div className="flex min-h-screen justify-center items-center">
          <div className="w-full max-w-md p-8 bg-gray-700 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
  
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="px-3 py-2 rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="px-3 py-2 rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
  
              <button type="submit" className="inline-block px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
                Login
              </button>
            </form>
  
            <div className="text-center mt-4">
              <span>New Here? </span>
              <Link to='/register' className="text-blue-500 hover:underline">
                Register Now
              </Link>
         </div>

       
          </div>
        </div>
      </div>
    );
};

export default Login;