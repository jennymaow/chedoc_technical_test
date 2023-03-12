import './Home.css';

import { Link } from 'react-router-dom';

import PageHeader from '../ui/pageHeader';

const Home = () => {
  return (
    <div className="Home">
      <PageHeader text="Popular Titles" />
      <div className="home-body">
        <div className="card-home">
          <Link to="/series" className="card-home-img home-series">
            <h3>Series</h3>
            <img src="/placeholder.png" alt="placeholder img" className="placeholder" />
          </Link>
          <Link to="/series">Popular Series</Link>
        </div>
        <div className="card-home">
          <Link to="/movies" className="card-home-img">
            <h3>Movies</h3>
            <img src="/placeholder.png" alt="placeholder img" className="placeholder" />
          </Link>
          <Link to="/movies">Popular Movies</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
