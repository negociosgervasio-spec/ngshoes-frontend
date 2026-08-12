import { useEffect, useState } from "react";


export interface Cart {
    id: string;
    name: string;
    price: number;
    image: string;
    size: string;
    color: string;
    quantity: number;
};

export  const useCart = () => {

    const [cart, setCart] = useState<Cart>();

    console.log(cart);

    useEffect(() => {
        const stored = localStorage.getItem("Carrinho") || [];

        if (!stored) {
            const item = JSON.parse(stored) as Cart;
            console.log(stored)
            setCart(item);
        }
    }, [cart]);

    const addToCart = (cart: Cart) => {
        localStorage.setItem("Carrinho", JSON.stringify(cart));
    };

    return {
        cart,
        addToCart
    }
};