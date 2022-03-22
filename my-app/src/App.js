import React, { useState } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Search from './components/layout/Search';
import Song from './components/layout/Song';
import './App.css';

const App = () => {
  const [songs, setSongs] = useState([]);

  const onSearchSubmit = async (search) => {
    const res = await fetch(`http://localhost:4041/tracks/${search}`);
    const songsArray = await res.json();
    setSongs(songsArray);
    console.log('New Search submit', search);
  };

  const clearResults = () => setSongs([]);

  const renderedSongs = songs.map((song, i) => {
    return <Song song={song} key={i} />;
  });

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Landing />
                <Search
                  onSearchSubmit={onSearchSubmit}
                  clearResults={clearResults}
                />
              </>
            }
          />
        </Routes>
      </Fragment>
      <div className='container col-5'>{renderedSongs}</div>
    </Router>
  );
};

export default App;
