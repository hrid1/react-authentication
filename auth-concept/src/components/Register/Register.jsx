import { FaGoogle } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        console.log("hellov avai")
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const reUser = result.user;
            console.log(reUser);
            setUser(reUser);
        })
        .catch(error => {
            const errorMessage = error.user;
            console.log(errorMessage);
        })
    }
 

  return (
    <div className="bg-gray-900 text-white flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96 md:w-4/6">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-4"
          >
            Login
          </button>

          <p className="text-center text-gray-300 mb-2">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="block text-center text-blue-500 font-semibold hover:text-blue-300 my-1"
          >
            Log in here
          </Link>

          <div className="flex justify-between ">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="bg-blue-800 text-white py-2 px-4 rounded-md flex gap-3 items-center justify-center w-full mb-2"
            >
              <span>
                <FaGoogle className="w-6 h-6 text"></FaGoogle>
              </span>
              <p className="text-gray-200">Sign in with Google</p>
            </button>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-900 text-white py-2 px-4 rounded-md flex gap-3 items-center justify-center w-full"
            >
              <span>
                <FaGithubSquare className="w-6 h-6 "></FaGithubSquare>
              </span>
              <p>Sign in with GitHub</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
