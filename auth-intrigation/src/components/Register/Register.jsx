import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const authInfo = useContext(AuthContext);
  const { creatUser } = authInfo;

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)
    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <h1 className="text-5xl text-center my-5 p font-semibold mb-4">
        Register now
      </h1>

      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-4">
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="block w-full px-3 py-2 border dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  name="name"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full px-3 py-2 border dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="block w-full px-3 py-2 border dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Login now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
