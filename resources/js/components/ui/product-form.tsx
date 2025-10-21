import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import products from '@/routes/products';

export default function ProductForm() {

  const { data, setData, post } = useForm({
    name: '',
    price: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting form with data:', data);
    post(products.store().url);
  };

  return (
    <div className="group" data-collapsible="menu">
      <form onSubmit={handleSubmit}>
        <Label className="block mb-2 font-bold">Create new product</Label>
        <div className="flex flex-row gap-1">
          <Input
            type="text"
            placeholder="Product name"
            className="w-2/3 border rounded-2xl p-2 text-xs"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          <Input
            type="number"
            placeholder="Price"
            className="w-1/3 border rounded-2xl p-2 text-right text-xs"
            value={data.price}
            onChange={(e) => setData('price', e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        <Button
          type="submit"
          className="mt-4 bg-[var(--sidebar-accent)] text-[var(--sidebar-accent-foreground)] px-4 py-2 rounded"
        >
          Create new product
        </Button>
      </form>
    </div>
  );
}
