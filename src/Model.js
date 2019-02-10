// export default (state, action) => {

// const actor = (fullName, role) => ({
//   fullName: () => fullName,
//   role: () => role
// });

// const movie = (name, genre, year, reviews, cast, poster) => ({
//   name: () => name,
//   genre: () => genre,
//   year: () => year,
//   reviews: () => reviews,
//   cast: () => cast,
//   poster: () => poster
// });

// const cinema = (city, movies) => ({
//   city: () => city,
//   movies: () => movie
// });

// const movie1 = movie(
//   "Venom",
//   "Action",
//   "2018",
//   [2, 3, 4],
//   actor("Tom Hardy", "Eddie Brock / Venom"),
//   "venom_poster"
// );

// function Actor(fullName, role) {
//   this.fullName = fullName;
//   this.role = role;
// }

// function Movie(name, genre, year, reviews, cast, poster) {
//   this.name = name;
//   this.genre = genre;
//   this.year = year;
//   this.reviews = reviews;
//   this.cast = cast;
//   this.poster = poster;
// }

// const movie1 = new Movie(
//   "Venom",
//   "Action",
//   "2018",
//   [2, 3, 4],
//   new Actor("Tom Hardy", "Eddie Brock / Venom"),
//   "venom_poster"
// );

// function Cinema(city, movies) {
//   this.city = city;
//   this.movies = movies;
// }

// let cinema1 = new Cinema("Horsens", [movie1]);

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

let cinema1 = {
  city: "Horsens",
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

function filterMoviesFeatured(movies) {
  return movies.filter(movies => movies.isFeatured);
}

function lowCase(movies) {
  for (let i = 0; i < movies.length; i++) {
    movies[i].name = movies[i].name.toLowerCase();
  }
}

function topRating(movies) {
  for (let i = 0; i < movies.length; i++) {
    movies[i].reviews = Math.round(
      movies[i].reviews.reduce((total, review) => total + review) /
        movies[i].reviews.length
    ).toString();
  }

  movies.sort(
    (a, b) => (a.reviews > b.reviews ? 1 : b.reviews > a.reviews ? -1 : 0)
  );
  console.log(movies);
}

topRating(cinema1.movies);
