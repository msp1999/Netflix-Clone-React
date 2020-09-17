import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
  // state = short term memory till page refresh
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //if [] are blank it will run only once
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //fetchUrl is now a dependancy as we want to re Render the page when url Changes

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters" >
        {movies.map((movie) => {
          return (
            <img
            key={movie.id }
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
             src={`${baseUrl}${isLargeRow ?movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
