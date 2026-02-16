import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="w-full bg-gradient-to-b from-black to-[#0b0f1a] shadow-md">
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-xl font-bold tracking-wide">
                    <span className="text-white">Elite</span>
                    <span className="text-blue-500">College</span>
                </div>

                {/* Links */}
                <div className="flex gap-8 text-sm font-medium text-gray-300">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-blue-500 pb-1"
                                : "hover:text-white transition"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/placements"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-blue-500 pb-1"
                                : "hover:text-white transition"
                        }
                    >
                        Placements
                    </NavLink>

                    <NavLink
                        to="/hostel"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-blue-500 pb-1"
                                : "hover:text-white transition"
                        }
                    >
                        Hostel
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-white border-b-2 border-blue-500 pb-1"
                                : "hover:text-white transition"
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
