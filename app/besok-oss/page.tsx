import BookingForm from "@/app/ui/components/BookingForm";

export default function BesokOss() {
    return (
        <div className="md:w-10/12 lg:w-8/12 mx-auto sm:w-full ">
            <h1 className="text-2xl bg-white text-slate-700 font-bold text-center">Besök oss</h1>
            <hr className="m-2 w-48 mx-auto border border-slate-200 border-2"/>
            <h3 className="text-1xl text-slate-700 font-bold text-center mb-6">Vill ni  besöka oss?</h3>
            <div className=" text-center p-2 m-2 bg-slate-100 w-64 mx-auto">
                Välj en tid och boka ett besök
            </div>
            <BookingForm />
        </div>
    )
};
