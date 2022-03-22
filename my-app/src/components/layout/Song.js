import React from 'react';

export const Song = ({ song }) => {
  return (
    <section>
      <div class='col text-center'>
        <div class='card text-center border-primary shadow g-4 mb-3'>
          <div class='card-header pt-3'>
            <h5>Track: {song.Title}</h5>
          </div>
          <div class='card-body'>
            <span class='card-text'>
              <b>Composor (If known):</b>
            </span>
            <p class='card-text'>{song.Composor}</p>
            <span class='card-text'>
              <b>Album:</b>
            </span>
            <p class='card-text'>{song.Album}</p>
          </div>
          <div class='card-footer text-muted'>Duration: Size:</div>
        </div>
      </div>
    </section>
  );
};

export default Song;
