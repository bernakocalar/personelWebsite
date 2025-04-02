import TestAPI from "../services/api";

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-center text-center my-3.5 space-y-4 py-10 px-4 md:px-0">
        <h2 className="text-[#4731D3] text-3xl md:text-4xl">Send me a message!</h2>
        <p className="text-black text-lg md:text-2xl">Got a question or proposal, or just want to say hello? Go ahead.</p>
        <TestAPI />
      </section>
    
    )
};