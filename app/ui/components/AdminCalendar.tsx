'use client';
import { useState } from 'react';





function getWeekNumber(date: Date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000 + firstDayOfYear.getDay() - 1;
    return Math.ceil((pastDaysOfYear - date.getDay() + 1) / 7);
}

function getCurrentWeekDates(startDate: Date) {
    const startOfWeek = new Date(startDate);
    console.log('start of week: ' + startOfWeek);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1);
    return Array.from({ length: 7 }, (_, i) => new Date(startOfWeek.getTime() + i * 86400000));
}


const today = new Date().getDate();
console.log( 'current date: '+ today);


interface Booking {
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

interface CalendarProps {
    bookings: Booking[];
}

export default function Calendar({ bookings }: CalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const currentWeekNumber = getWeekNumber(currentDate);
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weekDates = getCurrentWeekDates(currentDate);

    console.log( 'week dates: '+  weekDates);



    const bookedDates = bookings.map(booking => {
        return (new Date(booking.selectedDate.currentYear,
            booking.selectedDate.currentMonth,
            booking.selectedDate.selectedDay));
    });

    const handlePreviousWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 7);
        setCurrentDate(newDate);
    };

    const handleNextWeek = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 7);
        setCurrentDate(newDate);
    };

    return (
        <div className="w-full bg-emerald-200 p-6 mt-6 mb-4 h-auto shadow-lg rounded-lg">
            <div className='flex flex-col'>
                {/* Week number */}
                <div className="text-center font-bold text-xl mb-4">
                    Vecka {currentWeekNumber}
                    {' '}
                    {(currentDate.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' })).charAt(0).toUpperCase()
                     +
                     currentDate.toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' }).slice(1)
                     }
                    
                </div>
                
                <div className="flex justify-between mb-4">
                    <button onClick={handlePreviousWeek} className="bg-white px-4 py-2 rounded-md shadow-md">Last Week</button>
                    <button onClick={handleNextWeek} className="bg-white px-4 py-2 rounded-md shadow-md">Next Week</button>
                </div>
                {/* Days of the week header */}
                <div className="w-full flex flex-row justify-between px-3 py-2 bg-slate-100 border-b border-gray-300 rounded-t-lg">
                    {weekDays.map((day, index) => (
                        <div
                            key={index}
                            className="w-1/7 text-center font-semibold text-gray-700"
                        >
                            {day}
                        </div>
                    ))}
                </div>
                {/* Days of week body */}
                <div className="w-full flex flex-row justify-between px-3 py-2 bg-white border-t border-gray-300 h-auto">
                    {weekDates.map((date, index) => {
                        const isBooked = bookedDates.includes(weekDates[index]);

                        const booking = bookings.find(booking => {
                            return (
                                (booking.selectedDate.selectedDay).toString() === (date.getDate()).toLocaleString('sv-SE', { day: '2-digit' } as any ).toString() &&
                                (booking.selectedDate.currentMonth).toString() === (date.getMonth()).toLocaleString('sv-SE', { month: '2-digit' } as any ).toString() &&
                                (booking.selectedDate.currentYear).toString() === (date.getFullYear()).toString()
                            );
                        });

                        return (
                            <div
                                key={index}
                                className="w-1/7 text-center my-auto border border-gray-200 bg-white p-4 rounded-lg hover:bg-gray-100 flex flex-col items-center justify-center"
                            >
                                <div className="text-xl font-bold text-gray-800">
                                    {date.getDate()}
                                </div>
                                <div>
                                    {isBooked ? <div className="text-sm text-gray-600 font-bold">Booked</div> : null}
                                    {isBooked && booking ? <div className="text-sm text-gray-600">{booking.title}</div> : null}
                                    {today === weekDates[index].getDate() ? <div className="text-sm text-blue-600 font-bold">Today</div> : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
