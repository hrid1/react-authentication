import { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const { createUser, loginwithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(createUser);

    const handleRegister = e => {
        e.preventDefault();
        // const name = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate('/')
        })
        .catch(error => {
            console.log(error.message)
        })

     
    }

    //   handle google sign in


    const handleGoogleLogin = () => {

        loginwithGoogle()
        .then(res => {
            console.log(res.user)
            navigate('/')
            
        })
        .catch(error => {
            console.log(error.message);
        })

    }

     

    return (
        <div className="bg-gray-800 text-white">
        <div className="flex min-h-screen justify-center items-center">
          <div className="w-full max-w-md p-8 bg-gray-700 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
  
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="username" className="text-sm mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="px-3 py-2 rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>
  
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
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
                Register
              </button>
            </form>

            <div className="text-center mt-4">
              <span>New Here? </span>
              <Link to='/login' className="text-blue-500 hover:underline">
                Register Now
              </Link>
         </div>
         <div className="flex gap-4 items-center justify-center mt-2">
            <button onClick={handleGoogleLogin}  className="btn">Sign with Google</button>
            <button className="btn">Sign with Github</button>
         </div>
          </div>
        </div>
      </div>
    );
};

export default Register;