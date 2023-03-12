import './App.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import GridLayout from './Layout/GridLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

function App() {
  return (
    <div className="App">
      <GridLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
        <Footer />
      </GridLayout>
    </div>
  );
}

export default App;
