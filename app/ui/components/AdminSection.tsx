import Card from "@/app/ui/components/Card";
import AdminCalendar from "./AdminCalendar";
export default function AdminSection() {
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
    const bookings = [
        {
            title: "Naser Qahtan Al-Asbahi",
            phoneNumber: "0736383393",
            email: "nasserqahtan0@gmail.com",
            selectedSlot: "3:00 PM",
            selectedDate: {
                selectedDay: 26,
                currentMonth: 5,
                currentYear: 2024
            }
        },
        {
            title: " Qahtan Al-Asbahi",
            phoneNumber: "0736383393",
            email: "qahtan0@gmail.com",
            selectedSlot: "7:00 PM",
            selectedDate:  {
                selectedDay: 24,
                currentMonth: 5,
                currentYear: 2024
            }
        }

    ]

    return (
        <div className="bg-gray-100 py-2">

            <div >
                {bookings.map((booking, index) => (
                    <Card
                        key={index}
                        title={booking.title}
                        phoneNumber={booking.phoneNumber}
                        email={booking.email}
                        selectedSlot={booking.selectedSlot}
                        selectedDate={booking.selectedDate.currentYear + "-" + booking.selectedDate.currentMonth + "-" + booking.selectedDate.selectedDay}

                    />
                ))}
            </div>
            <div>
                <AdminCalendar bookings={bookings}/>
            </div>
        </div>
    )
}