export default function Card ({ title, phoneNumber, email, selectedSlot, selectedDate }: any) {
    return (
        <div className=" mx-auto overflow-hidden shadow-lg bg-white w-11/12 scale-90 h-54">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <h1 className="text-gray-700 text-base">
                </h1>
                <p className="text-gray-700 text-base border-2 p-2">
                <span>Telefon:</span> {phoneNumber}
                </p>
                <p className="text-gray-700 text-base border-2 p-2">
                <span>Email:</span> {email}
                </p>
                <p className="text-gray-700 text-base border-2 p-2">
                <span>Tid:</span>  {selectedSlot}
                </p>
                <p className="text-gray-700 text-base border-2 p-2 ">
                <span>Datum:</span>  {selectedDate}
                </p>   
            </div>
        </div>
    )
}