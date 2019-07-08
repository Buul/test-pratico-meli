import React, { useState, useEffect } from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { uniqueId } from 'lodash';
import Header from './Header';
import { BoxLogo, Content, Categories } from './style';
import { Input } from '../ui';

const Home = ({ history, children, categories }) => {
  const [categoriesState, setCategoriesState] = useState([]);

  const handleClickSearch = value => history.push(`/items?search=${value}`);

  useEffect(
    () => {
      const categoriesLocalStorage = JSON.parse(localStorage.getItem('categories'));
      setCategoriesState(categoriesLocalStorage);
    },
    [categories]
  );
  return (
    <>
      <Header>
        <BoxLogo />
        <Input onClickSearch={handleClickSearch} />
      </Header>

      <Content>
        <Categories>
          {categoriesState &&
            categoriesState.slice(0, 4).map((item, index) => (
              <div key={uniqueId()}>
                {item}
                {index < 3 && <span>{`>`}</span>}
              </div>
            ))}
        </Categories>
        {children}
      </Content>
    </>
  );
};

Home.propTypes = {
  history: shape({ push: func.isRequired }).isRequired,
};

const mapStateToProps = state => ({
  categories: state.categoriesReducer.categories,
});

const HomeConnect = connect(mapStateToProps)(Home);

export default withRouter(HomeConnect);
