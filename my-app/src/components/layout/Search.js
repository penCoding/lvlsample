import React, { Fragment, useEffect, useState } from 'react';

export const Search = ({ onSearchSubmit, clearResults }) => {
  // state variables for getting user input and debouncing
  const [searchData, setSearchData] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(searchData);

  // update value after .5 second from the last debouncedSearch update
  useEffect(() => {
    const timer = setTimeout(() => setSearchData(debouncedSearch), 100);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  // submit a new search
  useEffect(() => {
    // when onChange is triggered onSearchSubmit runs and takes input value to be fetched from back-end
    if (searchData !== '') {
      onSearchSubmit(searchData);
    } else {
      // run clearResults to clear song array
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
                    setDebouncedSearch(e.target.value.replace(/^\s/g, ''))
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
