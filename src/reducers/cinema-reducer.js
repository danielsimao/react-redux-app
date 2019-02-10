import {
  UPDATE_MOVIESBY_YEAR,
  UPDATE_MOVIE_FEATURED,
  UPDATE_MOVIEBY_SEARCH,
  UPDATE_MOVIEBY_TOPRATING
} from "../actions/cinema-actions";

const model = function() {
  const movie1 = {
    name: "Venom",
    genre: "Action",
    year: "2018",
    reviews: [2, 3, 4],
    actor: "Tom Hardy",
    poster: "venom_poster",
    isFeatured: true
  };

  const movie2 = {
    name: "Hateful Eight",
    genre: "Drama",
    year: "2015",
    reviews: [2, 3, 4],
    actor: "Samuel L. Jackson",
    poster: "hateful8_poster",
    isFeatured: true
  };

  const movie3 = {
    name: "Avengers: Infinity War",
    genre: "Fantasy",
    year: "2018",
    reviews: [2, 3, 4],
    actor: "Chris Hemswroth",
    poster: "infinity_poster",
    isFeatured: true
  };

  const movie4 = {
    name: "La La Land",
    genre: "Drama",
    year: "2016",
    reviews: [2, 3, 4],
    actor: "Emma Stone",
    poster: "lalaland_poster",
    isFeatured: true
  };

  const movie5 = {
    name: "Lord of the Rings",
    genre: "Fantasy",
    year: "2003",
    reviews: [2, 3, 4],
    actor: "Viggo Mortensen",
    poster: "lor_poster",
    isFeatured: true
  };

  const movie6 = {
    name: "Predator",
    genre: "Thriller",
    year: "2018",
    reviews: [2, 3, 4],
    actor: "Boyd Holbrook",
    poster: "predator_poster",
    isFeatured: false
  };

  const movie7 = {
    name: "Gone Girl",
    genre: "Crime",
    year: "2014",
    reviews: [2, 3, 4],
    actor: "Ben Affleck",
    poster: "gonegirl_poster",
    isFeatured: false
  };
  const movie8 = {
    name: "Sharknado",
    genre: "Action",
    year: "2013",
    reviews: [2, 1, 1],
    actor: "Ian Ziering",
    poster: "sharknado_poster",
    isFeatured: false
  };
  const movie9 = {
    name: "The Dark Knight",
    genre: "Action",
    year: "2008",
    reviews: [4, 3, 4],
    actor: "Christian Bale",
    poster: "batman_poster",
    isFeatured: true
  };
  const movie10 = {
    name: "Johnny English Strikes Again",
    genre: "Comedy",
    year: "2018",
    reviews: [3, 3, 4],
    actor: "Rowan Atkinson",
    poster: "johnnyeng_poster",
    isFeatured: false
  };

  let cinema = {
    city: "Horsens",
    filterText: "s",
    movies: [
      movie1,
      movie2,
      movie3,
      movie4,
      movie5,
      movie6,
      movie7,
      movie8,
      movie9,
      movie10
    ]
  };

  function topRating(movies) {
    return movies.map(m => {
      const score = Math.round(
        m.reviews.reduce((total, review) => total + review) / m.reviews.length
      );
      return { ...m, reviews: score };
    });
  }

  cinema.movies = topRating(cinema.movies);

  return cinema;
};

function filterMoviesThisYear(movies, filter) {
  return movies.filter(movies =>
    filter !== "2018" ? movies.year !== "2018" : movies.year === filter
  );
}

function filterMoviesFeatured(movies) {
  return movies.filter(movies => movies.isFeatured);
}

function filterMovies(query, movies) {
  return movies.filter(
    el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

function getTop6(movies) {
  movies.sort((a, b) =>
    a.reviews > b.reviews ? 1 : b.reviews > a.reviews ? -1 : 0
  );

  return movies.slice(movies.length - 6);
}

//state with the compelete model
const getNormalState = () => ({
  cinemas: model()
});

//first render of the page is with featured movies
const getInitialState = state => ({
  ...state,
  cinemas: {
    city: state.cinemas.city,
    filterText: "",
    movies: filterMoviesFeatured(state.cinemas.movies)
  }
});

export default function cinemaReducer(
  state = getInitialState(getNormalState()),
  action
) {
  switch (action.type) {
    case UPDATE_MOVIESBY_YEAR:
      state = getNormalState();
      return {
        ...state,
        cinemas: {
          city: state.cinemas.city,
          filterText: "",
          movies: filterMoviesThisYear(
            state.cinemas.movies,
            action.payload.filter
          )
        }
      };
    case UPDATE_MOVIE_FEATURED:
      state = getNormalState();
      return {
        ...state,
        cinemas: {
          city: state.cinemas.city,
          filterText: "",
          movies: filterMoviesFeatured(state.cinemas.movies)
        }
      };
    case UPDATE_MOVIEBY_SEARCH:
      state = getNormalState();
      return {
        ...state,
        cinemas: {
          city: state.cinemas.city,
          filterText: action.payload.filter,
          movies: filterMovies(action.payload.filter, state.cinemas.movies)
        }
      };
    case UPDATE_MOVIEBY_TOPRATING:
      state = getNormalState();
      return {
        ...state,
        cinemas: {
          city: state.cinemas.city,
          filterText: action.payload.filter,
          movies: getTop6(state.cinemas.movies)
        }
      };
    default:
      return state;
  }
}
