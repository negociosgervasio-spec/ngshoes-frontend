import { useEffect, useState } from "react";

interface User {
    id: string;
    name: string;
    email: string;
}

export const useUser = () => {

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const stored = localStorage.getItem("User");
        if (stored) {
            const storedUser = JSON.parse(stored);
            setUser(storedUser);
        }
    }, []);

    const saveUser = (payload: User) => {
        localStorage.setItem("User", JSON.stringify(payload));
    };

    const removeUser = () => {
        localStorage.removeItem("User");
    }

    {
        return {
            user,
            saveUser,
            removeUser
        }
    }
};