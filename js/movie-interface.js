var Movie = require('./../js/movie.js').movieModule;

$(document).ready(function() {
  var ourMovie = new Movie();

  $('#search').submit(function(event) {
    event.preventDefault();
    var searchInput = $('#movieTitle').val();
    ourMovie.getMovie(searchInput);
    $('#info').html('...');
    setTimeout(function() {
      $('#info').html(ourMovie.title + "<br>" + ourMovie.year + "<br>" + ourMovie.plot + "<img class='poster' src='" + ourMovie.poster + "'>");
    }, 1000);
  });

});
