import AppSidebarLayout from '@/layouts/app/app-sidebar-layout';
import { BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppLayout({
    children
}: PropsWithChildren<BreadcrumbItem>) {
    return <AppSidebarLayout >{children}</AppSidebarLayout>;
}
