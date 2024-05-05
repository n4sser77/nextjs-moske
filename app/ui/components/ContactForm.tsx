'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });


    const router = useRouter();

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    

    const handleSubmit = (path: string) => async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
        const response = await fetch(`/api/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log('Form submitted successfully');
        }
        if (!response.ok) {
            throw new Error('Failed to submit form');
        }

        // Redirect to a success page or display a success message
        router.push('/success');
    } catch (error) {
        console.error('Error submitting form:', error);

        // Handle error (e.g., display error message)
    }

};


    return (
        <div className="text-center py-8 mx-auto w-full pt-2 pb-2">
            <form className=" p-4 w-full" onSubmit={handleSubmit('contact')}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-medium text-slate-800">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        autoComplete="off"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-slate-200 rounded-md focus:outline-none focus:border-sky-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-medium text-slate-800">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-slate-200 rounded-md focus:outline-none focus:border-sky-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-medium text-slate-800">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        autoComplete="off"
                        rows={4}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full  rounded-md focus:outline-none focus:border-sky-600"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="inline-block bg-sky-600 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
