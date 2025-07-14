import React from 'react'
import {
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  close,
  leftArrow,
  rightArrow
} from '../assets/images'

const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]

const ProductLightBox = ({
  isOpen,
  onClose,
  activeIndex,
  setActiveIndex,
  images
}) => {
  if (!isOpen) return null

  const prevImg = () =>
    setActiveIndex(prev => (prev - 1 + images.length) % images.length)
  const nextImg = () => setActiveIndex(prev => (prev + 1) % images.length)

  return (
    <div className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center'>
      <div className='relative bg-transparent rounded-2xl p-4 flex flex-col items-center'>
        <button
            className='absolute top-[-26px] right-[88px]'
            onClick={onClose}
          >
            <img src={close} alt='Close Button' />
          </button>
        <div className='flex items-center gap-4 z-10'>
          <button onClick={prevImg}>
            <img src={leftArrow} alt='Left Arrow' className='transform -translate-x-[-46px]' />
          </button>
          <img
            src={images[activeIndex]}
            alt={`Main Product ${activeIndex + 1}`}
            className='w-[500px] h-[500px] object-cover rounded-xl'
          />
          <button onClick={nextImg}>
            <img src={rightArrow} alt='Right Arrow' className='transform -translate-x-[46px]' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductLightBox
