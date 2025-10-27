    import { Label } from '@/components/ui/label';
    import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import products from '@/routes/products'

    type Product = { id: number; name: string; price: number };

    export function ProductItem({product}: {product: Product}) {

        const {delete: destroy } = useForm();
        

const handleDelete = (product: Product) => {
  destroy(products.destroy(product.id).url);
};


        return (
                <div key={product.id} className="flex border rounded-2x1 flex-row p-0.5 justify-between h-fit">
                    <img src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201811/14/00113333203761____2__1200x1200.jpg?impolicy=Resize&width=1200" alt=""className='max-w-1/8 max-h-1/2'></img>
                    <div className='flex flex-col pl-2'>
                        <Label className='text-sm'>{product.name}</Label>
                        <Label className="text-xs">{product.price}€</Label>
                    </div>
                    <div className='flex flex-col w-1/6'>
                        <Button className='h-1/4'>Edit</Button>
                        <Button onClick={() => handleDelete(product)} className='h-1/4 var(--color-danger)'>Remove</Button>
                    </div>
                </div>
        );
    }