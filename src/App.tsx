import { Link, Outlet, useLocation } from "react-router-dom";
import "./styles/index.css";
import { CartProvider } from "./pages/context/CartContext";
import Navbar from "./components/Navbar";
import { useToken } from "./hooks/useToken";


const App = () => {
  const location = useLocation();

  return (
    <CartProvider>
      <div>
        {location.pathname === "/" && (
          <div className="flex flex-col gap-6 items-center justify-center h-screen">
            <h1 className="text-5xl uppercase font-black">ngshoes</h1>
            <div className="flex flex-col gap-6 mt-6 w-54">
              <Link to={"/loja"} className="w-full p-4 bg-orange-600 text-center">Entrar</Link>
              <Link to={"/cadastro"} className="w-full p-4 bg-transparent border border-white hover:bg-zinc-700 transition-colors duration-300 text-center">Criar conta</Link>
            </div>
          </div>
        )}

        <header className="z-50 bg-zinc-800 sticky top-0 left-0 right-0 border-b border-b-orange-600/30 p-4">
          <Navbar/>
        </header>
        <main className="p-4 container m-auto max-w-6xl">
          <Outlet />
        </main>
      </div>
    </CartProvider>
  )
};

export default App;