/** Main import */
import React, { useEffect, useState } from "react";
/** My components import */
import Movie from "./Movie";
import MovieStructure from "./MovieStructure";
/** Image import */
import noneImage from "../asset/img/image-not-available.jpg";

/** This Body component is the one that contains the logic that brings the series from the TMDB API */
function Body(props) {
  const [hash, setHash] = useState(
    window.location.hash
      ? window.location.hash.replace(/#/g, "")
      : "jaldsfjoasidfjasiofjoasijfwweffuhniufh"
  ); // In the state the API data is controlled to be served in the interface / The set of random letters ensures that an error is not generated in the request to the API and that it returns an empty array when no search data is passed in the url.
  const [movies, setMovies] = useState([]);
  const [baseUrl, setBaseUrl] = useState("");
  const [posterSize, setPosterSize] = useState("");

  /** In the useEffect, the fetch request is generated to request the data from the API */
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=3051f0de96eabec45d522747f8508bdb`
    ) // In the url of fetch 'key' is a unique key that TMDB gives us when creating an account on your website.
      .then((res) => res.json())
      .then((res) => {
        setBaseUrl(res.images.base_url);
        setPosterSize(res.images.poster_sizes[3]);
      })
      .then((res) => {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=3051f0de96eabec45d522747f8508bdb&language=en-US&query=${hash}&page=1&include_adult=false`
        )
          .then((res) => res.json())
          .then((res) => {
            setMovies(res.results);
          });
      });
  }, [hash]);

  /** Changing the url changes the value of 'hash' to update the search */
  window.addEventListener("hashchange", () => {
    setHash(window.location.hash.replace(/#/g, ""));
  });

  return (
    <MovieStructure>
      {movies.map((el) => (
        <Movie
          key={el.id}
          id={el.id}
          src={
            el.poster_path
              ? `${baseUrl}${posterSize}${el.poster_path}`
              : noneImage
          }
          title={el.title}
          rating={el.vote_average}
          plot={el.overview}
        />
      ))}
    </MovieStructure>
  );
}

export default Body;
