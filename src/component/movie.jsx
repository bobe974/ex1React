import { deleteMovie, getMovies } from "../services/fakeMovieService";
import { Component } from "react";

class Movie extends Component {
  state = { movies: getMovies() };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieId);
    this.setState({ movies });
    deleteMovie(movieId);
  };

  render() {
    return (
       <div>
        {this.state.movies.length === 0 && <h2> There are no movies in the database DUCON</h2>}
        {this.state.movies.length > 0 && (<div> <h2>Showing {this.state.movies.length} movies in the database</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Titre</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> </div>)}
       
      </div>
    );
  }
}

export default Movie;
