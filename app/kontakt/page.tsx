import ContactForm from "@/app/ui/components/ContactForm";

export default function Kontakt() {
    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-4xl text-slate-700 font-bold text-center mb-10">Kontakta Oss</h1>
            <hr className="w-24 mx-auto border-2 border-slate-200 mb-10" />

            <div className="bg-gradient-to-r from-sky-50 to-sky-100 p-8 shadow-lg rounded-lg mb-10 mx-auto max-w-3xl">
                <div className="text-center text-slate-700 text-xl">
                    Har du frågor eller funderingar? Tveka inte att skicka ett meddelande till oss!
                    Vi är här för att hjälpa till. Om du upptäcker några buggar eller har tips på nya funktioner,
                    låt oss veta så att vi kan förbättra din upplevelse på vår webbplats.
                </div>
            </div>

            <div className="mx-auto max-w-3xl bg-white p-8 shadow-lg rounded-lg">
                <ContactForm />
            </div>
        </div>
    );
}
