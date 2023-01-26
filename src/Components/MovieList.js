import React, { useState } from "react";
import Card from "./Card";
import "./styles.css";
import { useEffect } from "react";
function MovieList (props) {
    const [movieNames,setMovieNames]=useState([])
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
        )
            .then((response) => response.json())
            .then((movieList) => {
                setMovieNames(movieList.results);
            });
    }, []);
    
    return (
        <div className="movie_list">
            {movieNames.map((movie) => (
                <Card
                    key={movie.id}
                    movie={movie}
                    poster_path={movie.poster_path}
                ></Card>
            ))}
        </div>
    );
    
}

export default MovieList;
