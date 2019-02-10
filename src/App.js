import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";

import Header from "./components/Header";
import FrontBody from "./components/FrontBody";
import {
  updateMoviesbyYear,
  updateMoviesFeatured,
  updateMoviesbySearch,
  updateMoviesbyTopRating
} from "./actions/cinema-actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateMoviesbyYear = this.onUpdateMoviesbyYear.bind(this);
    this.onUpdateMoviesFeatured = this.onUpdateMoviesFeatured.bind(this);
    this.onUpdateMoviesbySearch = this.onUpdateMoviesbySearch.bind(this);
    this.onUpdateMoviesbyTopRating = this.onUpdateMoviesbyTopRating.bind(this);
  }

  onUpdateMoviesFeatured() {
    this.props.onUpdateMoviesFeatured();
  }

  onUpdateMoviesbyYear(filter) {
    this.props.onUpdateMoviesbyYear(filter);
  }

  onUpdateMoviesbySearch(input) {
    this.props.onUpdateMoviesbySearch(input);
  }

  onUpdateMoviesbyTopRating() {
    this.props.onUpdateMoviesbyTopRating();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <FrontBody
            movies={this.props.movies}
            onUpdateMoviesFeatured={() => this.onUpdateMoviesFeatured()}
            onUpdateMoviesbyCurrYear={() => this.onUpdateMoviesbyYear("2018")}
            onUpdateMoviesbyPastYear={() => this.onUpdateMoviesbyYear("")}
            onUpdateMoviesbySearch={this.onUpdateMoviesbySearch}
            onUpdateMoviesbyTopRating={() => this.onUpdateMoviesbyTopRating()}
          />
        </div>
      </div>
    );
  }
}

const mapActionsToProps = {
  onUpdateMoviesFeatured: updateMoviesFeatured,
  onUpdateMoviesbyYear: updateMoviesbyYear,
  onUpdateMoviesbySearch: updateMoviesbySearch,
  onUpdateMoviesbyTopRating: updateMoviesbyTopRating
};

const mapStateToProps = state => ({
  city: state.cinemas.city,
  movies: state.cinemas.movies
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
