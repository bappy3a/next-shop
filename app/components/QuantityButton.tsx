"use client";
import useAppSelector from "@/store/hooks";
import { IProduct } from "@/types/products";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";

export default function QuantityButton({ product }: { product: IProduct }) {

    const dispatch = useDispatch();
    const items = useAppSelector((state) => state.cart.items);

    const selectedItem = items.find((item) => item.product.id === product.id); // Replace 1 with the actual product ID you want to target

  return (
    <div className="rounded-lg border border-athens-gray flex items-center justify-center max-w-28">
        <button className="font-medium text-sx rounded-md w-12 h-9 cursor-pointer flex justify-center items-center hover:bg-red-500 hover:text-white rounded-r-none" onClick={() => dispatch({ type: "cart/decreaseQuantity", payload: { productId: product.id } })} disabled={!selectedItem || selectedItem.quantity <= 1}> <Minus/> </button>
        <span className="w-28 flex justify-center items-center">{selectedItem ? selectedItem.quantity : 0}</span>
        <button className="font-medium text-sx rounded-md w-12 h-9 cursor-pointer flex justify-center items-center hover:bg-green-500 hover:text-white rounded-l-none" onClick={(e) => dispatch({ type: "cart/increaseQuantity", payload: { productId: product.id } })}> <Plus /> </button>
    </div>
  )
}
