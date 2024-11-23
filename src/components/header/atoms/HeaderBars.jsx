import React from 'react'
import SvgIcon from '../../../subcomponents/svg/SvgIcon'


const HeaderBars = ({handleClick}) => {
  return (
    <button className='w-7' onClick={handleClick}>
        <SvgIcon src='/bars.svg'/>
    </button>
  )
}

export default HeaderBars
