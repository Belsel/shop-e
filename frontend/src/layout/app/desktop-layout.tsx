import React, { PropsWithChildren } from "react";
import { BreadcrumbItem, SaleItem } from "../../resources/js/types/types";
import Sidebar from "../../resources/js/components/sidebar";
import HeaderTabs from "../../resources/js/components/header";


export function AppLayoutTemplate({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const sidebarProp: SaleItem[] = [
        {
            id: "1",
            price: 100,
            product: {
                id: "p1",
                name: "Product 1",
                description: "Description for Product 1",
            },
        }];
    return (
        <>
            <div className="flex flex-row">
                <Sidebar sidebarProps={sidebarProp} />
                <div className="flex flex-col w-full">
                    <HeaderTabs breadcrumbs={breadcrumbs} />
                    {children}
                </div>
            </div>
        </>
    );
}
