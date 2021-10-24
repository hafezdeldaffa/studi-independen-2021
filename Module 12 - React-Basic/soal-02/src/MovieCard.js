import React, { useState, useEffect } from 'react';

function MovieCard() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovie] = useState([]);

  useEffect(() => {
    fetch('https://api.jikan.moe/v3/top/anime/1/airing')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(true);
          setMovie(result.top);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoading) {
    return <div>Loading...</div>;
  } else {
    return movieList.map((movie) => (
      <div
        key={movie.mal_id}
        className='col-lg-3 col-md-4 col-sm-6 col-12 my-3'
      >
        <div className='card h-100'>
          <img src={movie.image_url} className='card-img-top' alt='skilvul' />
          <div className='card-body'>
            <h5 className='card-title'>{movie.title}</h5>
            <h6 className='card-subtitle mb-2'>
              <span
                className={
                  movie.type === 'TV' ? `badge bg-danger` : `badge bg-success`
                }
              >
                {movie.type}
              </span>
            </h6>
            <p className='card-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className='card-body'>
            <a href={movie.url} class='btn btn-primary w-100 text-uppercase'>
              readmore
            </a>
          </div>
        </div>
      </div>
    ));
  }
}

export default MovieCard;
