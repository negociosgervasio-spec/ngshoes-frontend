import { LoaderCircle, MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useCart } from './context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../hooks/useToken';
import { toast } from 'sonner';


const Cart = () => {
  const { cart, subtotal, shipping, total, removeFromCart, updateQuantity } = useCart();

  const { token } = useToken();
  const navigate = useNavigate();


  if (!cart) return <LoaderCircle className='animate-spin' />

  const handleCheckout = () => {
    if (!token) {
      toast.error("Faça login para continuar com a compra");
      return;
    }

    navigate("/checkout");
  };


  return (

    <section className='px-4 py-12 flex flex-col gap-6'>

      {cart.length === 0 ? (
        <div className='flex flex-col items-center justify-center gap-6'>
          <h1 className='text-5xl font-extrabold'>Seu carrinho está vazinho</h1>
          <p>Adicione produtos ao seu carrinho para continuar</p>
          <Link to={"/loja/#promo"} className='p-4 rounded bg-orange-400 text-white w-max hover:opacity-80 transition-opacity duration-300'>Continuar comprando</Link>
        </div>
      ) : (
        <div className='flex flex-col gap-6'>
          <h1 className='text-5xl font-extrabold'>Carrinho</h1>
          <div className="grid grid-cols-1 gap-6">
            {cart.map((product) => (
              <article className='flex flex-wrap gap-6 p-4  rounded bg-zinc-900 hover:shadow-lg hover:shadow-orange-600/30 transition-colors duration-500 '>
                <img src={product.image} alt={product.name} className='object-center object-cover w-full md:w-42 h-42 rounded' />
                <div className="flex flex-col gap-3">
                  <h4 className='text-2xl font-extrabold'>{product.name}</h4>
                  <div className="flex gap-1 items-center">
                    <p>Cor: {product.color}</p>
                    <span>|</span>
                    <p>Tamanho: {product.size}</p>
                  </div>
                  <p className='text-lg font-light'>R$ {(product.price * product.quantity).toFixed(2).replace(".", ",")}</p>

                  <div className="w-full flex items-center gap-6">
                    <button type='button' disabled={product.quantity <= 1} onClick={() => { updateQuantity(product.id, product.quantity - 1) }} className='p-2 w-max border border-zinc-400 hover:border-white hover:bg-white hover:text-black transition-colors duration-300 rounded'>
                      <MinusIcon size={16} />
                    </button>
                    <p>{product.quantity}</p>
                    <button type='button' disabled={product.quantity >= 50} onClick={() => { updateQuantity(product.id, product.quantity + 1) }} className='p-2 w-max border border-zinc-400 hover:border-white hover:bg-white hover:text-black transition-colors duration-300 rounded'>
                      <PlusIcon size={16} />
                    </button>

                    <button
                      type='button'
                      onClick={() => removeFromCart(product.id)}
                      className='cursor-pointer p-2 w-max bg-red-400 text-red-800 hover:bg-red-600 hover:text-white rounded justify-self-end'
                    >
                      <TrashIcon size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )
      }

      <div className='p-4 bg-zinc-900 flex flex-col gap-6 rounded'>
        <h2>Resumo do pedido</h2>
        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          <p className='text-2xl font-semibold'>R$ {subtotal.toFixed(2).replace(".", ",")}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Frete</p>
          <p className='text-2xl font-semibold'>R$ {shipping}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Total</p>
          <p className='text-2xl font-semibold'>R$ {total.toFixed(2).replace(".", ",")}</p>
        </div>
        <button type='button' onClick={handleCheckout} className='cursor-pointer p-4 bg-orange-600 text-white font-semibold hover:opacity-80 transition-opacity duration-300 text-center rounded'>Continuar para pagamento</button>
      </div>

    </section>
  )
}

export default Cart