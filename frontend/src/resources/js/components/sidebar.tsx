import { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white transition-all duration-300 
          ${isOpen ? "w-64" : "w-16"} flex flex-col`}
            >

                {/* Contenido del sidebar */}
                <nav className="flex-1">
                    <div> {isOpen ? "Shop-E!" : "E"}</div>
                    <ul className="space-y-2">
                        <li className="px-4 py-2 hover:bg-gray-700 rounded">
                            {isOpen ? "Dashboard" : "🏠"}
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 rounded">
                            {isOpen ? "Settings" : "⚙️"}
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700 rounded">
                            {isOpen ? "Profile" : "👤"}
                        </li>
                    </ul>
                </nav>
                {/* Toggle button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 focus:outline-none bg-amber-50"
                ></button>
            </div>


        </div>
    );
}