"use client";
import { Input } from "@/components/ui/input";
import useAppSelector from "@/store/hooks";
import { Package, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

export default function Header() {

  const dispatch = useDispatch();
  const items = useAppSelector((state) => state.cart.items);

    const pathname = usePathname(); // You can replace this with the actual pathname from your router

    const showSearchBar = pathname === "/";;

  return (
    <header className="sticky top-0 z-10 backdrop-blur w-full flex justify-between py-6 px-20 border-b border-athens-gray">
      <Link href="/" className="flex items-center gap-2">
        <Package className="text-red-500"/>
        <h1>Next Shop</h1>
      </Link>
      <div className="flex gap-4">

        <div className="relative" style={{ display: showSearchBar ? "block" : "none" }}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-santas-gray"/>
            <Input className="outline-none w-80 py-2 pl-8 text-sm border border-athens-gray" placeholder="Search Products" />
        </div>

        <Link href="/cart" className="relative">
          <ShoppingCart />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {items.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </Link>
      </div>
    </header>
  )
}
