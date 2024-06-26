
import AdminCalendar from "./AdminCalendar";
import React from 'react';

export interface Booking {
    title: string;
    phoneNumber: string;
    email: string;
    selectedSlot: string;
    selectedDate: {
        selectedDay: number;
        currentMonth: number;
        currentYear: number;
    };
}

const bookings: Booking[] = [
    {
        title: "Naser Qahtan Al-Asbahi",
        phoneNumber: "0736383393",
        email: "nasserqahtan0@gmail.com",
        selectedSlot: "13:45 ",
        selectedDate: {
            selectedDay: 27,
            currentMonth: 6,
            currentYear: 2024
        }
    },
    {
        title: "Qahtan Al-Asbahi",
        phoneNumber: "0736383393",
        email: "qahtan0@gmail.com",
        selectedSlot: "17:00 ",
        selectedDate: {
            selectedDay: 25,
            currentMonth: 6,
            currentYear: 2024
        }
    }
];

export default function AdminSection() {
    return (
        <div className="bg-gray-100 py-4">
            <div className="overflow-x-auto shadow-md ">
                <table className="min-w-full bg-white border border-gray-300 ">
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
                                
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.title}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.email}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.phoneNumber}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{item.selectedSlot}</td>
                                <td className="px-6 py-4 border-b border-gray-300 text-sm text-left">{`${item.selectedDate.selectedDay}/${item.selectedDate.currentMonth}/${item.selectedDate.currentYear}`}</td>
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
}
