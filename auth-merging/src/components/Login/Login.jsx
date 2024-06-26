import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  // const authInfo = useContext(AuthContext);
  const authInfo = useContext(AuthContext);
  const { loginUser } = authInfo;
  const navigate = useNavigate();
  

  const hanldeLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <h1 className="text-xl font-semibold mb-4 text-white">Login</h1>
            <form onSubmit={hanldeLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-300 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-300 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200"
                  required
                />
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline mt-1 block"
                >
                  Forgot your password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-400">
              Create an new account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
