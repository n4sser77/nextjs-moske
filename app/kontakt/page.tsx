import ContactForm from "@/app/ui/components/ContactForm";

export default function Kontakt() {
    return (
        <>
         <h1 className="text-2xl text-slate-700 font-bold text-center mb-4">Kontakta Oss</h1>
         <hr className="m-2 w-48 mx-auto border border-slate-200 border-2"/>



        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2">
            
            <div className="text-center p-2 m-2 bg-white shadow rounded border border-slate-100">
                <p className="p-2 m-4 text-slate-700 text-lg ">
                    Har du frågor eller funderingar? Tveka inte att skicka ett meddelande till oss!
                    Vi är här för att hjälpa till. Om du upptäcker några buggar eller har tips på nya funktioner,
                    låt oss veta så att vi kan förbättra din upplevelse på vår webbplats.
                </p>
            </div>
            
            <ContactForm />

        </div>
        </>
       
    );
}

