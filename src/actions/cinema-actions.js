export const UPDATE_MOVIESBY_YEAR = "updateMoviesbyYear";
export const UPDATE_MOVIE_FEATURED = "updateMoviesFeatured";
export const UPDATE_MOVIEBY_SEARCH = "updateMoviesbySearch";
export const UPDATE_MOVIEBY_TOPRATING = "updateMoviesbyTopRating";

export function updateMoviesbyYear(newFilter) {
  return {
    type: UPDATE_MOVIESBY_YEAR,
    payload: {
      filter: newFilter
    }
  };
}
export function updateMoviesFeatured() {
  return {
    type: UPDATE_MOVIE_FEATURED,
    payload: {
      filter: ""
    }
  };
}

export function updateMoviesbySearch(input) {
  return {
    type: UPDATE_MOVIEBY_SEARCH,
    payload: {
      filter: input
    }
  };
}

export function updateMoviesbyTopRating() {
  return {
    type: UPDATE_MOVIEBY_TOPRATING,
    payload: {
      filter: ""
    }
  };
}
