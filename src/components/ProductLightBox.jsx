import React from "react";
import { thumbnails } from '../assets/images';

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
        <div>
            <div>
                <button>

                </button>
                <div>
                    <button>

                    </button>
                    <img />
                    <button>
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductLightBox;