import React, { useState } from "react";
import { logo, cart, avatar } from '../assets/images';
import CartDropdown from "./CartDropdown.jsx";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"]


const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("Women");

    return (
        <nav className="flex justify-between items-center py-6 px-12 border-b border-gray-200">
            <div className="flex items-center space-x-12">
                <img src={logo} alt="Sneakers Logo" className="h-8" />
                <ul className="flex gap-8 text-gray-500 text-lg font-medium">
                    {menuItems.map((item) => (
                        <li
                        key={item}
                        className={`flex flex-col items-center cursor-pointer transition ${
                            activeMenu === item ? "text-black font-semibold" : ""
                        }`}
                        >
                            <span>{item}</span>
                            {activeMenu === item && (
                                <span className="block h-1 w-8 mt-2 rounded bg-orange-500"></span>
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