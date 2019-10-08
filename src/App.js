import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { Movie } from './components/Movie';
import './App.css';
import 'bulma/css/bulma.css';
class App extends Component {
  state  = { results: [] }
  _handleResults = ( results ) => {
    this.setState({results})
  }
  _renderResults () {
    const { results } = this.state;
    return results.map( movie => {
      return <Movie
                year={movie.Year}
                poster={movie.Poster}
                title={movie.Title}
                key={movie.imdbID}/>
    })
  }
  render() {
    return (
        <div className='App'>
          <Title>Search movies</Title>
          <div className='SearchForm-wrapper'>
            <SearchForm onResults={this._handleResults}/>
          </div>
          <br/>
          {this.state.results.length === 0
            ? <p>Sin resultados</p>
            : this._renderResults()
          }
        </div>
    )
  }
}
export default App;
