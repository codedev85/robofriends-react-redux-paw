import React from 'react';

const SearchField = ({searchInput , searchChange}) => {

	return (
		<div className='pa2'>
          <input 
          type='search'
          placeholder='Search here ...'
          className='ba b--green bg-lightest-blue pa3'  
          onChange={searchChange}
          />
		</div>
		)
}
export default SearchField;