import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-[#0b0f1a] text-white">

            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[calc(100vh-72px)] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
                    }}
                />
                <div className="absolute inset-0 bg-black/65" />

                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Shaping Future Leaders
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10">
                            Premium education with career-focused training
                        </p>
                        <Link
                            to="/placements"
                            className="inline-block rounded-full bg-blue-500 px-8 py-4 font-semibold text-black hover:bg-blue-400 transition"
                        >
                            View Placements
                        </Link>
                    </div>
                </div>
            </section>

            {/* ================= ABOUT SECTION ================= */}
            <section className="py-20 px-6 text-center bg-gradient-to-b from-[#0b0f1a] to-[#0e1425]">
                <h2 className="text-3xl font-bold mb-6">About Our College</h2>
                <p className="max-w-3xl mx-auto text-gray-300 text-lg">
                    Elite College delivers world-class education, innovation, and
                    excellent placement opportunities.
                </p>
            </section>

            {/* ================= CAMPUS GALLERY ================= */}
            <section className="py-20 px-6 bg-[#0e1425]">
                <h2 className="text-3xl font-bold text-center mb-14">
                    Campus Gallery
                </h2>

                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Card 1 */}
                    <GalleryCard
                        title="Modern Classrooms"
                        img="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
                    />

                    {/* Card 2 */}
                    <GalleryCard
                        title="Digital Library"
                        img="https://images.unsplash.com/photo-1519682337058-a94d519337bc"
                    />

                    {/* Card 3 */}
                    <GalleryCard
                        title="Innovation Labs"
                        img="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
                    />

                    {/* Card 4 */}
                    <GalleryCard
                        title="Student Life"
                        img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
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

/* ================= GALLERY CARD COMPONENT ================= */
function GalleryCard({ title, img }: { title: string; img: string }) {
    return (
        <div className="overflow-hidden rounded-xl bg-[#0b0f1a] shadow-lg hover:-translate-y-2 transition">
            <img
                src={img}
                alt={title}
                className="h-44 w-full object-cover"
            />
            <div className="p-4 text-center">
                <p className="text-blue-400 font-medium">{title}</p>
            </div>
        </div>
    );
}
