import { data } from "@/app/data/Prayers";

const date = new Date();
const monthName = date.toLocaleString('default', { month: 'long' });


export default function DataTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border border-slate-200 lg:max-w-screen-lg lg:mx-auto " >
        <thead className="bg-slate-100 text-slate-700 font-bold text-lg text-center">
          <tr>
            <th className="px-4 py-2 border border-slate-200">  {monthName} </th>
            <th className="px-4 py-2 border border-slate-200">Day</th>
            <th className="px-4 py-2 border border-slate-200">Fajr</th>
            <th className="px-4 py-2 border border-slate-200">Zuhr</th>
            <th className="px-4 py-2 border border-slate-200">Asr</th>
            <th className="px-4 py-2 border border-slate-200">Maghrib</th>
            <th className="px-4 py-2 border border-slate-200">Isha</th>
          </tr>
        </thead>
        <tbody >
          {data.map((prayer, index) => (
            <tr key={index} className="border-b border-slate-200 even:bg-emerald-50 text-slate- shadow hover:bg-slate-100">
              <td className="px-4 py-2 border border-slate-200">{prayer.Date}</td>
              <td className="px-4 py-2 border border-slate-200">{prayer.Day}</td>
              <td className="px-4 py-2 border border-slate-200">{prayer.Fajr}</td>
              <td className="px-4 py-2 border border-slate-200">{prayer.Zuhr}</td>
              <td className="px-4 py-2 border border-slate-200">{prayer.Asr}</td>
              <td className="px-4 py-2 border border-slate-200">{prayer.Maghrib}</td>
              <td className="px-4 py-2 border border-slate-200">{prayer.Isha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
