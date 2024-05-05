import OmIslamText from "../data/omIslamData"

export default function OmIslam() {
    return (
        <section className="bg-gray-100 py-4 lg:py-8 max-w-screen-lg mx-auto md:shadow " >
            <h1 className="text-2xl text-slate-700 font-bold text-center mb-6 py-9 shadow bg-slate-100 ">{OmIslamText.title}</h1>

            <div className=" px-4 py-2">
                {OmIslamText.paragraphs.map((paragraph, index) => (
                    <div key={index} className="bg-slate-100 p-2 m-4">
                     <p key={index} className="my-4 text-slate-700 md:text-lg p-2 ">{paragraph}</p>
                     </div>
                ))}
                <hr/>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-3 p-2  ">
                    <h1 className="text-2xl text-slate-700 font-bold text-center mb-6">  Grund Pillarna</h1>
                    <hr/>
                    <p className=" p-2 m-4 text-slate-700 text-md">
                         De viktiga aspekterna av islam är de fem pelarna, som utgör grunden för tro och praxis för varje troende muslim. Dessa pelare inkluderar:
                        </p>
                    {
                        OmIslamText.pillars.map((pillar, index) => (
                            <ol className=" bg-slate-100 p-2 m-4 shadow rounded ">
                                <li key={index} className="text-slate-700 m-2 p-2  ">{pillar.label}</li>
                                <li className="text-slate-700 text-sm p-2 ">{pillar.description}</li>
                            </ol>

                        ))
                    }
                </div>
            </div>

        </section>
    )
}
