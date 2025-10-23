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
import { ProductItem } from './ui/product-item';

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
                    <ProductItem product={product}></ProductItem>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <ProductForm></ProductForm>
            </SidebarFooter>
        </Sidebar>
    );
}
