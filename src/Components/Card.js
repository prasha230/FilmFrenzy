import { useState } from "react";
import React from "react";
import MovieModal from "./MovieModal";

function Card(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const baseUrl = "https://image.tmdb.org/t/p/";
    return (
        <div>
            <div
                className="movie_card"
                style={{ cursor: "pointer" }}
                onClick={() => setModalIsOpen(true)}
            >
                <div className="card_thumb">
                    <img
                        src={`${baseUrl}w342${props.poster_path}`}
                        // className="card_thumb"
                        alt="Poster"
                    />
                </div>
                <div className="card_title">{props.movie.title}</div>
            </div>

            {modalIsOpen && (
                <MovieModal
                    setModalIsOpen={setModalIsOpen}
                    movieName={props.movie.title}
                    desc={props.movie.overview}
                    poster_path={props.poster_path}
                    movieId={props.movie.id}
                />
            )}
        </div>
    );
}

export default Card;
