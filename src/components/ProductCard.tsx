import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../data/products'


const ProductCard = ({ id, image, name, rating, reviews, price }: Product) => {
    return (
        <Link key={id} to={`/produto/${id}`} className="group flex flex-col gap-3 h-full">
            <div className="relative overflow-hidden h-56 w-full">
                <img src={image} alt={name} className="group-hover:scale-110 transition-transform duration-1000 h-full w-full object-center object-cover" />
                <span className="p-1 bg-orange-600 rounded absolute right-4 top-4">Promo</span>
            </div>
            <h4 className="text-2xl capitalize font-black">{name}</h4>
            <div className="flex items-center gap-3">
                <Star size={16} className="text-white" />
                <p className="font-bold ">{rating} <span className="text-gray-400">({reviews})</span></p>
            </div>
            <p className="text-2xl font-bold">R$ {price.toFixed(2).replace(".", ",")}</p>
        </Link>
    )
}

export default ProductCard