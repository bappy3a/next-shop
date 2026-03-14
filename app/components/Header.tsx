import { Package, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur w-full flex justify-between py-6 px-20 border-b border-athens-gray">
      <Link href="/" className="flex items-center gap-2">
        <Package className="text-red-500"/>
        <span>Next Shop</span>
      </Link>
      <div className="flex gap-4">

        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-santas-gray"/>
            
        </div>

        <Link href="/cart" className="relative">
          <ShoppingCart />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </Link>
      </div>
    </header>
  )
}
