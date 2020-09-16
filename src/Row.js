import React, { useEffect, useState } from 'react';
import axios from './axios'; 

const baseUrl = "https://image.tmdb.org/t/p/original/"
function Row({title,fetchUrl}) {
// state = short term memory till page refresh
const [movies,setMovies] = useState([]);

useEffect(() => {
//if [] are blank it will run only once
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
},[fetchUrl]);//fetchUrl is now a dependancy as we want to re Render the page when url Changes

console.log(movies);
return (
        <div className="row">
            <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(movie => {
             return <img className="row_poster" src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
            })}
        </div>

        </div>
    );
}

export default Row;