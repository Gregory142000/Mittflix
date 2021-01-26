/** Main imports */
import React from "react"
/** My modules import */
import Header from "./components/Header"
import Body from "./components/Body"

/** Main component that is responsible for containing the entire React.js application */
function App(){
  window.localStorage.setItem("movieLike", ",") // A variable is created in the localStorage of the browser that controls the heart icon of the movies

  return(
    <div id="root">
      <Header />
      <Body />
    </div>
  )
}

export default App