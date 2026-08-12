import { ChevronDown, ChevronRight, Dot, DotIcon, Menu, MenuIcon, Search, SearchIcon, ShoppingCart, User, X } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { products } from "../data/products"
import { useToken } from "../hooks/useToken";
import { useCart } from "../pages/context/CartContext";
import { useState } from "react";



const SmallNavbar = () => {
    const [showCat, setShowCat] = useState(false);

    const categories = [...new Set(products.map(p => p.category))];

    const [expand, setExpand] = useState(false);

    const {token} = useToken();

    const { cart } = useCart();

    const totalQuantity = cart.reduce((acc, c) => acc + c.quantity, 0);

    return (
        <nav className="flex items-center justify-between">
            <div className={`${expand ? "absolute inset-0 top-0 right-0 z-20 flex flex-col gap-6 h-screen w-11/12 p-6" : "hidden"} bg-zinc-900 `}>
                <div className="flex gap-6 items-center justify-between">
                    <button type="button" onClick={() => setShowCat(!showCat)} className="p-4 flex gap-1 items-center">
                        <p>Categorias</p>
                        <ChevronDown size={16} className={`${showCat ? "rotate-90 transition-discrete duration-300" : ""}`} />
                    </button>

                    <button type="button" onClick={() => setExpand(false)} className={`${expand ? "block justify-self-end" : "hidden "}`}>
                        <X size={24} />
                    </button>
                </div>

                <ul className={`${showCat ? "flex flex-col gap-3" : "hidden"}`}>
                    {categories.map((category) => (
                        <li key={category} onClick={() => setExpand(false)} className="px-12">
                            <Link to={`/categoria/${category}`} className="capitalize">{category}</Link>
                        </li>
                    ))}
                </ul>

                <ul className="flex flex-col gap-3 p-6">
                    <li onClick={() => setExpand(false)}><a href="#promocoes">Promoções</a></li>
                    <li onClick={() => setExpand(false)}><a href="#novidades">Novidades</a></li>
                </ul>
            </div>

            <div className={`${expand ? "bg-black/30 absolute inset-0 z-10 h-screen w-screen" : "hidden"}`}>

            </div>

            <Link to={"/"} className="p-2 bg-zinc-900 rounded text-orange-400 ">Ng</Link>

            <ul className="flex items-center gap-6 mr-16">
                <li>
                    <Link to={"/pesquisa"}><SearchIcon size={24} /></Link>
                </li>

                <li className="relative">
                    <Link to={"/login"}><User size={24} /></Link>
                    {token && <DotIcon size={24} className="text-green-400 absolute top-3 -right-2" />}
                </li>

                <li className="relative">
                    <Link to={"/carrinho"}>
                        <ShoppingCart size={24} />
                    </Link>
                    <span className="absolute -top-3 -right-3 w-5 h-5 bg-orange-400 text-white rounded-full text-xs flex items-center justify-center">{totalQuantity}</span>
                </li>
            </ul>

            <button type="button" className="absolute right-4" onClick={() => setExpand(!expand)}>
                <MenuIcon size={24} />
            </button>

        </nav>

    )
};


const NavbarLarge = () => {

    const { cart } = useCart();

    const { token } = useToken();

    const categories = [...new Set(products.map(p => p.category))];

    console.log(categories);

    const totalQuantity = cart.reduce((acc, c) => acc + c.quantity, 0);

    const [expand, setExpand] = useState(false);

    return (
        <nav className="container m-auto lg:max-w-6xl grid grid-cols-3 items-center">


            <Link to={"/loja"} className="text-2xl font-extrabold uppercase">
                ngshoes
            </Link>


            <ul className="flex gap-6 items-center">
                <li className="relative p-4 text-zinc-400 hover:text-white transition-colors duration-300">
                    <button type="button" onClick={() => setExpand(!expand)} className="flex gap-1 items-center">
                        <p>Categories</p>
                        <ChevronDown size={16} className={`${expand ? "rotate-180" : ""} transition-discrete duration-300`} />
                    </button>
                    {expand &&
                        <ul className="absolute top-12 left-0 right-0 grid grid-cols-1 gap-6 p-4 rounded bg-zinc-800">
                            {categories.map(category => (
                                <li className="hover:text-white text-zinc-400 transition-colors duration-300">
                                    <Link to={`/categoria/${category}`} onClick={() => setExpand(false)} className="capitalize">{category}</Link>
                                </li>
                            ))}
                        </ul>
                    }
                </li>

                <li className="p-4 text-zinc-400 hover:text-white transition-colors duration-300">
                    <Link to={"/novidades"} >
                        Novidades
                    </Link>
                </li>

                <li className="p-4 text-zinc-400 hover:text-white transition-colors duration-300">
                    <Link to={"/promocoes"}>
                        Promoções
                    </Link>
                </li>
            </ul>


            <ul className="justify-self-end flex items-center gap-6">
                <li className="p-4 text-zinc-400 hover:text-white transition-colors duration-300">
                    <Link to={"/pesquisa"}>
                        <Search size={24} />
                    </Link>
                </li>

                <li className="relative p-4 text-zinc-400 hover:text-white transition-colors duration-300">
                    <Link to={"/perfil"}>
                        <User size={24} />
                    </Link>
                    {token && <DotIcon size={24} className="absolute bottom-0 right-0 text-green-600" />}
                </li>

                <li className="relative p-4 text-zinc-400 hover:text-white transition-colors duration-300">
                    <Link to={"/carrinho"}>
                        <ShoppingCart size={24} />
                    </Link>
                    <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center rounded-full bg-orange-600 text-white">
                        <p className="text-xs">{totalQuantity}</p>
                    </span>
                </li>

            </ul>
        </nav>
    )
};

const Navbar = () => {

    return (
        <>
            <div className="hidden lg:block">
                <NavbarLarge />
            </div>

            <div className="lg:hidden">
                <SmallNavbar />
            </div>
        </>
    )
};

export default Navbar;