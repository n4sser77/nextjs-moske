'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Calendar from '@/app/ui/components/Calendar';





const BookingForm: React.FC = () => {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState(null);

  
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    selectedSlot: '',
    selectedDate: '',

  })

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
    setFormData({
      ...formData,
      selectedDate: date
    })
  };


  const availableTimeSlots = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
  ]

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // validate form data
    

    console.log(formData);

    try {
        const response = await fetch(`/api/book/`, {
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
    <div className=' flex justify-center'>
    <form onSubmit={handleSubmit} className='grid grid-cols-1'>
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className='m-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        className='m-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className='m-2 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
      />

 <Calendar onDateSelect={handleDateSelect} />

      <select
        value={formData.selectedSlot}
        onChange={(e) => setFormData({...formData, selectedSlot: e.target.value})}
        className='m-2 px-4 py-3 h-10 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
      >
        <option value="">Select a Time Slot</option>
        {/* You can dynamically populate options from availableTimeSlots array */}
        {availableTimeSlots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
        {/* Add more options here */}
      
        
        

      </select>
      <button
        type="submit"
        className='m-2 px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
      >
        Book Slot
      </button>
    </form>
    </div>
  );
};

export default BookingForm;
