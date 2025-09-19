import React from 'react'
import './PhoneFrame.css'

const PhoneFrame = ({ 
  image, 
  alt, 
  className = '', 
  size = 'medium' 
}) => {
  return (
    <div className={`phone-frame ${className} phone-frame-${size}`}>
      <div className="phone-frame-container">
        <div className="phone-notch"></div>
        <div className="phone-screen">
          <img src={image} alt={alt} />
        </div>
        <div className="phone-home-indicator"></div>
      </div>
    </div>
  )
}

export default PhoneFrame
