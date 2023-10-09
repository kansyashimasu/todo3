import React, { children } from 'react'

const Card = ({children}) => {
  return (
    <div className='card'>{children}</div>
  )
}

export default Card