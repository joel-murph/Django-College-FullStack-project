export default function Hostel() {
    return (
        <div className="bg-[#0b0f1a] text-white min-h-screen">

            {/* ================= STUDENT HOSTEL ================= */}
            <section className="py-20 px-6 text-center bg-gradient-to-b from-[#0b0f1a] to-[#0e1425]">
                <h1 className="text-4xl font-bold mb-6">Student Hostel</h1>

                <p className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
                    Elite College provides safe and comfortable hostel facilities for both
                    boys and girls within the campus.
                    <br />
                    The hostels are designed to offer a homely atmosphere with discipline,
                    security, and modern amenities.
                </p>

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    <InfoCard
                        title="Accommodation"
                        value="Well-ventilated furnished rooms with study desks"
                    />
                    <InfoCard
                        title="Security"
                        value="24/7 CCTV, wardens, biometric access"
                    />
                    <InfoCard
                        title="Facilities"
                        value="Mess, Wi-Fi, gym, indoor games, medical care"
                    />
                </div>
            </section>

            {/* ================= HOSTEL FACILITIES ================= */}
            <section className="py-20 px-6 bg-[#0e1425]">
                <h2 className="text-3xl font-bold text-center mb-14">
                    Hostel Facilities
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    <InfoCard
                        title="Rooms"
                        value="Fully furnished, spacious rooms"
                    />
                    <InfoCard
                        title="Security"
                        value="24/7 CCTV & biometric entry"
                    />
                    <InfoCard
                        title="Food & Wi-Fi"
                        value="Healthy meals & high-speed internet"
                    />
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="py-6 text-center text-sm text-gray-400 bg-[#0b0f1a]">
                © 2026 Elite College | All Rights Reserved
            </footer>
        </div>
    );
}

/* ================= CARD COMPONENT ================= */
function InfoCard({
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
