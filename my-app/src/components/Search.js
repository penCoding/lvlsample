import React from 'react';

export const Search = () => {
  return (
    <div class='mb-3'>
      <label for='exampleFormControlInput1' class='form-label'>
        Search Track Collection
      </label>
      <input
        type='email'
        class='form-control'
        id='exampleFormControlInput1'
        placeholder='Find music track titles with any word you search!'
      />
    </div>
  );
};

export default Search;
