'use client'

import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";

export default function AdminPage() {
  const [email, setEmail] = useState(""); // State to hold email
  const [password, setPassword] = useState(""); // State to hold password
  const [error, setError] = useState(""); // For error handling
  
  // Handle form submit
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    const loginRequest = { Email: email, Password: password };

    try {
      const res = await fetch("https://localhost:7168/login", {
        method: "POST", // Set method to POST
        headers: {
          "Content-Type": "application/json", // Indicate the request body type
        },
        body: JSON.stringify(loginRequest), // Send the email and password as JSON
      });

      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }

      const json = await res.json();
      console.log(json); // Log the successful response
      // Handle successful login (e.g., redirect or show success message)
      let token = json.token;
      localStorage.setItem('jwt',token)
      
    } catch (error: any) {
      console.error(error.message); // Handle error
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-slate-100 mx-2">
      <h1 className="text-2xl text-center text-slate-700 mt-7 p-4 font-bold">
        Admin Panel
      </h1>

      <div className="text-slate-700 text-lg text-center p-2 mb-2">
        {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-sm font-medium">Email</label>
            <input
              id="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Bind state to input
              className="mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Password" className="block text-sm font-medium">Password</label>
            <input
              id="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Bind state to input
              className="mt-1 p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
