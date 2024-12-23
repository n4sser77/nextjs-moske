'use client';
import React, { useState, useEffect } from 'react';
import AdminSection from './AdminSection';
import { useRouter } from 'next/navigation';

export default function AdminInput() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (username: string, password: string) => {
    setIsLoading(true);
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    setIsLoading(false);

    if (response.ok) {
      router.push('/admin'); // Redirect to the admin page after successful login
    } else {
      const data = await response.json();
      setMessage(data.message || 'Login failed');
    }
  };

  const handleSignUp = async (username: string, password: string) => {
    setIsLoading(true);
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    setIsLoading(false);

    if (response.ok) {
      router.push('/admin'); // Redirect to the admin page after successful login
    } else {
      const data = await response.json();
      setMessage(data.message || 'Sign Up failed');
    }
  };

  const handleSubmitL = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    handleLogin(username, password);
  };

  const handleSubmitS = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    handleSignUp(username, password);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitL} className='m-4 p-6 grid'>
          <input
            className='mb-4 p-2 rounded-md lg:w-64 mx-auto text-center'
            type="text"
            placeholder="Enter username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            required
          />
          <input
            className='mb-4 p-2 rounded-md lg:w-64 mx-auto text-center'
            type="password"
            placeholder="Enter password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className='mb-4 p-2 rounded-md lg:w-64 mx-auto text-center'
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && <p>{message}</p>}
        <p className="mt-2 p-3">Please sign in with your admin credentials</p>

        <form onSubmit={handleSubmitS} className='m-4 p-6 grid'>
          <input
            className='mb-4 p-2 rounded-md lg:w-64 mx-auto text-center'
            type="text"
            placeholder="Enter username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
            required
          />
          <input
            className='mb-4 p-2 rounded-md lg:w-64 mx-auto text-center'
            type="password"
            placeholder="Enter password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className='mb-4 p-2 rounded-md lg:w-64 mx-auto text-center'
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
