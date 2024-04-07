import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {

  // const authInfo = useContext(AuthContext);
  // console.log(authInfo);
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to Our Website</h1>
          <p className="text-lg text-gray-300 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere semper nisl, id viverra elit ultricies non. Nulla facilisi.</p>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-4">Login</Link>
          <Link to="/register" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md">Register</Link>
        </div>
      </div>
    );
};

export default Home;