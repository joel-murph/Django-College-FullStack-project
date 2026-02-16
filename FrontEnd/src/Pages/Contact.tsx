import { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({
        full_name: "",
        phone_number: "",
        email: "",
        requirement: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log(formData);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post(
                "http://127.0.0.1:8000/create/",
                formData
            );

            alert("Enquiry submitted successfully ✅");

            setFormData({
                full_name: "",
                phone_number: "",
                email: "",
                requirement: "",
            });
        } catch (error) {
            console.error(error);
            alert("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0b0f1a] text-white flex flex-col">

            {/* ================= CONTACT SECTION ================= */}
            <section className="flex-1 py-20 px-6 bg-gradient-to-b from-[#0b0f1a] to-[#0e1425]">
                <div className="max-w-5xl mx-auto">

                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-300 mb-12 max-w-2xl">
                        Reach out to Elite College for admissions, placements,
                        hostel facilities, or academic inquiries.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* ================= FORM ================= */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <Input
                                placeholder="Full Name"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="Phone Number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <textarea
                                name="requirement"
                                placeholder="Your Requirement"
                                rows={4}
                                value={formData.requirement}
                                onChange={handleChange}
                                className="w-full rounded-xl bg-[#11172b] border border-[#2a335a]
                                px-5 py-4 text-gray-200 placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-full bg-blue-500
                                text-black font-semibold text-lg
                                hover:bg-blue-400 transition disabled:opacity-50"
                            >
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>

                        {/* ================= CONTACT INFO ================= */}
                        <div className="space-y-6 text-gray-200 mt-6 md:mt-24">
                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 text-lg">📍</span>
                                <p>Chennai, Tamil Nadu</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 text-lg">📞</span>
                                <p>+91 98765 43210</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 text-lg">✉️</span>
                                <p>info@elitecollege.edu</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="py-6 text-center text-sm text-gray-400 bg-[#0b0f1a]">
                © 2026 Elite College | All Rights Reserved
            </footer>
        </div>
    );
}

/* ================= INPUT COMPONENT ================= */
function Input({
    placeholder,
    name,
    value,
    onChange,
}: {
    placeholder: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <input
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full rounded-xl bg-[#11172b] border border-[#2a335a]
            px-5 py-4 text-gray-200 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}
