import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import Footer from "./Components/Footer";
 
function App () {
    return (
        <>
            <Nav />
            <Header heading="Trending Movies" />
            <MovieList />
            <Footer />
        </>
    );
}

export default App;
