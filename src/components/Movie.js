import React from "react";

function Movie(props) {
  return (
    <div className="movie">
      <img
        src="https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
        alt="Movie poster"
      />
      <div className="overlay">
        <div className="title">Fight Club</div>
        <div className="rating">8.4/10</div>
        <div className="plot">
          A ticking-time-bomb insomniac and a slippery soap salesman channel
          primal male aggression into a shocking new form of therapy. Their
          concept catches on, with underground "fight clubs" forming in every
          town, until an eccentric gets in the way and ignites an out-of-control
          spiral toward oblivion.
        </div>
        <div data-toggled="false" className="listToggle">
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
