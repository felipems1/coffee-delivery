import { Minus, Plus } from 'lucide-react'

export function ProductCounter() {
  return (
    <div className="flex gap-5 rounded-md bg-base-button p-2">
      <Minus className="text-purple" />
      <span>1</span>
      <Plus className="text-purple" />
    </div>
  )
}
