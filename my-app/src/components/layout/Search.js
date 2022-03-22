import React, { Fragment, useEffect, useState } from 'react';

export const Search = ({ onSearchSubmit, clearResults }) => {
  const [searchData, setSearchData] = useState('');

  const [debouncedSearch, setDebouncedSearch] = useState(searchData);

  // update value after 1 second from the last update of 'debouncedSearch'
  useEffect(() => {
    const timer = setTimeout(() => setSearchData(debouncedSearch), 500);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  // submit a new search
  useEffect(() => {
    if (searchData !== '') {
      onSearchSubmit(searchData);
    } else {
      clearResults();
    }
  }, [searchData]);

  return (
    <Fragment>
      <section className='bg-primary text-light p-5 mb-5'>
        <div className='container'>
          <form>
            <div className='d-md-flex justify-content-between align-items-center'>
              <div className='input-group news-input'>
                <input
                  name='search'
                  value={searchData}
                  onChange={(e) =>
                    setSearchData(e.target.value.replace(/^\s/g, ''))
                  }
                  type='text'
                  className='form-control'
                  placeholder='Type here to find song titles that contain any word that you enter!'
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Search;
