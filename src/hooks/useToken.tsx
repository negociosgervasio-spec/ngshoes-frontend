import { useEffect, useState } from "react";


export const useToken = () => {

    const [token, setToken] = useState("");

    useEffect(() => {
        const storedToken = localStorage.getItem("Token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const saveToken = (value: string) => {
        setToken(value);
        localStorage.setItem("Token", value);
    };

    const clearToken = () => {
        localStorage.removeItem("Token");
    }

    return {
        token,
        saveToken,
        clearToken,
    };
};
