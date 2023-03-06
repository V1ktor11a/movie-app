const MovieList = (props) => {
  const FavouriteComponents = props.favouriteComponents;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={index}
          className='image-container d-flex justify-content-start m-3'
        >
          <img src={movie.Poster} alt='movie'></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >
            <FavouriteComponents />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
