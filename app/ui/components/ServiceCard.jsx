import Link from "next/link";
export default function ServiceCard ({ title, description, link }) 
{
    return (
      <div className="max-w-fitt 
      overflow-hidden
       m-4 grid grid-cols-1 
       lg:grid-cols-3 gap-4 
       items-center justify-center 
      shadow p-5 mb-4">
       <Link href={link} className=" text-xl bg-emerald-900 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">{title}</Link>
        <p>{description}</p>

        

       
      </div>
    );
  }
  