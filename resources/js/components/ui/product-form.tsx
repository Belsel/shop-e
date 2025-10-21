import { useState } from "react";

type ProductFormProps = {
  onSubmit?: (data: { name: string; price: number }) => void;
};

export default function ProductForm({ onSubmit }: ProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numericPrice = parseFloat(price);
    if (onSubmit && !isNaN(numericPrice)) {
      onSubmit({ name, price: numericPrice });
    }
  };

  return (
    <div className="group" data-collapsible="menu">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-bold">Create new product</label>
        <div className="flex flex-row gap-1">
          <input
            type="text"
            placeholder="Product name"
            className="w-2/3 border rounded-2xl p-2 text-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <input
            type="number"
            placeholder="Price"
            className="w-1/3 border rounded-2xl p-2 text-right text-xs"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)] px-4 py-2 rounded"
          >
          Create new product
        </button>
      </form>
    </div>
  );
}
