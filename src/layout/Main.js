import React from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import "./Main.css";

class Main extends React.Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=4eb9d7fd&s=matrix")
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  searchMovie = (str) => {
    fetch(`https://www.omdbapi.com/?apikey=4eb9d7fd&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }))
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="main">
        <div className="wrap">
          <Search searchMovie={this.searchMovie} />
          {
            movies.length ? <MovieList movies={movies} /> : <Preloader />
          }
        </div>
      </div>
    )
  }
}

export default Main;