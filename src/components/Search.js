import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: ""
  }

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search)
    }
  }

  handleSearch = () => {
    this.props.searchMovie(this.state.search)
  }

  render() {
    return (
      <>
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />

          <button onClick={this.handleSearch}>Search</button>

        </div>
        <div className="radio">
          <label htmlFor="all">
            <input type="radio" name="type" id="all" /> All
          </label>
          <label htmlFor="movies">
            <input type="radio" name="type" id="movies" /> Movies only
          </label>
          <label htmlFor="series">
            <input type="radio" name="type" id="series" /> Series only
          </label>
          <label htmlFor="games">
            <input type="radio" name="type" id="games" /> Games only
          </label>
        </div>
      </>
    )
  }
}

export default Search;