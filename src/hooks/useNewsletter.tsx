import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

type Status = "idle" | "loading" | "success" | "failed";

interface ValidatinResult {
    path: string;
    msg: string;
}

export const useNewsletter = () => {

    const [status, setStatus] = useState<Status>("idle");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<ValidatinResult[]>();

    const signup = async (email: string) => {
        setStatus("loading");
        try {
            const res = await fetch(`${API_URL}/newsletter/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            });

            if (!res.ok) {
                throw new Error("Falha ao assinar a newsletter.");
            }

            const data = await res.json();
            setStatus("success");
            return data;

        } catch (error) {
            console.error("Erro no signup:", error);
            setStatus("failed");
        }
    };

    return {
        status,
        message,
        errors,
        signup
    };
};