import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className=
    "header-container">
    <div className="header-row">
      <div id='coin'>
        <p>Coin</p>
      </div>  

  
      <div id='price'>
        <p>Price</p>
      </div>

      <div id='volume'>
        <p >Volume</p>
      </div>
      
      <div id='change'>
        <p >24hr</p>
      </div>
      
      <div id='market-cap'>
        <p>Market Cap</p>
      </div>
      
      <div id='seven-days'>
        <p>Last 7 days</p>
      </div>

      </div>
    </div>
  )
}

export default Header
