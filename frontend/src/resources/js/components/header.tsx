import { href } from "react-router-dom";
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
                        // Button that navigates to breadcrumb.href when clicked
                        <button key={breadcrumb.title} onClick={() => { breadcrumb?.href && (window.location.href = breadcrumb.href); }} className="hover:underline">
                            {breadcrumb.title}
                        </button>

                    ))}
                </nav>
            </header>
        </div >
    );
}
