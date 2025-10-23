import { useState } from 'react';
import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    const [hover, setHover] = useState(false);

    return (
        <div onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)} className='flex flex-row'>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div
                className="ml-1 grid flex-1 text-left text-sm"
            >
                <svg
                    viewBox="0 0 300 60"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-auto"
                    aria-label="Shop-E logo"
                >
                    <g>
                        <text
                            x="0"
                            y="45"
                            fontFamily="'Segoe UI', 'Helvetica Neue', sans-serif"
                            fontSize="40"
                            fontWeight="bold"
                            fill="var(--color-primary-foreground)"
                            stroke={hover ? 'var(--color-primary-foreground)' : 'var(--color-primary)'}
                            strokeWidth="2"
                            letterSpacing="2"
                        >
                            Shop-E !
                        </text>
                    </g>
                </svg>
            </div >
        </div >
    );
}
