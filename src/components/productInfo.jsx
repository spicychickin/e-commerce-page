import React, { useState } from "react";
import { mainImg1, mainImg2, mainImg3, mainImg4, cart, addToCart, thumbnail1, thumbnail2, thumbnail3, thumbnail4 } from '../assets/images';

const mainImages = [mainImg1, mainImg2, mainImg3, mainImg4];
const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

const ProductInfo = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
    <main className="max-w-6xl mx-auto px-8 flex gap-16 py-16 items-center">
        <section className="flex-1 flex flex-col items-center">
            <img
                src={mainImages[activeIndex]}
                alt={`Main Product ${activeIndex + 1}`}
                className="rounded-xl w-full aspect-square object-cover"
            />
            <div className="flex gap-6 mt-6">
            {thumbnails.map((thumb, idx) => (
                <div 
                key={idx}
                className={`w-28 h-28 rounded-xl cursor-pointer border-4 border-transparent 
                hover:border-orange-400 transition group`}
                onClick={() => setActiveIndex(idx)}
                >
                <img
                    src={thumb}
                    alt={`Product Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover rounded-lg 
                    transition duration-200 hover:opacity-70"
                />
            </div>
            ))}
            </div>
        </section>
        <section className="flex-1">
            <div className="text-left uppercase text-gray-500 tracking-widest text-xs font-bold mb-6">
                SNEAKERS COMPANY
            </div>
            <h1 className="text-left text-5xl font-bold leading-tight mb-6">
                Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-500 mb-8 text-base text-left">
            These low-profile sneakers are your perfect casual wear companion. 
            Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="mb-2 flex items-center gap-6">
                <span className="text-2xl font-bold">$125.00</span>
                <span className="bg-black text-white text-m font-bold px-3 py-1 rounded">50%</span>
            </div>
            <div className="flex mb-8 line-through text-gray-400 font-bold text-lg">$250.00</div>
            <div className="flex gap-6 items-center">
                <div className="flex items-center bg-gray-100 rounded-lg px-6 py-3 gap-6 font-bold">
                    <button className="text-orange-400 text-lg">-</button>
                    <span>0</span>
                    <button className="text-orange-400 text-lg">+</button>
                </div>
                <button className="bg-orange-400 text-gray-950 hover:bg-orange-300 text-white rounded-xl px-16
                py-4 font-bold flex items-center gap-2 shadow-lg shadow-orange-500/70 transition">
                    <img src={ addToCart } alt="Add to Cart Icon" className="h-5 w-5" />
                    Add to Cart
                </button>
            </div>
        </section>
        
        
    </main>

    )
}

export default ProductInfo;