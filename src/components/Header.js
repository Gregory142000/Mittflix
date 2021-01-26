/** Main imports */
import React, { useState } from "react"

/** Component that is responsible for structuring and controlling the Header of the application */
function Header(props) {
  const [ searchMove, setSearchMovie ] = useState("")

  /** handleChange takes care of the form control, determines the value of the search bar status */
  function handleChange(e) {
    setSearchMovie(e.target.value)
  }
  
  /** handleSubmit is in charge of controlling the form processing and painting the data in the url */
  function handleSubmit(e) {
    e.preventDefault()
    window.location.hash = searchMove
    setSearchMovie("")
    console.log(searchMove)
  }

  return(
    <header className="header">
      <a href="/">
        <img 
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </a>
      <form onSubmit={handleSubmit} id="search"  className="search">
          <input type="search" placeholder="Search for a title..." onChange={handleChange} value={searchMove} />
      </form>
    </header>
  )
}

export default Header