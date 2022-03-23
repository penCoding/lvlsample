import React, { useState } from 'react';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Search from './components/layout/Search';
import Song from './components/layout/Song';
import './App.css';

const App = () => {
  // setting up state
  const [songs, setSongs] = useState([]);

  // using fetch to send user input string to backend to use in query
  const onSearchSubmit = async (searchData) => {
    const res = await fetch(`http://localhost:4041/tracks/${searchData}`);
    const songsArray = await res.json();
    // take response from backend and use to set songs
    setSongs(songsArray);
  };

  // clear results setting to empty
  const clearResults = () => setSongs([]);

  var renderedSongs;
  var noResults;

  // if no results set noResults to true to display the message for no results
  if (songs !== null) {
    renderedSongs = songs.map((song, i) => {
      return <Song song={song} key={i} />;
    });
  } else {
    noResults = true;
  }

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
      <div className='container'>
        <div className='row mt-lg-5 row-cols-xs-1 row-cols-sm-1 row-cols-md-2 g-4'>
          {renderedSongs}
        </div>
      </div>
      {noResults && (
        <div className='container text-center'>
          <h3>Oops...No tracks found with that in their title</h3>
        </div>
      )}
    </Router>
  );
};

export default App;
