import React, { Fragment, useEffect, useState } from 'react';

export const Search = ({ onSearchSubmit, clearResults }) => {
  const [searchData, setSearchData] = useState({
    search: '',
  });

  // destructure
  const { search } = searchData;

  const onChange = (e) =>
    setSearchData({ ...searchData, [e.target.name]: e.target.value });

  // const onSearchSubmit = (search) => {
  //   console.log('New Search submit', search);
  // };

  useEffect(() => {
    if (search !== '') {
      onSearchSubmit(search);
    }
  }, [search, onSearchSubmit]);

  return (
    <Fragment>
      <section className='bg-primary text-light p-5 mb-5'>
        <div className='container'>
          <form>
            <div className='d-md-flex justify-content-between align-items-center'>
              <div className='input-group news-input'>
                <input
                  name='search'
                  value={search}
                  onChange={(e) => onChange(e)}
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
