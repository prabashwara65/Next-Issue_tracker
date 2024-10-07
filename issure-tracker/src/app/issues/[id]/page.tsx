"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
import axios from "axios";

interface Params {
    id: string;
}

const UpdateIssuePage = ({ params }:{ params: Params }) => {
    const router = useRouter();
    const { id } = params; // Accessing the id from params
    const [issue, setIssue] = useState({ title: "", description: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIssue = async () => {
            if (id) {
                try {
                    const response = await axios.get(`/api/issues/${id}`);
                    setIssue(response.data);
                } catch (error) {
                    console.error("Error fetching issue:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchIssue();
    }, [id]);

    const handleUpdate = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            await axios.put(`/api/issues/${id}`, { ...issue });
            router.push("/issues"); // Redirect to the issues list page after update
        } catch (error) {
            console.error("Error updating issue:", error);
        }
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className="min-h-screen items-center">
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Update Issue</h2>
                <form onSubmit={handleUpdate}>
                    {/* Title Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={issue.title}
                            onChange={(e) => setIssue({ ...issue, title: e.target.value })}
                            className="border rounded-md p-2 w-full"
                            placeholder="Enter the issue title"
                            required
                        />
                    </div>

                    {/* Description Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={issue.description}
                            onChange={(e) => setIssue({ ...issue, description: e.target.value })}
                            className="border rounded-md p-2 w-full"
                            placeholder="Enter the issue description"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateIssuePage;
