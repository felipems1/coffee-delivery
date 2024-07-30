import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'
import { baloo } from './layout'
import Image from 'next/image'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product-card'

export default function Home() {
  return (
    <main className="sm:py-12 lg:mx-auto lg:max-w-5xl">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex max-w-[90vw] flex-col justify-center pl-10 lg:max-w-[60%] lg:pl-0">
          <h1 className={`${baloo.className} text-title text-4xl sm:text-5xl`}>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-5 text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="items-center justify-center rounded-full bg-yellow-dark p-2">
                <ShoppingCart size={20} className="text-white" />
              </div>
              <span className="text-base-text">Compra simples e segura</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="items-center justify-center rounded-full bg-base-text p-2">
                <Package size={20} className="text-white" />
              </div>
              <span className="text-base-text">
                Embalagem mantém o café intacto
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="items-center justify-center rounded-full bg-yellow p-2">
                <Timer size={20} className="text-white" />
              </div>
              <span className="text-base-text">Entrega rápida e rastreada</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-purple p-2">
                <Coffee size={20} className="text-white" />
              </div>
              <span className="text-base-text">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[380px] w-[500px] lg:block">
          <Image src="/coffee.png" alt="" fill />
        </div>
      </div>

      <div className="mt-12 flex flex-col space-y-10 pl-10 lg:pl-0">
        <h1 className={`${baloo.className} text-3xl text-base-subtitle`}>
          Nossos cafés
        </h1>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
