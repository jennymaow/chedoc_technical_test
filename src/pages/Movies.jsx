import './Movies.css';

import { useEffect, useState } from 'react';

import Card from '../components/Card';
import PageHeader from '../ui/pageHeader';
import Pagination from '../components/Pagination';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [printMovies, setPrintMovies] = useState([]);
  const [message, setMessage] = useState('');

  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const getMovies = async () => {
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      );
      const data = await res.json();
      const dataMovies = data.entries.filter((item) => item.programType === 'movie');
      const moviesYear = dataMovies.filter((movie) => movie.releaseYear >= 2010);
      const moviesSortByTitle = moviesYear.sort((a, b) => (a.title > b.title ? 1 : -1));
      setMovies(moviesSortByTitle);
      setPrintMovies(moviesSortByTitle);
      setLoaded(true);
    } catch (error) {
      setMessage('Sorry, something went wrong');
    }
  };

  const filterMovies = (year) => {
    const filteredMovies = movies.filter((movie) => movie.releaseYear == year);
    console.log(filteredMovies);
    return filteredMovies;
  };

  useEffect(() => {
    setMessage('Loading...');
    getMovies();
  }, []);

  return (
    <section className="Movies">
      <PageHeader text="Popular Movies" />
      <div className="filter-bar">
        <input
          data-testid="movies-input"
          type="text"
          placeholder="Enter a year"
          onChange={(ev) => {
            ev.target.value !== ''
              ? setPrintMovies(filterMovies(ev.target.value))
              : setPrintMovies(movies);
            setCurrentPage(1);
          }}
        />
        <div className="show-items">
          <h5>Show:</h5>
          <select
            data-testid="select"
            onChange={(ev) => {
              setItemsPerPage(parseInt(ev.target.value));
              setCurrentPage(1);
            }}
          >
            <option>7</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
      </div>
      <section className="movies-body" data-testid="movies-body">
        {loaded ? (
          printMovies.length ? (
            printMovies
              .slice(firstIndex, lastIndex)
              .map((movie) => <Card item={movie} key={movie.title} />)
          ) : (
            <h1>No results</h1>
          )
        ) : (
          <h1>{message}</h1>
        )}
      </section>
      {printMovies.length && (
        <Pagination
          array={printMovies}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
        />
      )}
    </section>
  );
};

export default Movies;
