import React from "react";
/** My components import */
import Movie from "./Movie"

function Body(props) {
  return (
    <div className="titleList">
      <div className="title">
        <h1>Movies</h1>
        <div className="titles-wrapper">
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default Body;
