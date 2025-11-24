import React, { PropsWithChildren } from "react";
import { BreadcrumbItem } from "../../resources/types/types";

export function AppLayoutTemplate({ children, breadcrumbs }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] | undefined }>) {
    return (
        <>
            <button className="btn btn-secondary mb-4">Desktop Layout Button</button>
            {children}
        </>
    );
}
