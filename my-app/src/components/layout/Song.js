import React from 'react';

export const Song = ({ song }) => {
  var noComp;
  if (song.Composor !== '') {
    noComp = false;
  } else {
    noComp = true;
  }

  return (
    <section>
      <div className='col text-center'>
        <div className='card text-center border-primary shadow g-4 mb-5'>
          <div className='card-header pt-3'>
            <h5>Track: {song.Title}</h5>
          </div>
          <div className='card-body'>
            <span className='card-text'>
              <b>Composor:</b>
            </span>
            {noComp && <p className='card-text'>"Not Known"</p>}
            <p className='card-text'>{song.Composor}</p>
            <span className='card-text'>
              <b>Album:</b>
            </span>
            <p className='card-text'>{song.Album}</p>
          </div>
          <div className='card-footer text-muted'>Duration: Size:</div>
        </div>
      </div>
    </section>
  );
};

export default Song;
