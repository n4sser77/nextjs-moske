import { data } from "@/app/data/Prayers";

const date = new Date();
const monthName = date.toLocaleString('default', { month: 'long' });
const currentDay = new Date().getDate();


export default function DataTable() {
  //console.log(data[currentDay - 1]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border border-slate-200 lg:max-w-screen-lg lg:mx-auto">
        <thead className="bg-slate-100 text-slate-700 font-bold text-lg text-center">
          <tr>
            <th className="px-4 py-2 border border-slate-200">{monthName}</th>
            <th className="px-4 py-2 border border-slate-200">Day</th>
            <th className="px-4 py-2 border border-slate-200">Fajr</th>
            <th className="px-4 py-2 border border-slate-200">Zuhr</th>
            <th className="px-4 py-2 border border-slate-200">Asr</th>
            <th className="px-4 py-2 border border-slate-200">Maghrib</th>
            <th className="px-4 py-2 border border-slate-200">Isha</th>
          </tr>
        </thead>
        <tbody>
          {data.map((day, index) => (
            <tr
              key={index}
              className={`border-b border-slate-200 
              ${
                (day.Date !== currentDay) ? 'odd:bg-gray-300' :

                (day.Date === currentDay) ? 'bg-green-400 text-white text-bold' : ''

                } 

                 text-slate- shadow hover:bg-gray-slate-100`
              }

            >


              <td className="px-4 py-2 border border-slate-200">{day.Date}</td>
              <td className="px-4 py-2 border border-slate-200">{day.Day}</td>
              <td className="px-4 py-2 border border-slate-200">{day.Fajr}</td>
              <td className="px-4 py-2 border border-slate-200">{day.Zuhr}</td>
              <td className="px-4 py-2 border border-slate-200">{day.Asr}</td>
              <td className="px-4 py-2 border border-slate-200">{day.Maghrib}</td>
              <td className="px-4 py-2 border border-slate-200">{day.Isha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
