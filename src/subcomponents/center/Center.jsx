import React from 'react'

const Center = ({children, className}) => {
  return (
    <div className={`w-[77%] sm:w-[61.8%] ${className}`} >
      {children}
    </div>
  )
}

export default Center