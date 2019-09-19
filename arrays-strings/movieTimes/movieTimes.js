// Write a function that takes an integer flightLength (in minutes)
// and an array of integers movieLengths (in minutes) and returns
// a boolean indicating whether there are two numbers in movieLengths
// whose sum equals flightLength.

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

function movieTimes(moviesLength, flightLength) {
  // keep track of the length of movies we have seen
  const moviesSeen = new Set();

  for (let i = 0; i < moviesLength.length; i++) {
    // get a movie to compare
    const movie = moviesLength[i];
    // compare flight length to move
    const secondMovieLength = flightLength - movie;

    if (moviesSeen.has(secondMovieLength)) return true;
    moviesSeen.add(movie);
  }
  return false;
}

module.exports = movieTimes;
