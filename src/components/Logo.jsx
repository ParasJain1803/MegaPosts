import React from 'react'
import logo from '../../src/assets/logo.png'

function Logo({width='100px'}) {
  return (
    <div>
      <img src={logo} alt='Logo' width={width} />
    </div>
  )
}

export default Logo