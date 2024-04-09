
const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
      <p className="text-lg text-white mb-8">Have a question or feedback? Feel free to get in touch with us!</p>
      <div className="flex flex-col items-center text-white">
        <p className="mb-4">Email: example@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <footer className="text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
    );
};

export default Contact;