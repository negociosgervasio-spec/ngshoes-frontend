import { useState } from "react";
import { useToken } from "./useToken";
import { useUser } from "./useUser";

const API_URL = import.meta.env.VITE_API_URL;

interface User {
    name?: string;
    email: string;
    password: string;
};

type Status = "idle" | "loading" | "success" | "failed";


export interface ValidationResult {
    path: string;
    msg: string;
}

export const useAuth = () => {

    const [status, setStatus] = useState<Status>("idle");
    const [errors, setErrors] = useState<ValidationResult[]>();
    const [message, setMessage] = useState("");

    const { saveToken } = useToken();

    const {saveUser} = useUser();

    const login = async (payload: User) => {

        setStatus("loading");

        try {
            const res = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("failed");

                console.log(data);

                if ("errors" in data) {
                    setErrors(data.errors);
                    return;
                }

                if ("msg" in data) {
                    setMessage(data.msg);
                    return;
                }
            }

            if ("token" in data) {
                saveToken(data.token);
            }

            if("user" in data) {
                saveUser(data.user);
            }

            setMessage(data.msg);

            setStatus("success");
        } catch (error) {
            setStatus("failed");
        }
    };

    const signup = async (payload: User) => {
        setStatus("loading");
        try {
            const res = await fetch(`${API_URL}/users/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("failed");
                if ("errors" in data) {
                    setErrors(data.errors);
                    return;
                }

                if ("msg" in data) {
                    setMessage(data.msg);
                    return;
                }
            }

            setMessage(data.msg);

            setStatus("success");
        } catch (error) {
            setStatus("failed");
        }
    }

    return {
        status,
        login,
        signup,
        errors,
        message
    }
};