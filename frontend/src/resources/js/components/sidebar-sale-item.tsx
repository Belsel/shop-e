import { SaleItem } from "../types/types";
export function SidebarSaleItem({ sale, removeSaleItem }: { sale: SaleItem, removeSaleItem: (id: string) => void }) {
    return (
        <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
            <img src={sale.product.imageUrl} alt={sale.product.name} className="w-10 h-10 object-cover rounded mr-3" />
            <div className="flex flex-col">
                <span className="font-medium text-sm">{sale.product.name}</span>
                <span className="text-xs text-gray-500">${sale.price.toFixed(2)}</span>
            </div>
            <button onClick={() => removeSaleItem(sale.id)} className="ml-auto text-red-500 hover:text-red-700 text-sm">Remove</button>
        </div>
    );
}