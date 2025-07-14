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
      
    </div>
  )
}

export default ProductLightBox
