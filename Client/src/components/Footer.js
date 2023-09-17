import React from 'react'

function Footer() {
    const date = new Date()
  return (
    <div className='footer bg-dark text-light'>
        <p>All rights reserved - {date.getFullYear()} </p>
    </div>
  )
}

export default Footer
