import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { create } from '@/routes/products'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create a new product',
        href: create().url,
    },
];

export default function Index() {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className='m-4'>

            </div>
        </AppLayout>
    );
}
