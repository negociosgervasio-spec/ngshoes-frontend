import { Link, useParams } from "react-router-dom"
import { products } from "../data/products";
import { MinusIcon, PinIcon, PlusIcon, Star } from "lucide-react";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { useCart } from "./context/CartContext";
import ProductCard from "../components/ProductCard";


const Product = () => {
    const { id } = useParams();

    const product = products.find(p => p.id === id);

    if (!product) return <PinIcon size={16} className="animate-spin" />

    const { addToCart } = useCart();

    const [selectedImg, setSelectedImg] = useState(product.image);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleCart = () => {

        if (!color) {
            toast.error("Escolha uma cor.");
            return;
        }

        if (!size) {
            toast.error("Escolha o tamanho.");
            return;
        }

        const cart = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: selectedImg,
            size,
            color,
            quantity
        };

        addToCart(cart);

        toast.success("Sucesso ao adicionar ao carrinho.");
    };

    return (
        <div className="flex flex-col">
            <section className="px-4 py-6">
                <article className="flex flex-wrap gap-6">
                    <div className="flex flex-col gap-3">
                        <img src={selectedImg} alt={product.name} className="object-center object-cover h-96 w-96 rounded" />
                        <div className="flex gap-6 items-center">
                            {product.images.map((thumb, index) => (
                                <img key={index} src={thumb} alt={`Image do produto: ${index}`} className={`${selectedImg === thumb ? "scale-110 border border-white" : ""} h-16 w-16 rounded`} onClick={() => setSelectedImg(thumb)}></img>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="text-3xl uppercase font-extrabold">{product.name}</h1>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: product.rating }).map(_ => (
                                <Star size={16} />
                            ))}
                            <p>{product.rating}</p>
                            <p className="ml-6">({product.reviews})</p>
                        </div>
                        <p className="text-2xl font-extrabold mt-3">R$ {product.price}</p>

                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-bold">Tamanho</h4>
                            <div className="flex flex-wrap gap-6">
                                {product.sizes.map((value) => (
                                    <button
                                        key={value}
                                        type="button"
                                        onClick={() => { setSize(value) }}
                                        className={`${size === value ? "scale-110 border border-orange-600" : "border border-zinc-400"} text-sm rounded  w-12 h-12 flex items-center justify-center text-center  transition-all duration-300`}>
                                        {value}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h4 className="text-2xl font-bold">Cor</h4>
                            <div className="flex flex-wrap gap-6">
                                {product.colors.map((c) => (
                                    <button
                                        key={c.name}
                                        type="button"
                                        style={{ backgroundColor: `${c.hex}` }}
                                        onClick={() => setColor(c.colorName)}
                                        className={`${color === c.colorName ? "scale-110 border border-orange-600" : " border border-zinc-400 hover:border-white"}  bg-${c.hex}text-sm rounded-full w-12 h-12 transition-all duration-300`}>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <button
                                type="button"
                                onClick={() => { setQuantity(quantity - 1) }}
                                disabled={quantity < 2}
                                className="w-12 h-12 flex items-center justify-center text-lg rounded border border-zinc-400 hover:border-white transition-colors duration-300">
                                <MinusIcon />
                            </button>
                            <p className="text-lg">{quantity}</p>
                            <button
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                                disabled={quantity > product.stock}
                                className="w-12 h-12 flex items-center justify-center text-lg rounded border border-zinc-400 hover:border-white transition-colors duration-300"
                            >
                                <PlusIcon />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 mt-6">
                            <button
                                type="button"
                                onClick={handleCart}
                                className="p-4 border border-zinc-400 hover:border-white hover:bg-zinc-700 transition-colors duration-300 rounded">
                                Adicionar ao carrinho
                            </button>

                            <Link to={"/carrinho"} className="p-4 bg-orange-600 text-white hover:opacity-80 transition-opacity duration-300 rounded text-center">Comprar agora</Link>
                        </div>

                        <div className="border-b border-zinc-400/30 "></div>

                        <div className="flex flex-col gap-3">
                            <h4 className="text-lg font-bold">Descrição</h4>
                            <p>{product.description}</p>
                        </div>
                    </div>

                    <Toaster closeButton={true} position="top-right" />

                </article>
            </section>

            <section className="px-4 py-12">
                <div className="flex flex-col gap-3">
                    <h2>Relacionados</h2>
                    <p>Veja produtos que você também possa gostar</p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(244px,1fr))] gap-6 mt-6">
                    {products.filter((p) => p.category === product.category && product.id !== p.id).map(product => (
                        <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} images={[]} description={""} category={"corrida"} sizes={[]} colors={[]} rating={product.rating} reviews={product.reviews} stock={0} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Product