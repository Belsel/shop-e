import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosError } from "axios";

interface UseFetchOptions extends AxiosRequestConfig {
    method?: "GET" | "POST" | "PUT" | "DELETE";
}

interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useFetch<T = unknown>(url: string, options?: UseFetchOptions) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.request<T>({
                url,
                method: options?.method || "GET",
                ...options,
            });
            setData(response.data);
            setError(null);
        } catch (err) {
            const axiosError = err as AxiosError;
            setError(axiosError.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return { data, loading, error, refetch: fetchData } as UseFetchResult<T>;
}
