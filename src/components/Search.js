import React from 'react';
import PropTypes from 'prop-types';
import {MdSearch} from 'react-icons/md';
import './Search.scss';

const Search = ({placeholder}) => {
  return (
    <div className='Search'>
      <MdSearch className="Search__icon"/>
      <input placeholder={placeholder}/>
    </div>
  )
}

Search.defaultProps = {
  placeholder: '가고 싶은 곳을 검색해보세요!'
};
Search.propTypes =  {
  placeholder: PropTypes.string
};

export default Search;