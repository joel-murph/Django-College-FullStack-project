export default function Placements() {
    return (
        <div className="bg-[#0b0f1a] text-white min-h-screen">

            {/* ================= PLACEMENT CELL ================= */}
            <section className="py-20 px-6 text-center bg-gradient-to-b from-[#0b0f1a] to-[#0e1425]">
                <h1 className="text-4xl font-bold mb-6">Placement Cell</h1>

                <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
                    Elite College has a dedicated placement cell that trains students in
                    technical skills, aptitude, communication, and industry readiness.
                    <br />
                    Regular workshops, mock interviews, coding bootcamps, and corporate
                    mentoring sessions are conducted throughout the year.
                </p>

                {/* Stats Cards */}
                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    <StatCard
                        title="Top Recruiters"
                        value="Amazon, Infosys, TCS, Accenture, Google"
                    />
                    <StatCard title="Highest Package" value="₹15 LPA" />
                    <StatCard
                        title="Placement Success"
                        value="92% students placed consistently"
                    />
                </div>
            </section>

            {/* ================= PLACEMENT HIGHLIGHTS ================= */}
            <section className="py-20 px-6 bg-[#0e1425]">
                <h2 className="text-3xl font-bold text-center mb-14">
                    Placement Highlights
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    <StatCard
                        title="Top Recruiters"
                        value="Amazon, Infosys, TCS, Google"
                    />
                    <StatCard title="Highest Package" value="₹15 LPA" />
                    <StatCard title="Placement Rate" value="92% Students Placed" />
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="py-6 text-center text-sm text-gray-400 bg-[#0b0f1a]">
                © 2026 Elite College | All Rights Reserved
            </footer>
        </div>
    );
}

/* ================= STAT CARD COMPONENT ================= */
function StatCard({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <div className="rounded-xl bg-[#11172b] p-8 text-center shadow-lg hover:-translate-y-2 transition">
            <h3 className="text-blue-400 font-semibold text-lg mb-3">
                {title}
            </h3>
            <p className="text-gray-200">{value}</p>
        </div>
    );
}
