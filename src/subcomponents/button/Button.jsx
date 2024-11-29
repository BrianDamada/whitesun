import React from 'react'
import './Button.css'

const Button = ({ children, variant = 'default' }) => {
  return (
        <button className={`variant-${variant} my-button p-3 w-full my-3 cursor-pointer lg:text-2xl`}>
            {children}
        </button>
  )
}

export default Button
