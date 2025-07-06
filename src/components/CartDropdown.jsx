import React from "react";

const CartDropdown = ({isOpen}) => {
    if (!isOpen) return null;

    return (
        <div className="absolute -right-14 top-12 w-80 rounded-xl bg-white shadow-lg z-50">
        <div className="">
            <h2 className="text-lg font-bold border-b pb-4 flex p-4">Cart</h2>
            <div className="py-16 text-center text-gray-500 font-medium">
                Your cart is empty.
            </div>
            </div>
        </div>
    );
};

export default CartDropdown;