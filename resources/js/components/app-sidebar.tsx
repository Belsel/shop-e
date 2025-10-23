import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import { Link } from '@inertiajs/react';
import AppLogo from './app-logo';
import ProductForm from './ui/product-form';

type Product = { id: number; name: string; price: number };

export function AppSidebar({ products = [] }: { products?: Product[] }) {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {(products || []).map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.price}€</p>
                    </div>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <ProductForm></ProductForm>
            </SidebarFooter>
        </Sidebar>
    );
}
