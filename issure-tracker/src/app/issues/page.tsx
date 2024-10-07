"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link"; // Import Link for navigation

// Define the Issue type
interface Issue {
  id: number;
  title: string;
  description: string;
}

const IssuesList = () => {
  // Define the state with the correct type
  const [issues, setIssues] = useState<Issue[]>([]);

  // Fetch issues from the API
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get("/api/issues");
        setIssues(response.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };

    fetchIssues();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-center">Issues List</h2>
        
        {/* New Issue Button */}
        <div className="mb-4 text-center">
          <Link href="/issues/new">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200">
              Add New Issue
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {issues.map((issue) => (
            <div key={issue.id} className="bg-white shadow-md rounded-md p-4">
              <h3 className="text-lg font-semibold mb-2">{issue.title}</h3>
              <p className="text-gray-700">{issue.description}</p>
              
              {/* Update Button */}
              <div className="mt-4">
                <Link href={`/issues/${issue.id}`}>
                  <button className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 transition duration-200">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssuesList;
