import React from 'react'

function Header() {
  return (
    <header
      style={{
        color: '#0e3c7e',
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: '0px', width: '100%', textAlign: 'center' }} className='fancy-font'>
        Ice Cream Wars
      </h1>
    </header>
  )
}

export default Header
