import { useState } from "react";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state of error and success
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("")

  // handle submit form
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  }





  // email handling
  const handleEmail = e => {
    const email = e.target.value;
    console.log(email);
    setEmail(email);
  }

  // password handling
  const handlePassword = e => {
    const password = e.target.value;
    setPassword(password)

   
  // password validation  
    if(password.length<8){
      setError('Password must be 8 character !')
    }
    else if(!/.+[A-Z].+/.test(password)){
      setError('password must contain at least one capital letter')
      console.log(password)
    }
    else{
      setError('')
    }
   
  }
  




  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-gray-300 w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={handlePassword}
              value = {password}
              type="text"
              id="password"
              placeholder="Enter your password"
              className="p-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />
              {/* error message */}
          <div>
              {
                setError && <p className="text-sm text-red-500 font-semibold ">{error} </p>
              }
          </div>
          </div>
        
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account?{" "}
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
