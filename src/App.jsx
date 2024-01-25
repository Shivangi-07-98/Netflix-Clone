import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Nav Components/Home';
import TVShows from './Nav Components/TvShows';
import Movies from './Nav Components/Movies';
import MyList from './Nav Components/MyList';
import NewPopular from './Nav Components/New&Popular';
import Children from './Nav Components/Children';
import BrowseByLanguages from './Nav Components/BrowseByLanguages';

function App() {
  return (
    <Router>
      <div className='app'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/new-popular" element={<NewPopular />} />
          <Route path="/browse-languages" element={<BrowseByLanguages />} />
          <Route path="/children" element={<Children />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;