import React, { useState, useEffect } from 'react';
import { func, shape } from 'prop-types';
import { uniqueId } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { Container, ResultBoxItem, Line, ItemInfo, BoxPicture } from './style';
import { toggleSpinner, showMessageBox, setCategories } from '../../actions';
import api from '../../services/api';
import { fillSymbolCurrency } from '../../helpers';
import ShippingIcon from '../../assets/image/ic_shipping.png';

const Results = ({ spinner, showMessage, setCategoriesAction, location, history }) => {
  const [data, setData] = useState({ items: [] });

  useEffect(
    () => {
      async function onGetItemsByQuery() {
        spinner(true);
        const dataResp = [];
        try {
          const values = queryString.parse(location.search);
          const response = await api.get(`items?q=${values.search}`);
          return response.data;
        } catch (error) {
          showMessage({ message: ['Error al buscar.'], icon: 'error' });
          spinner(false);
        }
        return dataResp;
      }
      onGetItemsByQuery().then(response => {
        if (response.items.length === 0)
          showMessage({ message: ['No se encontraron articulos.'], icon: 'info' });
        setData({ items: response.items });
        setCategoriesAction(response.categories);
        spinner(false);
      });
    },
    [location.search]
  );

  return (
    <Container>
      {data.items.map((item, index) => (
        <div key={uniqueId()}>
          <ResultBoxItem
            onClick={() => {
              history.push(`items/${item.id}`);
            }}
          >
            <BoxPicture src={item.picture} />
            <ItemInfo>
              <div className="price">
                {`${fillSymbolCurrency(item.price.currency)} ${item.price.amount.toFixed(2)}`}
                {item.free_shipping && <img className="icon" src={ShippingIcon} alt="img" />}
              </div>
              <div className="title">{item.title}</div>
            </ItemInfo>
          </ResultBoxItem>
          {data.items.length - 1 > index && <Line />}
        </div>
      ))}
    </Container>
  );
};

Results.propTypes = {
  spinner: func.isRequired,
  showMessage: func.isRequired,
  setCategoriesAction: func.isRequired,
  location: shape({}).isRequired,
  history: shape({ push: func.isRequired }).isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      spinner: toggleSpinner,
      showMessage: showMessageBox,
      setCategoriesAction: setCategories,
    },
    dispatch
  );

const ResultsConnect = connect(
  null,
  mapDispatchToProps
)(Results);

export default withRouter(ResultsConnect);
