export function ProductItem({ product }: { product: { id: string; name: string; price: number; imageUrl: string } }) {
    return (
        <div className="border rounded p-4 hover:shadow-lg transition-shadow duration-200">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
    );
}