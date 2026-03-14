"use client";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/store/cartSlice";
import useAppSelector from "@/store/hooks";
import { IProduct } from "@/types/products";
import { PRODUCTS } from "@/utils/product";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import QuantityButton from "./QuantityButton";

export default function Products() {
    const {items, products} = useAppSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: IProduct) => {
        e.stopPropagation();

        dispatch(addToCart({ product}));
    };

  return (
    <div className='py-6 px-20'>
        <div className='grid grid-cols-4 gap-6 w-full'>
            { PRODUCTS.map((product) => (
                <div key={product.id} className='border border-athens-gray rounded-lg overflow-hidden shadow-sm flex flex-col cursor-pointer'>
                    <div className="aspect-square">
                        <Image src={product.image} alt={product.name} width={200} height={200} className='w-full h-full object-cover' />
                    </div>
                    <div className='p-4 flex flex-col grow justify-between'>
                        <div className="flex flex-col gap-1.5">
                            <p className="text-pale-sky  text-xs font-medium uppercase tracking-widest">{product.category}</p>
                            <h3 className='font-medium leading-tight text-base'>{product.name}</h3>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className='mt-2 font-semibold text-lg text-shark'>${product.price.toFixed(2)}</p>

                            { items.some((item) => item.product.id === product.id) ? (
                                <QuantityButton product={product} />
                            ) : (

                            <Button onClick={(e) => handleAddToCart(e, product)} variant="outline" className="font-medium text-sm px-3 border border-athens-gray py-2 cursor-pointer "><ShoppingCart className="h-4 w-4" /> Add to Cart</Button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
