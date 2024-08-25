import { DollarSign, MapPin, Timer } from 'lucide-react'
import { baloo } from '../layout'
import Image from 'next/image'

export default function OrderFinishPage() {
  return (
    <div className="px-5 lg:mx-auto lg:flex lg:w-full lg:max-w-5xl lg:items-center lg:gap-10 lg:px-0">
      <div>
        <h2
          className={`mt-5 text-3xl font-bold text-yellow-dark ${baloo.className} lg:mt-10`}
        >
          Uhu! Pedido confirmado
        </h2>
        <p className="text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="mt-5 space-y-5">
          <div className="flex items-center gap-3">
            <div className="items-center justify-center rounded-full bg-purple p-2">
              <MapPin size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base-text">
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
              </span>
              <span className="text-base-text">
                Farrapos - Porto Alegre, RS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="items-center justify-center rounded-full bg-yellow p-2">
              <Timer size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base-text">Previsão de entrega</span>
              <b className="text-base-text">20 min - 30 min</b>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="items-center justify-center rounded-full bg-yellow-dark p-2">
              <DollarSign size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base-text">Pagamento na entrega</span>
              <b className="text-base-text">Cartão de Crédito</b>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-full lg:block lg:flex-1">
        <div className="relative mt-10 h-[200px] w-full">
          <Image src="/illustration.png" alt="" fill />
        </div>
      </div>
    </div>
  )
}
