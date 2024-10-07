"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const NewIssuePage = () => {
  // Define the form interface
  interface IssueForm {
    title: string;
    description: string;
  }

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>();

  // Handle form submission
  const onSubmit = async (data: IssueForm) => {
    try {
      const response = await axios.post("/api/issues", data);
      console.log("Issue created successfully:");
      // Optionally, reset the form or display a success message
    } catch (error) {
      console.error("Error creating issue:", error);
      // Optionally, handle error response and display an error message
    }
  };

  return (
    <div className="min-h-screen  items-center ">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md ">
        <h2 className="text-2xl font-bold mb-4">Create New Issue</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
              className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter the issue title"
            />
            {errors.title && (
              <span className="text-red-500">{errors.title.message}</span>
            )}
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
                minLength: {
                  value: 255,
                  message: "Description must be at least 255 characters",
                },
              })}
              className={`border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter the issue description"
              // rows="4"
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIssuePage;
