import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import products from '@/routes/products'
import { Trash2, Pen } from 'lucide-react';


type Product = { id: number; name: string; price: number };

export function ProductItem({product, onEdit}: {product: Product; onEdit: (product: Product) => void}) {

    const {delete: destroy } = useForm();
      

    const handleDelete = (product: Product) => {
    destroy(products.destroy(product.id).url);
    };


    return (
            <div key={product.id} className="flex border rounded-xl flex-row p-2 h-fit">
                <img src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201811/14/00113333203761____2__1200x1200.jpg?impolicy=Resize&width=1200" alt=""className='w-12 h-12 border rounded-sm'></img>
                <div className='flex flex-col ml-1 w-full justify-start truncate'>
                    <Label className='text-base justify-start truncate'>{product.name}</Label>
                    <Label className="text-xs text-[var(--muted-foreground)] truncate">{product.price}€</Label>
                </div>
                <div className='flex flex-col w-1/7 justify-end ml-1 gap-0.5'>
                    <Button onClick={() => onEdit(product)} className='h-5 mb-0.5'><Pen></Pen></Button>
                    <Button variant={'destructive'} onClick={() => handleDelete(product)} className='h-5 mt-0.5'><Trash2></Trash2></Button>
                </div>
            </div>
    );
}