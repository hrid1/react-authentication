import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome to Our Website
      </h1>
      <p className="text-lg text-white mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        dignissim neque ut velit varius, nec ultrices lorem tristique.
      </p>
      <div className="flex">
        <Link
          to='/login'
          className="bg-white text-blue-500 font-bold py-2 px-4 rounded-md mr-4 hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Login
        </Link>
        <a
          href="#"
          className="bg-white text-blue-500 font-bold py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
