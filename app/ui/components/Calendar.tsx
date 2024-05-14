import React, { useState } from 'react';

interface DateObject {
  selectedDay: number;
  currentMonth: number;
  currentYear: number;
}

interface CalendarProps {
  onDateSelect: (date: DateObject) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelect }) => {
  const [date, setDate] = useState<DateObject>({
    selectedDay: 0,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
  });

  const handleBooking = (day: number) => {
    const newDate = { ...date, selectedDay: day };
    setDate(newDate);
    onDateSelect(newDate); // Call the callback function with the selected date
  };



const changeMonth = (increment: number) => {
  setDate((prevDate) => {
    let newMonth = prevDate.currentMonth + increment;
    let newYear = prevDate.currentYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    return {
      ...prevDate,
      currentMonth: newMonth,
      currentYear: newYear,
    };
  });
};


  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
    'Jul', 'August', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const getTotalDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateDaysOfMonth = () => {
    const { currentMonth, currentYear } = date;
    const totalDays = getTotalDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysOfMonth = [];

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
      daysOfMonth.push({ day: i, weekday });
    }

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysOfMonth.unshift(null);
    }

    return daysOfMonth;
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button type="button" onClick={() => changeMonth(-1)}
          className="px-3 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Previous Month
        </button>
        <h1 className="text-2xl font-bold">{months[date.currentMonth]} {date.currentYear}</h1>
        <button type="button" onClick={() => changeMonth(1)}
          className="px-3 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Next Month
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold">{day}</div>
        ))}
        {generateDaysOfMonth().map((slot, index) => (
          <div key={index} className={`py-2 px-4 mb-1 bg-white rounded-md ${slot ? 'grid-place-items-center' : 'bg-gray-100'}`}>
            {slot && (
              <button
                type="button"
                onClick={() => handleBooking(slot.day)}
                className={`px-3 py-1 rounded-md focus:outline-none
                 ${date.selectedDay === slot.day 
                  ? 'bg-green-600 text-white hover:bg-green-700 focus:bg-green-700' 
                  : 'bg-slate-100  hover:bg-white focus:ring-600 focus:bg-emerald-200'
                }`}
              >
                {slot.day}
              </button>
            )}
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold mt-4 mb-2">
          Selected Date:
          </h2>
        {date.selectedDay && (
          <p className="py-2 px-4 bg-gray-200 rounded-md">
            {months[date.currentMonth]} {date.selectedDay}, {date.currentYear}
          </p>
        )}
      </div>
    </div>
  );
};

export default Calendar;