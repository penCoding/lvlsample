import React, { Fragment } from 'react';

export const Landing = () => {
  return (
    <Fragment>
      <section className='bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-md-start'>
        <div className='container'>
          <div className='d-md-flex align-items-center justify-content-between'>
            <div className='col-lg'>
              <h1>
                Chinook<span className='text-warning'> Music Collection</span>
              </h1>
              <h5>
                A Database of
                <span className='text-warning'> Music Tracks</span>
              </h5>
              <p className='lead my-4'>
                <b>Like Music?</b> Search any word below and see what song
                titles in our collection contain that word!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
