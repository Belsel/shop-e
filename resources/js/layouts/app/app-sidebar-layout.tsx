import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppHeader } from '@/components/app-header';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { type PropsWithChildren } from 'react';
import { usePage } from '@inertiajs/react';

interface Product {
    id: number;
    name: string;
    price: number;
}

export default function AppSidebarLayout({
    children,
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const { products } = usePage<SharedData & { products: Product[] }>().props;

    return (
        <AppShell variant="sidebar">
            <AppSidebar products={products} />
            <AppContent variant="sidebar" className="overflow-x-hidden">
                <AppHeader />
                {children}
            </AppContent>
        </AppShell>
    );
}
