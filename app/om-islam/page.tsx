import OmIslamText from "../data/omIslamData";

export default function OmIslam() {
    return (
        <section className="bg-gray-100 py-8 max-w-screen-lg mx-auto shadow-lg rounded-lg">
            <h1 className="text-3xl text-slate-800 font-bold text-center mb-8 py-6 shadow-md bg-slate-200 rounded-t-lg">{OmIslamText.title}</h1>
            <div className="px-6 py-4">
                {OmIslamText.paragraphs.map((paragraph, index) => (
                    <div key={index} className="bg-white p-6 mb-6 shadow-md rounded-lg">
                        <h2 className="text-xl text-slate-800 font-bold mb-2">{paragraph.heading}</h2>
                        <p className="text-slate-700 text-lg">{paragraph.text}</p>
                    </div>
                ))}
                <hr className="my-8" />
                <div className="text-center">
                    <h2 className="text-2xl text-slate-800 font-bold mb-4">Grundpelarna</h2>
                    <p className="text-slate-700 text-md mb-6">
                        De viktiga aspekterna av islam är de fem pelarna, som utgör grunden för tro och praxis för varje troende muslim. Dessa pelare inkluderar:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {OmIslamText.pillars.map((pillar, index) => (
                            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
                                <h3 className="text-xl text-slate-800 font-bold mb-2">{pillar.label}</h3>
                                <p className="text-slate-700 text-md">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
