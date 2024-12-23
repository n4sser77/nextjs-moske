import Link from "next/link";

export default function ServiceCard({ title, description, link }) {
  return (
    <div className="max-w-full overflow-hidden m-2 bg-white shadow-lg rounded-lg hover:shadow-2x hover:scale-105 transition-all">

      <Link href={link} className="block bg-emerald-900 hover:bg-emerald-600 text-white font-bold py-4 px-6">

        {title}

      </Link>
      
      <div className="p-4 text-slate-700 text-lg">
        {description}
      </div>

    </div>
  );
}
