import React from 'react'

const CartDropdown = ({ isOpen, cart, onClose }) => {
  if (!isOpen) return null

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2)
  }

  return (
    <div className='absolute -right-14 top-12 w-80 rounded-xl bg-white shadow-lg z-50'>
      <div className=''>
        <h2 className='text-lg font-bold border-b pb-4 flex p-4'>Cart</h2>
        <div className='py-16 text-center text-gray-500 font-medium'>
          {cart.length === 0 ? (
            'Your cart is empty.'
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} className='flex justify-between items-center mb-4 px-4 py-2 border-b'>
                  <div>
                    <img />
                    <div>
                      <p>{item.name}</p>
                      <p>
                        ${item.price} x {item.quantity} = ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <p>Total: ${getTotalPrice()}</p>
                <button>Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartDropdown
