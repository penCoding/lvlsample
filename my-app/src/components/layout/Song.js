import React from 'react';

export const Song = ({ song }) => {
  // check for no composor since we know some entries are blank
  var noComp = checkComp(song.Composor);

  // convert miliseconds
  var length = convertMillsToDuration(song.Len);
  // convert bytes
  var size = formatBytes(song.Size, 0);

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
          <div className='card-footer text-muted'>
            Duration: {length} | File Size: {size}
          </div>
        </div>
      </div>
    </section>
  );
};

// check for no composor
function checkComp(composor) {
  if (composor !== '') {
    return false;
  } else {
    return true;
  }
}

// function for converting milliseconds to minutes and seconds
const convertMillsToDuration = (mills) => {
  var minutes = Math.floor(mills / 60000);
  var seconds = ((mills % 60000) / 1000).toFixed(0);
  //ES6 interpolated literals/template literals
  //If seconds is less than 10 put a zero in front.
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// function for converting bytes
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default Song;
