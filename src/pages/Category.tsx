import { useParams } from "react-router-dom"
import { products, type Product } from "../data/products";
import { useEffect, useReducer, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ProductCard from "../components/ProductCard";

type Action =
    | { type: "min-price" }
    | { type: "max-price" }
    | { type: "more-sales" }
    | { type: "best-sellers" }
    | { type: "reset"; payload: Product[] };

const reducer = (state: Product[], action: Action): Product[] => {
    if (state.length === 0) return [];

    const getMin = (key: keyof Product) =>
        Math.min(...state.map(p => p[key] as number));

    const getMax = (key: keyof Product) =>
        Math.max(...state.map(p => p[key] as number));

    switch (action.type) {
        case "min-price":
            const minPrice = getMin("price");
            return state.filter(p => p.price === minPrice);

        case "max-price":
            const maxPrice = getMax("price")
            return state.filter(p => p.price === maxPrice);

        case "more-sales":
            const maxRating = getMax("rating");
            return state.filter(p => p.rating === maxRating);

        case "best-sellers":
            const maxReviews = getMax("reviews");
            return state.filter(p => p.reviews === maxReviews);

        case "reset":
            return action.payload;
        default:
            return state;
    }
};

const Category = () => {
    const { category } = useParams();

    const initialProducts = products.filter(p => p.category === category);

    const [filtered, setFiltered] = useReducer(reducer, initialProducts);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setFiltered({ type: "reset", payload: initialProducts });
    }, [category]);

    return (
        <section className="px-4 py-12">
            <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-3 mt-6">
                        <h1 className="text-3xl capitalize font-extrabold">{category}</h1>
                        <p className="capitalize text-xs">{filtered.length} produtos</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="cursor-pointer flex items-center gap-1"
                    >
                        <p className="text-xs">Filtros</p>
                        <ChevronDown className={`${show ? "rotate-180 transition-all duration-300" : ""}`} />
                    </button>
                </div>

                <div
                    className={`${show
                        ? "flex flex-col gap-3 p-4 border border-zinc-400 rounded transition-all duration-500 opacity-100 h-max"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <h2 className="text-sm font-extrabold">Ordenar por</h2>
                    <div className="flex flex-wrap gap-6 items-center">
                        <button onClick={() => setFiltered({ type: "min-price" })} className="rounded px-3 py-1 border border-zinc-400 text-sm cursor-pointer hover:border-white transition-colors duration-300">Menor preço</button>
                        <button onClick={() => setFiltered({ type: "max-price" })} className="rounded px-3 py-1 border border-zinc-400 text-sm cursor-pointer hover:border-white transition-colors duration-300" >Maior preço</button>
                        <button onClick={() => setFiltered({ type: "more-sales" })} className="rounded px-3 py-1 border border-zinc-400 text-sm cursor-pointer hover:border-white transition-colors duration-300">Mais vendidos</button>
                        <button onClick={() => setFiltered({ type: "best-sellers" })} className="rounded px-3 py-1 border border-zinc-400 text-sm cursor-pointer hover:border-white transition-colors duration-300">Melhor avaliados</button>
                    </div>
                    <button type="button" onClick={() => setFiltered({ type: "reset", payload: initialProducts })} className="hover:text-red-500 transition-colors duration-300">Limpar Filtros</button>
                </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(244px,1fr))] gap-6 mt-6">
                {filtered.length > 0 ? (
                    filtered.map(p => (
                        <ProductCard
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            price={p.price}
                            image={p.image}
                            images={[]}
                            description=""
                            category={p.category}
                            sizes={[]}
                            colors={[]}
                            rating={p.rating}
                            reviews={p.reviews}
                            stock={p.stock}
                        />
                    ))
                ) : (
                    <p className="text-center text-sm">Nenhum produto encontrado</p>
                )}
            </div>
        </section>
    );
};


export default Category