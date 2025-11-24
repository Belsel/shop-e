// src/pages/HomePage.tsx
import { useState } from "react";

export default function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Welcome to My App</h1>
            <p className="mb-2">Current count: {count}</p>
            <button
                className="btn btn-primary"
                onClick={() => setCount((c) => c + 1)}
            >
                Increment
            </button>
        </div>
    );
}
