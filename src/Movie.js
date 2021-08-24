import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
function Movie({ title, year, summary, poster, genres}){
    return <div class="movie__data">
      <img src={poster} alt={title} title={title}/>
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year">{year}</h5>
      <p class="movie_summary">{summary}</p>
      </div>
}

Movie.PropType = {year : PropTypes.number.isRequired
                  ,title : PropTypes.string.isRequired
                  ,summary : PropTypes.string.isRequired
                  ,poster : PropTypes.string.isRequired
                  ,genres: PropTypes.arrayOf(PropTypes.string).isRequired,
                };

export default Movie;