import ContactForm from "@/app/ui/components/ContactForm";

export default function Kontakt() {
    return (
        < div>
         <h1 className="text-2xl text-slate-700 font-bold text-center mb-4">Kontakta Oss</h1>
         <hr className="m-2 w-48 mx-auto border border-slate-200 border-2"/>



        <div className="mx-auto  w-10/12 lg:mx-auto sm:w-full lg:w-6/12">
            
            <div className="text-center h-1/2 p-4 bg-white shadow rounded border border-slate-100 mb-4">
                <div className="text-slate-700 text-lg p-2">
                    Har du frågor eller funderingar? Tveka inte att skicka ett meddelande till oss!
                    Vi är här för att hjälpa till. Om du upptäcker några buggar eller har tips på nya funktioner,
                    låt oss veta så att vi kan förbättra din upplevelse på vår webbplats.
                </div>
            </div>
            
            <ContactForm />

        </div>
        </div>
       
    );
}

