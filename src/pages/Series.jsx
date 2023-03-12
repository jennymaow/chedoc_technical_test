import './Series.css';

import { useEffect, useState } from 'react';
import Card from '../components/Card';
import PageHeader from '../ui/pageHeader';
import Pagination from '../components/Pagination';
const Series = () => {
  const [series, setSeries] = useState([]);
  const [printSeries, setPrintSeries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState('');

  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const getSeries = async () => {
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json',
      );
      const data = await res.json();
      const dataSeries = data.entries.filter((item) => item.programType === 'series');
      const seriesYear = dataSeries.filter((serie) => serie.releaseYear >= 2010);
      const seriesSortByTitle = seriesYear.sort((a, b) => (a.title > b.title ? 1 : -1));
      setSeries(seriesSortByTitle);
      setPrintSeries(seriesSortByTitle);
      setLoaded(true);
    } catch (error) {
      setMessage('Sorry, something went wrong');
    }
  };

  const filterSeries = (year) => {
    const filteredSeries = series.filter((serie) => serie.releaseYear == year);
    return filteredSeries;
  };

  useEffect(() => {
    setMessage('Loading...');
    getSeries();
  }, []);

  return (
    <section className="Series">
      <PageHeader text="Popular Series" />
      <div className="filter-bar">
        <input
          data-testid="series-input"
          type="text"
          placeholder="Enter a year"
          onChange={(ev) => {
            ev.target.value !== ''
              ? setPrintSeries(filterSeries(ev.target.value))
              : setPrintSeries(series);
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
      <section className="series-body" data-testid="series-body">
        {loaded ? (
          printSeries.length ? (
            printSeries
              .slice(firstIndex, lastIndex)
              .map((serie) => <Card item={serie} key={serie.title} />)
          ) : (
            <h1>No results</h1>
          )
        ) : (
          <h1>{message}</h1>
        )}
      </section>
      {printSeries.length && (
        <Pagination
          array={printSeries}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
        />
      )}
    </section>
  );
};

export default Series;
