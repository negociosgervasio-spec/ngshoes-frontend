export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  category: 'corrida' | 'casual' | 'esporte' | 'social' | 'trilha';
  sizes: string[];
  colors: { name: string; hex: string; colorName: string; imageUrl: string }[];
  rating: number;
  reviews: number;
  promo?: boolean;
  stock: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Runner Pro 300',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
    ],
    description: 'Tênis de corrida profissional com tecnologia de amortecimento avançada.',
    category: 'corrida',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80' },
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80' },
      { name: 'Vermelho', hex: '#FF0000', colorName: 'Vermelho', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80' }
    ],
    rating: 4.8,
    reviews: 124,
    promo: true,
    stock: 45
  },
  {
    id: '2',
    name: 'City Sneaker',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80'
    ],
    description: 'Sneaker urbano minimalista para uso diário.',
    category: 'casual',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Cinza', hex: '#808080', colorName: 'Cinza', imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80' },
      { name: 'Azul', hex: '#0000FF', colorName: 'Azul', imageUrl: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80' },
      { name: 'Verde', hex: '#008000', colorName: 'Verde', imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80' }
    ],
    rating: 4.5,
    reviews: 89,
    stock: 32
  },
  {
    id: '3',
    name: 'Trail Master',
    price: 399.90,
    image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80',
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80'
    ],
    description: 'Calçado para trilhas com aderência superior.',
    category: 'trilha',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Marrom', hex: '#8B4513', colorName: 'Marrom', imageUrl: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80' },
      { name: 'Verde Escuro', hex: '#006400', colorName: 'Verde Escuro', imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80' }
    ],
    rating: 4.9,
    reviews: 156,
    stock: 28
  },
  {
    id: '4',
    name: 'Classic Loafer',
    price: 229.90,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80'
    ],
    description: 'Sapato social casual para ocasiões elegantes.',
    category: 'social',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80' },
      { name: 'Marrom', hex: '#8B4513', colorName: 'Marrom', imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80' }
    ],
    rating: 4.6,
    reviews: 67,
    stock: 18
  },
  {
    id: '5',
    name: 'Sport Flex',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80'
    ],
    description: 'Tênis esportivo flexível para treinos intensos.',
    category: 'esporte',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Azul', hex: '#0000FF', colorName: 'Azul', imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80' },
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80' }
    ],
    rating: 4.7,
    reviews: 92,
    promo: true,
    stock: 52
  },
  {
    id: '6',
    name: 'Comfort Walk',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80'
    ],
    description: 'Calçado confortável para longas caminhadas.',
    category: 'casual',
    sizes: ['36', '37', '38', '39', '40', '41'],
    colors: [
      { name: 'Bege', hex: '#F5F5DC', colorName: 'Bege', imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80' },
      { name: 'Cinza', hex: '#808080', colorName: 'Cinza', imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80' }
    ],
    rating: 4.4,
    reviews: 78,
    stock: 63
  },
  {
    id: '7',
    name: 'High Top Retro',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80',
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80'
    ],
    description: 'Tênis cano alto com estilo retrô.',
    category: 'casual',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80' },
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80' },
      { name: 'Vermelho', hex: '#FF0000', colorName: 'Vermelho', imageUrl: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80' }
    ],
    rating: 4.8,
    reviews: 143,
    stock: 12
  },
  {
    id: '8',
    name: 'Minimal Slip On',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80'
    ],
    description: 'Slip-on minimalista para o dia a dia.',
    category: 'casual',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80' },
      { name: 'Cinza', hex: '#808080', colorName: 'Cinza', imageUrl: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80' }
    ],
    rating: 4.3,
    reviews: 54,
    stock: 41
  },
  {
    id: '9',
    name: 'Performance Elite',
    price: 449.90,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80',
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80'
    ],
    description: 'Calçado de alta performance para atletas profissionais.',
    category: 'esporte',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80' },
      { name: 'Laranja', hex: '#FF6A00', colorName: 'Laranja', imageUrl: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80' }
    ],
    rating: 5.0,
    reviews: 201,
    stock: 8
  },
  {
    id: '10',
    name: 'Beach Sandal',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80'
    ],
    description: 'Sandália confortável para praia e piscina.',
    category: 'casual',
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    colors: [
      { name: 'Azul', hex: '#0000FF', colorName: 'Azul', imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80' },
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80' },
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80' }
    ],
    rating: 4.2,
    reviews: 45,
    stock: 87
  },
  {
    id: '11',
    name: 'Urban Walker',
    price: 269.90,
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80'
    ],
    description: 'Sneaker urbano versátil para uso diário.',
    category: 'casual',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80' },
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80' }
    ],
    rating: 4.6,
    reviews: 98,
    stock: 35
  },
  {
    id: '12',
    name: 'Sprint Elite',
    price: 389.90,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80'
    ],
    description: 'Calçado de alta performance para velocistas.',
    category: 'corrida',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Laranja', hex: '#FF6A00', colorName: 'Laranja', imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80' },
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80' }
    ],
    rating: 4.9,
    reviews: 167,
    promo: true,
    stock: 24
  },
  {
    id: '13',
    name: 'Daily Comfort',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80'
    ],
    description: 'Calçado casual confortável para o dia a dia.',
    category: 'casual',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: [
      { name: 'Bege', hex: '#F5F5DC', colorName: 'Bege', imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80' },
      { name: 'Marrom', hex: '#8B4513', colorName: 'Marrom', imageUrl: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80' }
    ],
    rating: 4.4,
    reviews: 73,
    stock: 56
  },
  {
    id: '14',
    name: 'Street Style',
    price: 329.90,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80'
    ],
    description: 'Tênis urbano com design moderno e estiloso.',
    category: 'casual',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Vermelho', hex: '#FF0000', colorName: 'Vermelho', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80' },
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80' }
    ],
    rating: 4.7,
    reviews: 112,
    stock: 19
  },
  {
    id: '15',
    name: 'Gym Master',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80'
    ],
    description: 'Tênis ideal para treinos intensos na academia.',
    category: 'esporte',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80' },
      { name: 'Cinza', hex: '#808080', colorName: 'Cinza', imageUrl: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80' }
    ],
    rating: 4.5,
    reviews: 86,
    stock: 47
  },
  {
    id: '16',
    name: 'Business Classic',
    price: 379.90,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80'
    ],
    description: 'Sapato social premium para eventos formais.',
    category: 'social',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80' },
      { name: 'Marrom', hex: '#8B4513', colorName: 'Marrom', imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80' }
    ],
    rating: 4.8,
    reviews: 91,
    promo: true,
    stock: 15
  },
  {
    id: '17',
    name: 'Weekend Casual',
    price: 219.90,
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80'
    ],
    description: 'Tênis casual perfeito para finais de semana.',
    category: 'casual',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: [
      { name: 'Azul', hex: '#0000FF', colorName: 'Azul', imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80' },
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80' }
    ],
    rating: 4.3,
    reviews: 64,
    stock: 71
  },
  {
    id: '18',
    name: 'Running Speed',
    price: 419.90,
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80'
    ],
    description: 'Tênis de corrida com máximo retorno de energia.',
    category: 'corrida',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Verde', hex: '#008000', colorName: 'Verde', imageUrl: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80' },
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80' }
    ],
    rating: 5.0,
    reviews: 203,
    stock: 6
  },
  {
    id: '19',
    name: 'Adventure Trail',
    price: 429.90,
    image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80'
    ],
    description: 'Bota para trilhas extremas com proteção total.',
    category: 'trilha',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Marrom', hex: '#8B4513', colorName: 'Marrom', imageUrl: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80' },
      { name: 'Verde Escuro', hex: '#006400', colorName: 'Verde Escuro', imageUrl: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800&q=80' }
    ],
    rating: 4.9,
    reviews: 178,
    stock: 22
  },
  {
    id: '20',
    name: 'Flex Motion',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80'
    ],
    description: 'Tênis com flexibilidade máxima para movimentos naturais.',
    category: 'esporte',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Azul', hex: '#0000FF', colorName: 'Azul', imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80' },
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80' }
    ],
    rating: 4.6,
    reviews: 95,
    stock: 38
  },
  {
    id: '21',
    name: 'Skate Pro',
    price: 339.90,
    image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80'
    ],
    description: 'Tênis reforçado para skatistas profissionais.',
    category: 'esporte',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80' },
      { name: 'Vermelho', hex: '#FF0000', colorName: 'Vermelho', imageUrl: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80' },
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80' }
    ],
    rating: 4.7,
    reviews: 134,
    stock: 29
  },
  {
    id: '22',
    name: 'Office Smart',
    price: 259.90,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80'
    ],
    description: 'Sapato social moderno para ambiente corporativo.',
    category: 'social',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: [
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80' },
      { name: 'Marrom Claro', hex: '#A0522D', colorName: 'Marrom Claro', imageUrl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80' }
    ],
    rating: 4.5,
    reviews: 82,
    stock: 33
  },
  {
    id: '23',
    name: 'Eco Walk',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80'
    ],
    description: 'Calçado sustentável feito com materiais reciclados.',
    category: 'casual',
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: [
      { name: 'Verde', hex: '#008000', colorName: 'Verde', imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80' },
      { name: 'Bege', hex: '#F5F5DC', colorName: 'Bege', imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80' }
    ],
    rating: 4.6,
    reviews: 107,
    promo: true,
    stock: 44
  },
  {
    id: '24',
    name: 'Basketball Pro',
    price: 459.90,
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80'
    ],
    description: 'Tênis de basquete de alta performance.',
    category: 'esporte',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Branco', hex: '#FFFFFF', colorName: 'Branco', imageUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80' },
      { name: 'Preto', hex: '#000000', colorName: 'Preto', imageUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80' },
      { name: 'Vermelho', hex: '#FF0000', colorName: 'Vermelho', imageUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80' }
    ],
    rating: 4.9,
    reviews: 189,
    stock: 11
  }
];