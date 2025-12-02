import { BreadcrumbItem } from "../types/types";

type HeaderProps = {
    breadcrumbs?: BreadcrumbItem[];
};

export default function HeaderTabs({ breadcrumbs = [] }: HeaderProps) {
    return (
        <div className="flex flex-col w-auto">
            <header className="bg-blue-600 text-white flex justify-between items-center px-6 py-3">
                <h1 className="text-lg font-bold">Shop-E!</h1>
                <nav className="flex space-x-4">
                    {breadcrumbs.map((breadcrumb) => (
                        <button key={breadcrumb.title}>
                            {breadcrumb.title}
                        </button>

                    ))}
                </nav>
            </header>
        </div >
    );
}
