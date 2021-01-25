import React from "react"

function Header(props) {
  return(
    <header className="header">
      <a href="/">
        <img 
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </a>
      <form id="search" className="search">
          <input type="search" placeholder="Search for a title..." value="" />
      </form>
    </header>
  )
}

export default Header