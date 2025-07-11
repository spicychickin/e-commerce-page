import React, { useState } from "react";
import { logo, cart, avatar } from '../assets/images';
import CartDropdown from "./CartDropdown.jsx";
import { motion } from "framer-motion";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"]


const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    return (
        <nav className="flex justify-between items-center py-6 px-12 border-b border-gray-200 relative">
            <div className="flex items-center space-x-12">
                <img src={logo} alt="Sneakers Logo" className="h-8" />
                <ul className="flex gap-8 text-gray-500 text-lg font-medium">
                    {menuItems.map((item) => (
                        <li
                        key={item}
                        className={`relative flex flex-col items-center cursor-pointer group hover:text-black ${
                            activeMenu === item ? "text-black font-semibold" : ""
                        }`}
                        onClick={() => setActiveMenu(item)}
                        onMouseEnter={() => setHoveredMenu(item)}
                        onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <span>{item}</span>
                            {(hoveredMenu === item || activeMenu === item) && (
                                <motion.span 
                                layoutId="underline"
                                className="absolute bottom-[-32px] 
                                h-1 w-12 mt-2 bg-orange-500"
                                transition={{ type: "spring", stiffness: 500, damping: 40}}

                                />
                            )}
                        </li>
                    ))}
                </ul>
                </div>

                <div className="flex items-center gap-6 relative">
                    <img 
                    src={cart} 
                    alt="Cart Icon" 
                    className="h-6 cursor-pointer"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    />
                    <img 
                    src={avatar} 
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full border-2 border-transparent cursor-pointer"/>
                    <CartDropdown isOpen={isCartOpen} />
                </div>
        </nav>
    );
};
export default Navbar;