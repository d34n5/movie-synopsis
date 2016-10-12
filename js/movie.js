function Movie() {
  this.title = null;
  this.year = null;
  this.plot = null;
  this.poster = null;
}

Movie.prototype.getMovie = function(movieTitle) {
  // use the API to find the movie
  // set the current Movie objects properties to the correct strings
  var currentMovie = this;
  $.get('http://www.omdbapi.com/?t=' + movieTitle)
    .then(function(response) {
      currentMovie.title = response.Title;
      currentMovie.year = response.Year;
      currentMovie.plot = response.Plot;
      currentMovie.poster = response.Poster;
  });
};

exports.movieModule = Movie;
