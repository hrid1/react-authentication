import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../../firebase/firebase.config";

const Login = () => {
  const authInfo = useContext(AuthContext);
  const { loginUser } = authInfo;
  
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(auth, email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error.message);
        })
    }

    return (
        <div className="max-w-md mx-auto bg-gray-900 rounded-lg overflow-hidden md:max-w-lg mt-10">
        <div className="md:flex">
          <div className="w-full p-4">
            <h1 className="text-xl font-semibold mb-4">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input name="email" type="email" id="email" placeholder="Enter your email" className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input name="password" type="password" id="password" placeholder="Enter your password" className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500" required />
                <a href="#" className="text-sm text-blue-600 hover:underline mt-1 block">Forgot your password?</a>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Login</button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Create an new account? <Link to='/register' className="text-blue-600 dark:text-blue-400 hover:underline">Register now</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;