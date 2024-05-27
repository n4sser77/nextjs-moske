'use client';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminAut() {
    const [adminCode, setAdminCode] = useState('');
    const [message, setMessage] = useState('');
    const [isPending, startTransition] = useTransition();
    const router = useRouter();


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <form
                action={
                    () => {
                        if (adminCode === process.env.NEXT_PUBLIC_ADMIN_CODE)
                            startTransition(() => {
                                //delay for 1 secound
                                
                                setTimeout(() => {
                                    setMessage('Signing in...');
                                    
                                }, 1000)
                                router.push('/admin-panel');
                                console.log(adminCode, process.env.ADMIN_CODE)
                            })
                            
                            else {
                                startTransition(() => {
                                    setMessage('Signing in...');
                                    setTimeout(() => {
                                        setMessage('Wrong admin code');
                                    }, 600);
                                    console.log(adminCode, process.env.ADMIN_CODE)
                                });
                            }

                            
                    }
                }
                className="bg-white p-6 rounded shadow-md"
            >
                <label className="text-slate-700 block mb-2">
                    Sign in with admin code
                </label>
                <input
                    type="text"
                    name="adminCode"
                    placeholder="Admin code"
                    value={adminCode}
                    onChange={(e) => setAdminCode(e.target.value)}
                    className="border border-gray-300 p-2 rounded w-full mb-4"
                />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isPending ? 'Signing In...' : 'Sign In'}
                </button>
                {message && <p className="mt-4 text-red-500">{message}</p>}
            </form>
        </div>
    );
}