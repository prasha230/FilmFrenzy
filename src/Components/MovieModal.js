import React,{useState,useEffect} from "react";
import "./styles.css";


function MovieModal(props) {
     const [trailerId, setTrailerId] = useState("");
     useEffect(() => {
         fetch(
             `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
         )
             .then((response) => response.json())
             .then((movie_detail) => {
                 movie_detail.results.map((item) => {
                     if (item.type === "Trailer") setTrailerId(item.key);
                 });
             });
         // .then((movie_detail) => { setTrailerId(movie_detail.results[0].key)});
     },[]);
     const trailerBaseUrl = "https://www.youtube.com/watch?v=";
     const baseUrl = "https://image.tmdb.org/t/p/";
    return (
        <div
            className="modalBackground"
            // style={{
            //     background:
            //         "url(https://image.tmdb.org/t/p/w500//5kAGbi9MFAobQTVfK4kWPnIfnP0.jpg) no-repeat fixed",
            //     backgroundSize: "cover",
            // }}
        >
            <div className="modal_container">
                <img
                    src={`${baseUrl}w500${props.poster_path}`}
                    className="modal_image"
                />
                <div className="modal_detail">
                    <div>
                        <div className="titleCloseBtn">
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/null/macos-close.png"
                                onClick={() => {
                                    props.setModalIsOpen(false);
                                }}
                                className="titleCloseBtn"
                            />
                        </div>
                        <div className="title">
                            <h1>{props.movieName}</h1>
                        </div>
                        <div className="body">
                            <p>{props.desc}</p>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            padding: "20px",
                        }}
                    >
                        <button
                            className="trailer_button"
                            onClick={() =>
                                window.open(`${trailerBaseUrl}${trailerId}`)
                            }
                        >
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;
