import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";


const Register = () => {

    const {register} = useContext(AuthContext);


    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        register(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })


    }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md p-8">
      <h2 className="text-2xl text-gray-900 text-center font-bold mb-4">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            
            placeholder="Enter your name"
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
    
            placeholder="Enter your email"
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
           
            placeholder="Enter your password"
            className="appearance-none border rounded-md w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
