import { useState } from "react";
import { SaleItem } from "../types/types";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [products, setProducts] = useState<SaleItem[]>(() => { return JSON.parse(localStorage.getItem("Sales") || "[]"); });
    const addNewProduct = () => {
        const newSale: SaleItem = {
            id: (products.length + 1).toString(),
            price: Math.floor(Math.random() * 100) + 1,
            /* Dummy product */
            product: {
                id: `p${products.length + 1}`,
                name: `Product ${products.length + 1}`,
                description: `Description for Product ${products.length + 1}`,
            },
        };
        setProducts([...products, newSale]);
        localStorage.setItem("Sales", JSON.stringify(products));
    }

    const addOrder = () => {
        alert("Order added!");
    }
    return (
        <>
            {/* Sidebar */}
            <div className={`${isOpen ? "bg-gray-800 w-64" : "bg-none w-0"} text-white transition-all duration-300 h-screen flex flex-col 
                    ${isOpen ? "w-64" : "w-0"} flex flex-col justify-around`}>
                <div className="flex justify-center my-2">
                    <div className="text-2xl py-0.5"> {isOpen ? "My order" : ""}</div>
                </div>

                {/* Contenido del sidebar */}
                <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900">
                    <ul className="space-y-2">
                        {products.map((sale: SaleItem) => (
                            <li key={sale.id} className="px-4 py-2 hover:bg-gray-700">
                                {isOpen ? sale.product.name : ""}
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* Toggle button */}
                {/* TODO: Change the button's text with proper icons*/}
                <div className="flex flex-nowrap p-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`${isOpen ? "auto px-4 py-3 h-fit p-1" : "fixed h-fit px-4 py-3 bottom-0 left-0"} m-2 bg-blue-600 text-white rounded-full focus:outline-none`}
                    >{isOpen ? "<" : ">"}</button >
                    <button
                        className={`${isOpen ? "auto" : "hidden"} bg-green-600 text-white rounded-full m-2 px-4 py-3 h-fit`}
                        onClick={() => addNewProduct()}>
                        +
                    </button>
                    <button
                        onClick={() => addOrder()}
                        className={`${isOpen ? "auto" : "hidden"} bg-red-600 w-full text-white rounded-full px-2 py-3 h-fit`}>
                        Add order
                    </button>
                </div>
            </div >
        </>
    );
}