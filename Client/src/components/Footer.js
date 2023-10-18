import React from 'react'

function Footer() {
    const date = new Date()
  return (
    <div className='footer1 bg-dark text-light'>
        <p className='pt-2'>All rights reserved - {date.getFullYear()} </p>
    </div>
  )
}

export default Footer
