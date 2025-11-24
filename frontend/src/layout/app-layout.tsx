import { AppLayoutTemplate } from "./app/desktop-layout";
import { type BreadcrumbItem } from "../resources/js/types/types";

interface AppLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate {...breadcrumbs ? { breadcrumbs } : {}} {...props}>
        {children}
    </AppLayoutTemplate>
);
