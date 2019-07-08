import React, { useEffect } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCategories } from '../../actions';

const Search = ({ setCategoriesAction }) => {
  useEffect(() => {
    setCategoriesAction([]);
  }, []);
  return <div />;
};

Search.propTypes = {
  setCategoriesAction: func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCategoriesAction: setCategories,
    },
    dispatch
  );

const SearchConnect = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchConnect;
