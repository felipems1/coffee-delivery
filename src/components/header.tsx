import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { CartIcon } from './cart-icon'

export function Header() {
  return (
    <header className="flex h-[100px] w-full items-center justify-between px-5 lg:mx-auto lg:max-w-5xl lg:px-0">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo do coffee delivery"
          width={85}
          height={40}
        />
      </Link>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-md bg-purple-light p-2 text-purple">
          <MapPin size={22} />
          <span>João Pessoa, PB</span>
        </div>

        <CartIcon />
      </div>
    </header>
  )
}
