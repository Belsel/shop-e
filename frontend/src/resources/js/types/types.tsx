export interface BreadcrumbItem {
    title: string;
    href?: string;
}

export type ProductItem = {
    id: string;
    name: string;
    description: string;
}

export type SaleItem = {
    id: string;
    price: number;
    product: ProductItem;
}