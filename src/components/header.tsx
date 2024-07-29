import { MapPin, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export function Header() {
  return (
    <header className="flex h-[100px] w-full items-center justify-between px-10 lg:mx-auto lg:max-w-6xl">
      <Image
        src="/logo.png"
        alt="Logo do coffee delivery"
        width={85}
        height={40}
      />

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-purple">
          <MapPin size={22} />
          <span>João Pessoa, PB</span>
        </div>

        <div className="cursor-pointer rounded-md bg-yellow-light p-2 text-yellow-dark hover:bg-yellow-dark hover:text-white">
          <ShoppingCart size={20} />
        </div>
      </div>
    </header>
  )
}
