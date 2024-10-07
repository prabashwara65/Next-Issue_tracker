"use client";

import Link from "next/link";
import { AiOutlineEnvironment } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
// import { usePathname } from 'next/navigation'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-green-600 mb-4">
          Waste Management System
        </h1>
        <p className="text-lg text-gray-700">
          Efficient and eco-friendly waste management for a cleaner tomorrow.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mb-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-green-500 text-3xl mb-3 flex justify-center">
            <FaTrashAlt />
          </div>
          <h3 className="text-xl font-bold mb-2">Track Garbage Collection</h3>
          <p className="text-gray-600">
            Monitor real-time garbage collection data from various areas to
            ensure timely and effective waste disposal.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-blue-500 text-3xl mb-3 flex justify-center">
            <AiOutlineEnvironment />
          </div>
          <h3 className="text-xl font-bold mb-2">Eco-Friendly Solutions</h3>
          <p className="text-gray-600">
            Promote recycling and reduce landfill waste by adopting sustainable
            waste management practices.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex gap-6">
        <Link href="/issues">
          <p className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-lg transition duration-200">
            Create New Issue
          </p>{" "}
        </Link>
        <Link href="/learn-more">
          <p className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-lg transition duration-200">
            Learn More
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
