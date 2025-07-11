import React, { useState } from "react";
import { product, cart, addToCart, thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from '../assets/images';

const ProductInfo = () => {
    const [mainImage, setMainImage] = useState(product);
    const [activeIndex, setActiveIndex] = useState(0)

    return (
    <main className="max-w-6xl mx-auto px-8 flex gap-16 py-16 items-center">
        <section className="flex-1 flex flex-col items-center">
            <img
                src={product}
                alt="Main Product"
                className="rounded-xl w-full aspect-square object-cover"
            />
            
            <div className="flex gap-6 mt-6">
            </div>
        </section>
            
        
    </main>

    )
}

export default ProductInfo;