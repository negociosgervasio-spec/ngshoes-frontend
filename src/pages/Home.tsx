import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowRight, Star } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { useNewsletter } from "../hooks/useNewsletter";
import { toast, Toaster } from "sonner";
import type { ValidationResult } from "../hooks/useAuth";
import { Bars } from "react-loader-spinner";


const Hero = () => {

    return (
        <section className='container m-auto lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 items-center justify-center px-4 py-12 gap-6 lg:flex-row'>
            <div className="flex flex-col gap-6">
                <h1 className='text-7xl'>Encontre o par perfeito</h1>
                <p>Descubra nossa coleção exclusiva de calçados premium. Estilo, conforto e qualidade em cada passo.</p>

                <div className="grid grid-cols-2 gap-6">
                    <a href="#produtos" className="p-4 bg-orange-600 text-foreground flex items-center justify-center text-center rounded font-semibold hover:opacity-80 transition-opacity duration-300">Explorar coleção</a>
                    <a href="#lancamentos" className="p-4 border  border-white text-foreground flex items-center justify-center text-center rounded font-semibold hover:opacity-80 transition-opacity duration-300">Ver lançamentos</a>
                </div>

                <div className="flex items-center gap-6 mt-auto">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-4xl font-black">500+</h3>
                        <p>Produtos</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-4xl font-black">50K</h3>
                        <p>Clientes</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h3 className="text-4xl font-black">4.8</h3>
                        <p>Avaliação</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-6">
                {products.slice(1, 5).map((p, index) => (
                    <div className="overflow-hidden">
                        <img src={p.image} alt={p.name} className={`${index === 1 || index === 3 ? "mt-6" : ""} h-56 w-full rounded hover:scale-125 hover:opacity-80 transition-all duration-1000`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

const Categories = () => {
    const categories = [...new Set(products.map(p => p.category))];
    const filtered = products.filter((p, index) => p.category === categories[index]);
    return (
        <section id="categorias" className="container m-auto lg:max-w-6xl px-4 py-12">
            <div className="flex flex-col items-center justify-center text-center gap-3">
                <h2 className="text-2xl">Compre por categoria</h2>
                <p>Encontre o estilo perfeito para cada ocasião</p>
            </div>
            <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(244px,1fr))] gap-6">
                {filtered.map((p) => (
                    <Link key={p.id} to={`/categoria/${p.category}`} className="group relative flex items-center justify-center text-center rounded w-full h-56 overflow-hidden">
                        <img src={p.image} alt={p.name} className="absolute inset-0  z-0 w-full h-full group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000" />
                        <div className="relative z-10 gap-3">
                            <h4 className="text-2xl capitalize">{p.category}</h4>
                            <p>{p.stock} produtos</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
};


const Promo = () => {
    return (
        <section className="px-4 py-12">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl">Promoções</h2>
                    <p>Aproveite ofertas exclusivas</p>
                </div>
                <Link to={"/loja/todos"} className="flex items-center gap-3 text-sm hover:text-orange-600 transition-colors duration-500"><span>Ver Todos</span> <ArrowRight size={16} /></Link>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(244px,1fr))] gap-6 mt-6">
                {products.filter(p => p.promo).map(p => (
                    <Link key={p.id} to={`/produto/${p.id}`} className="group flex flex-col gap-3 h-full">
                        <div className="relative overflow-hidden h-72 w-full">
                            <img src={p.image} alt={p.name} className="group-hover:scale-110 transition-transform duration-1000 h-full w-full object-center object-cover" />
                            <span className="p-1 bg-orange-600 rounded absolute right-4 top-4">Promo</span>
                        </div>
                        <h4 className="text-2xl capitalize font-black">{p.name}</h4>
                        <div className="flex items-center gap-3">
                            <Star size={16} className="text-white" />
                            <p className="font-bold ">{p.rating} <span className="text-gray-400">({p.reviews})</span></p>
                        </div>
                        <p className="text-2xl font-bold">R$ {p.price.toFixed(2).replace(".", ",")}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
};


const Newsletter = () => {
    const [email, setEmail] = useState("");

    const { status, message, signup } = useNewsletter();

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        await signup(email);

        if (status === "failed") {
            toast.error(message);
            return;
        }

        if (status === "success") {
            toast.success(message);
        }
    };

    return (
        <section className="bg-gray-50 text-black px-4 py-12 flex flex-col items-center justify-center text-center gap-3">
            <h2 className="text-5xl">Increva-se e ganhe 10% de desconto</h2>
            <p>Receba novidades, lançamentos exclusivos e ofertas especiais diretamente no seu email</p>

            <form onSubmit={handleSubmit} className="flex flex-wrap gap-3  items-center">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 p-4 bg-zinc-900 text-gray-200 focus:outline rounded focus:outline-orange-600 transition-colors duration-300"
                />
                <button type="submit" className="flex-1 p-4 text-center bg-orange-600 text-white rounded hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                    {status === "loading" ? <Bars
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    /> : <p>Inscreva-se</p>}
                </button>
                <Toaster
                    closeButton
                    duration={3000}
                    position="bottom-right"
                    theme="light" // Garante o comportamento interno claro
                    toastOptions={{
                        classNames: {
                            // bg-white: fundo branco | text-slate-900: texto escuro | border: borda suave
                            toast: 'bg-white text-slate-900 border border-slate-200',

                            // Se você usar descrições no toast, isso as deixará num tom de cinza
                            description: 'text-slate-500',

                            // Estiliza o botão de fechar para combinar com o fundo claro
                            closeButton: 'bg-white text-slate-900 border-slate-200 hover:bg-slate-100',
                        }
                    }}
                />
            </form>
        </section>
    )
};


const Home = () => {
    return (
        <div className="flex flex-col gap-6">
            <Hero />
            <Categories />
            <Promo />
            <Newsletter />
        </div>
    )
};

export default Home;