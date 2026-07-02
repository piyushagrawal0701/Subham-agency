export default function Team() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-medium text-center mx-auto">Meet Our Team</h1>
                <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
                    <div className="flex flex-col hover:-translate-y-1 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600" alt="User Image" className="w-52 h-64 object-cover" />
                        <h3 className="text-lg font-medium text-slate-700 mt-2">Donald Jackman</h3>
                        <p className="text-sm text-indigo-600">Founder & CEO</p>
                    </div>
                    <div className="flex flex-col hover:-translate-y-1 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" alt="User Image" className="w-52 h-64 object-cover" />
                        <h3 className="text-lg font-medium text-slate-700 mt-2">Michael Brown</h3>
                        <p className="text-sm text-indigo-600">Head of Engineering</p>
                    </div>
                    <div className="flex flex-col hover:-translate-y-1 transition-all duration-300">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" alt="User Image" className="w-52 h-64 object-cover" />
                        <h3 className="text-lg font-medium text-slate-700 mt-2">Olivia Martinez</h3>
                        <p className="text-sm text-indigo-600">Product Designer</p>
                    </div>
                </div>
            </section>
        </>
    );
};