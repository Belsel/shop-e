export interface BreadcrumbItem {
    title: string;
    href?: string;
}

export interface ProductItem {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
}

export type SaleItem = {
    id: string;
    price: number;
    product: ProductItem;
    link?: string;
}

export interface Store {
    id: string;
    name: string;
    imageUrl?: string;
}