import { CartCounter } from '@/components';
import type { Metadata } from 'next'

export const metadata:Metadata = {
  title:'Shopping cart',
  description:'Un simple contador'
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={5} />     
    </div>
  );
}