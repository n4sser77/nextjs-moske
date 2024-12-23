import ContactForm from "@/app/ui/components/ContactForm";
import Link from "next/link";

export default function Kontakt() {
    return (
        <>
            <hr></hr>
            <h1 className="text-2xl text-slate-700 
            font-bold text-center mb-4 "
            >
                Skickat
            </h1>
            <hr className="m-2 w-48 mx-auto 
             border-slate-200 border-2"
            />
            <Link href="/">
                <div className=" w-11/12 text-center mb-6 p-4
             bg-emerald-400  shadow rounded
              text-white text-lg font-mono font-bold
               lg:w-6/12 mx-auto
               min-h-fit transition-all 
                hover:scale-105 hover:cursor-pointer

             ">
                    Tack!
                    
                    <h1 className="m-2 mt-1 p-2">
                        För att gå tillbaka till huvudsidan klicka här
                    </h1>
                </div>
            </Link>


        </>

    );
}

