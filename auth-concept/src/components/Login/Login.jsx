import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-900 p-8 rounded shadow-md w-80">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-4">Login</button>
            <div className="text-center">
              <p className="text-gray-600">Don't have an account?</p>
              <Link to='/register' className="text-blue-500 hover:text-blue-700">Sign up here</Link>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Login;<h1>Welcome to login page</h1>