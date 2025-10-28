import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import products from '@/routes/products';
import { useEffect } from 'react';
import { Plus } from 'lucide-react';
import { useSidebar } from './sidebar';

type Product = { id: number; name: string; price: number };

export default function ProductForm({ selectedProduct, onClear, }: { selectedProduct: Product | null; onClear: () => void }) {

  const { data, setData, post, put } = useForm({
    name: '',
    price: '',
  });

  useEffect(() => {
    if (selectedProduct) {
      setData({
        name: selectedProduct.name,
        price: selectedProduct.price.toString(),
      });
    } else {
      setData({ name: '', price: '' });
    }
  }, [selectedProduct, setData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct) {
      put(products.update(selectedProduct).url)
      onClear();
    }
    else {
      post(products.store().url);
      setData({ name: '', price: '' });
    }
  };

  const { setOpen } = useSidebar();

  return (
    <div className="group mt-5" data-collapsible="menu">
      <form onSubmit={handleSubmit}>
        <Label className="block mb-2 ml-2 font-bold group-data-[state=collapsed]:hidden">{selectedProduct ? 'Edit product' : 'Create new product'}
        </Label>
        <div className="flex flex-row gap-1">
          <Input
            type="text"
            placeholder="Product name"
            className="w-2/3 border rounded-2xl p-2 text-xs group-data-[state=collapsed]:hidden"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
          />
          <Input
            type="number"
            placeholder="Price"
            className="w-1/3 border rounded-2xl p-2 text-right text-xs group-data-[state=collapsed]:hidden"
            value={data.price}
            onChange={(e) => setData('price', e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        <div className='flex flex-row w-ful rounded py-2'>
          <Button
            type="submit"
            className="w-2/3 bg-[var(--accent)] text-[var(--sidebar-accent-foreground)] mx-0.5 group-data-[state=collapsed]:hidden"
          >
            {selectedProduct ? 'Edit product' : 'Create new product'}
          </Button>

          <Button
            onClick={() => { onClear(); setOpen(true); }}
            className="hidden w-full bg-[var(--accent)] text-[var(--sidebar-accent-foreground)] mx-1 group-data-[state=collapsed]:flex"
          >
            <Plus></Plus>
          </Button>
          <Button variant={"secondary"} className={`w-1/3 ${selectedProduct ? 'flex' : 'hidden'} mx-0.5`}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
