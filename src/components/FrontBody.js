import React, { Component } from "react";
import "./FrontBody.css";
import Poster from "./Poster";

class FrontBody extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      inputField: ""
    };
  }

  submitHandler() {
    if (!this.state.inputField) {
      alert("Empty input");
      return false;
    }

    this.props.onUpdateMoviesbySearch(this.state.inputField);

    this.setState({
      inputField: ""
    });
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="buttonCont">
          <button
            onClick={this.props.onUpdateMoviesFeatured}
            className="button"
          >
            Featured
          </button>
          <button
            onClick={this.props.onUpdateMoviesbyCurrYear}
            className="button"
          >
            Recent Releases
          </button>
          <button
            onClick={this.props.onUpdateMoviesbyPastYear}
            className="button"
          >
            Past Years Releases
          </button>
          <button
            onClick={this.props.onUpdateMoviesbyTopRating}
            className="button"
          >
            Top Rated
          </button>
          <div className="inputComp">
            <input className="input" onChange={this.handleChange} type="text" />
            <button className="button" onClick={this.submitHandler}>
              Search
            </button>
          </div>
        </div>
        <ul className="flex-container">
          {this.props.movies.length < 1 ? (
            <h2 className="emptyError">No movies</h2>
          ) : (
            this.props.movies.map(({ name, poster }) => (
              <Poster key={name} name={name} pic={poster} />
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default FrontBody;
