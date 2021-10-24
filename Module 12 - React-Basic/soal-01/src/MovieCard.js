import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return movie.map((movie) => {
      return (
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className='card-body'>
              <a href={movie.url} class='btn btn-primary w-100 text-uppercase'>
                readmore
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default MovieCard;
