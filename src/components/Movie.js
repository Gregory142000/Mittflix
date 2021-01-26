/** Main imports */
import React, { useEffect, useState } from "react";

/** The Movie component is in charge of formatting the movie cards in addition to controlling their status */
function Movie(props) {
  const [ dataToggled, setDataToggled ] = useState("false") // The state that is in charge of controlling if the heart button was pressed.

  let myLocalStorage = window.localStorage

  /** changeDataToggled is in charge of controlling the event that is generated when pressing the heart button */
  function changeDataToggled() {
    let listId = myLocalStorage.getItem("movieLike") // LocalStorage is used to store a variable that allows us to recognize which movie was selected

    if(dataToggled === "true"){
      let idSplit = listId.split(",")
      setDataToggled("false")
      idSplit.splice(idSplit.indexOf(`${props.id}`), 1)
      myLocalStorage.setItem("movieLike", idSplit.join())
    } else{
      setDataToggled("true")
      myLocalStorage.setItem("movieLike", `${listId},${props.id}`)
    }
  }

  /** The useEffect determines the life cycle of the component */
  useEffect(() => {
    let listId = myLocalStorage.getItem("movieLike").split(",")

    if(listId.indexOf(props.id.toString()) !== -1){
      setDataToggled("true")
    }
  }, [myLocalStorage, props.id])

  return (
    <div className="movie">
      <img
        src={props.src}
        alt="Movie poster"
      />
      <div className="overlay">
        <div className="title">{props.title}</div>
        <div className="rating">{props.rating}/10</div>
        <div className="plot">
          {props.plot}
        </div>
        <div onClick={changeDataToggled} data-toggled={dataToggled} className="listToggle">
          <div>
            <i className="far fa-heart"></i>
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
