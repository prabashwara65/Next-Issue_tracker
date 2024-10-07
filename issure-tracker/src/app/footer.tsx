const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Garbage Waste Management</h3>
            <p className="text-gray-400">Helping the world stay clean and green.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <a href="/" className="text-gray-400 hover:text-white transition duration-200">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition duration-200">About Us</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition duration-200">Contact</a>
            <a href="/privacy" className="text-gray-400 hover:text-white transition duration-200">Privacy Policy</a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; 2024 Garbage Waste Management. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  