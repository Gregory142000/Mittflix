/** Main imports */
import React from "react";

/** The MovieStructure component is responsible for containing the Movie components within the Body component */
function MovieStructure(props) {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Movies</h1>
        <div className="titles-wrapper">
          {props.children} 
        </div>
      </div>
    </div>
  );
}

export default MovieStructure;
