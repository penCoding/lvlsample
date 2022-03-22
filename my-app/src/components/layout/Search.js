import React from 'react';

export const Search = () => {
  return (
    <section className='bg-primary text-light p-5 mb-5'>
      <div className='container'>
        <form>
          <div className='d-md-flex justify-content-between align-items-center'>
            <div className='input-group news-input'>
              <input
                type='text'
                className='form-control'
                placeholder='Type here to find song titles that contain any word that you enter!'
              />
              <button type='submit' className='btn btn-dark btn-lg'>
                Button
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Search;
