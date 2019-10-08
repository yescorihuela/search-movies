import React, {Component} from 'react'
import { Movie } from './Movie';
import PropTypes from 'proptypes'

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movies } = this.props;
    return movies.map( movie => {
      return <Movie
                year={movie.Year}
                poster={movie.Poster}
                title={movie.Title}
                key={movie.imdbID}/>
    })
  }
}