// src/pages/HomePage.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductItem } from "../resources/js/types/types";

export default function HomePage() {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        axios.get<ProductItem[]>("/api/products")
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            }).catch((error) => {
                console.error("Error fetching products:", error);
            }).finally(() => {
                setLoading(false);
            });
    }, []);
    return (
        <div className="p-4">
            {/*Fetch products from the back end */}
        </div>
    );
}
