// src/pages/HomePage.tsx
import { useState } from "react";

export default function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Test app</h1>
        </div>
    );
}
