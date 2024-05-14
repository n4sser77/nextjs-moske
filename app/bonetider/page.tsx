import PrayerTable from "@/app/ui/components/PrayerTable"
export default function Bonetider() {
    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 
                            'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
    const monthName = months[new Date().getMonth()];

    return (
        <div className="bg-gray-100">


        <div className="bg-emerald-600 py-1 w-full height-screen  ">
            <h1 className="text-2xl font-bold text-center text-white m-4">Bönetider</h1>
            
        </div>

        <PrayerTable monthName={monthName} />

        
        </div>
    )
}