import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M7 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h4a1 1 0 0 1 .97 1.243l-2.5 10A1 1 0 0 1 18.5 18H5.5a1 1 0 0 1-.97-.757l-2.5-10A1 1 0 0 1 2 6h4V4zm2 0v2h6V4H9zm-3.5 4l2 8h8.999l2-8H5.5z" />
        </svg>
    );
}
