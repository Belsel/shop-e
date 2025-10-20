import { SidebarTrigger } from '@/components/ui/sidebar';
import { NavItem } from '@/types';
import { NavMain } from './nav-main';
import { dashboard } from '@/routes';
import { NavFooter } from './nav-footer';
import { NavUser } from './nav-user';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

export function AppSidebarHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <NavMain items={mainNavItems} />
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </div>
        </header>
    );
}
