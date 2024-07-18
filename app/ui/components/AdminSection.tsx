'use client';
import { useEffect, useState } from 'react';
import AdminCalendar from './AdminCalendar';

export interface Booking {
  name: string;
  phoneNumber: string;
  email: string;
  selectedSlot: string;
  selectedDate: {
    selectedDay: number;
    currentMonth: number;
    currentYear: number;
  };
}

const AdminSection = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('/api/fetchBookings', {
          method: 'GET',
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-gray-100 py-4">
      <h2 className='text-center border-sky-50 font-mono text-5xl font-black m-4'>Hello Admin</h2>
      <div className="overflow-x-auto shadow-md">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Name</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Email</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Phone</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Slot</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.name}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.email}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.phoneNumber}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.selectedSlot}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{`${item.selectedDate.selectedDay}/${item.selectedDate.currentMonth+1}/${item.selectedDate.currentYear}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <AdminCalendar bookings={bookings} />
      </div>
    </div>
  );
};

export default AdminSection;
