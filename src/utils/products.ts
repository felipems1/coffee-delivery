import { Product } from '../types/product'

import expresso from '../assets/expresso.png'
import americano from '../assets/americano.png'
import expressoCremoso from '../assets/expresso-cremoso.png'
import expressoGelado from '../assets/expresso-gelado.png'
import cafeComLeite from '../assets/cafe-com-leite.png'
import latte from '../assets/latte.png'
import capuccino from '../assets/capuccino.png'
import macchiato from '../assets/macchiato.png'
import mochaccino from '../assets/mochaccino.png'
import chocolateQuente from '../assets/chocolate-quente.png'
import cubano from '../assets/cubano.png'
import havaiano from '../assets/havaiano.png'
import arabe from '../assets/arabe.png'
import irlandes from '../assets/irlandes.png'

export const products: Product[] = [
  {
    id: 1,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expresso,
    price: 9.9,
    qt: 1,
  },
  {
    id: 2,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: americano,
    price: 9.9,
    qt: 1,
  },
  {
    id: 3,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: 9.9,
    qt: 1,
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGelado,
    price: 9.9,
    qt: 1,
  },
  {
    id: 5,
    title: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: 9.9,
    qt: 1,
  },
  {
    id: 6,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
    price: 9.9,
    qt: 1,
  },
  {
    id: 7,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: 9.9,
    qt: 1,
  },
  {
    id: 8,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: 9.9,
    qt: 1,
  },
  {
    id: 9,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mochaccino,
    price: 9.9,
    qt: 1,
  },
  {
    id: 10,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: 9.9,
    qt: 1,
  },
  {
    id: 11,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: 9.9,
    qt: 1,
  },
  {
    id: 12,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: 9.9,
    qt: 1,
  },
  {
    id: 13,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: 9.9,
    qt: 1,
  },
  {
    id: 14,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    price: 9.9,
    qt: 1,
  },
]
