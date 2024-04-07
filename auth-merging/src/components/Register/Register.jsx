import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e => {
      e.preventDefault();
      console.log('form submit');
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
      const auth
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 ">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden w-3/5">
          <div className="md:flex">
            <div className="w-full p-4">
              <h1 className="text-xl font-semibold mb-4 text-white">Register</h1>
              <form onSubmit={ handleRegister }>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
                  <input name="name" type="text" id="name" placeholder="Enter your name" className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
                  <input name="email" type="email" id="email" placeholder="Enter your email" className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-300 font-bold mb-2">Password</label>
                  <input name="password" type="password" id="password" placeholder="Enter your password" className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 bg-gray-700 text-gray-200" required />
                </div>
                
                <div>
                  <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600">Register</button>
                </div>
              </form>
              <p className="mt-4 text-sm text-gray-400">Already have an account? <Link to='/login' className="text-blue-600 hover:underline">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default Register;