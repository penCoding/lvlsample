import React, { Fragment, useEffect, useState } from 'react';

export const Search = ({ onSearchSubmit, clearResults }) => {
  // const [searchData, setSearchData] = useState({
  //   search: '',
  // });
  const [searchData, setSearchData] = useState('');

  // destructure
  // const { search } = searchData;

  const [debouncedSearch, setDebouncedSearch] = useState(searchData);

  // const onChange = (e) =>
  //   setSearchData({ ...searchData, [e.target.name]: e.target.value });

  // useEffect(() => {
  //   if (searchData !== '') {
  //     onSearchSubmit(searchData);
  //   }
  // }, [searchData, onSearchSubmit]);

  // update value after 1 second from the last update of 'debouncedSearch'
  useEffect(() => {
    const timer = setTimeout(() => setSearchData(debouncedSearch), 1000);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  // submit a new search
  useEffect(() => {
    if (searchData !== '') {
      // const delayDebounceFn = setTimeout(() => {
      //   onSearchSubmit(searchData);
      // }, 3000);
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
                  onChange={(e) => setSearchData(e.target.value)}
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
    </Fragment>
  );
};

export default Search;
