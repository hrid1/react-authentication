

const Error = () => {
    return (
        <div className="bg-gray-900 h-screen flex flex-col justify-center items-center">
            <div className="max-w-md text-center">
                <h1 className="text-5xl font-bold text-gray-200 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-200 mb-4">Page Not Found</h2>
                <p className="text-gray-300 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
                <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Go to Home</a>
            </div>
        </div>
    );
};

export default Error;