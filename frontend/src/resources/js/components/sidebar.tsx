import { useState } from "react";
import { SaleItem } from "../types/types";


type SidebarProps = {
    sidebarProps?: SaleItem[];
}

export default function Sidebar({ sidebarProps = [] }: SidebarProps) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            {/* Sidebar */}
            <div className={`${isOpen ? "bg-gray-800 w-64" : "bg-none w-0"} text-white transition-all duration-300 h-screen
                    ${isOpen ? "w-64" : "w-0"} flex flex-col`}>
                <div className="flex justify-center my-2">
                    <div className="text-2xl"> {isOpen ? "My order" : ""}</div>
                </div>
                <div className="flex flex-row h-screen"
                >

                    {/* Contenido del sidebar */}
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {sidebarProps.map((sale: SaleItem) => (
                                <li key={sale.id} className="px-4 py-2 hover:bg-gray-700">
                                    {isOpen ? sale.product.name : ""}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div >
                {/* Toggle button */}
                {/* TODO: Change the button's text with proper icons*/}
                <div className="flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${isOpen ? "auto px-4 py-3 h-fit p-1" : "fixed h-fit px-4 py-3 bottom-0 left-0"} m-2 bg-blue-600 text-white rounded-full focus:outline-none`}
                    >{isOpen ? "<" : ">"}</button >
                </div>
            </div >
        </>
    );
}