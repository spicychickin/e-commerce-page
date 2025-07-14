import React from "react";
import { thumbnails, mainImg1, mainImg2, mainImg3, mainImg4 } from '../assets/images';

const ProductLightBox = ({
    isOpen,
    onClose,
    activeIndex,
    setActiveIndex,
    images
}) => {
    if (!isOpen) return null;

    const prevImg = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    const nextImg = () => setActiveIndex((prev) => (prev + 1) % images.length);

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-2xl p-6 flex flex-col items-center">
                <button
                className="absolute top-4 right-4 text-2xl"
                onClick={onClose}
                >
                &times;
                </button>
                <div className="flex items-center gap-4">
                    <button onClick={prevImg}>&lt;</button>
                    <img
                    src={images[activeIndex]}
                    alt={`Main Product ${activeIndex + 1}`}
                    className=""
                    />
                    <button>

                    </button>
                </div>
                <div className="">
                    {images.map((thumb, idx) => (
                        <div
                        key={idx}
                        >
                        <img />
                        </div>
                    ))}
                </div>
            </div>
            <div className="">

            </div>
        </div>
    )
}

export default ProductLightBox;