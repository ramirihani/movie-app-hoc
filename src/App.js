import React, { Component } from "react";
import "./App.css";
import Search from "./component/Search";
import MovieList from "./component/MovieList";
import Rating from "./component/Rating";
const movies = [
  {
    id: "joker",
    title: "joker",
    rating: "4",
    image: "https://www.dw.com/image/50340387_303.jpg"
  },
  {
    id: "sonic",
    title: "sonic",
    rating: "5",
    image: "https://i.ytimg.com/vi/lDfHbfVS8kI/maxresdefault.jpg"
  },
  {
    id: "venom",
    title: "venom",
    rating: "3",
    image:
      "https://wegotthiscovered.com/wp-content/themes/wgtc_v2/resizer/resizer.php?file=uploads/2018/08/Venom-JP-poster-2-640x321.jpg&height=650&width=1219.1489361702&action=resize"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRating: 1,
      moviesArray: movies,
      titleSearch: ""
    };
  }
  addNewMovie(newMovie) {
    this.setState({
      ...this.state,
      moviesArray: [...this.state.moviesArray, newMovie]
    });
  }

  render() {
    return (
      <div className="App">
        <Search
          value={this.state.titleSearch}
          onChange={newTitle => {
            this.setState({
              titleSearch: newTitle
            });
          }}
        />
        <Rating
          className="rating"
          etoile={this.state.minRating}
          onChange={newRating => {
            this.setState({
              minRating: newRating
            });
          }}
        />
        <MovieList
          className="Card"
          movies={this.state.moviesArray.filter(
            el =>
              el.rating >= this.state.minRating &&
              el.title
                .trim()
                .toLowerCase()
                .includes(this.state.titleSearch.trim().toLowerCase())
          )}
          onAddMovie={newMovie => this.addNewMovie(newMovie)}
        />
      </div>
    );
  }
}

export default App;
