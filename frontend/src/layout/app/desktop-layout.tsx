import React, { PropsWithChildren } from "react";
import { BreadcrumbItem, SaleItem } from "../../resources/js/types/types";
import Sidebar from "../../resources/js/components/sidebar";
import HeaderTabs from "../../resources/js/components/header";


export function AppLayoutTemplate({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <>
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <HeaderTabs breadcrumbs={breadcrumbs} />
                    {children}
                </div>
            </div>
        </>
    );
}
