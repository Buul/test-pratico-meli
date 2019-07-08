import React, { useState, useEffect } from 'react';
import { func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { toggleSpinner, showMessageBox } from '../../actions';
import api from '../../services/api';
import { Container, DetailsBox, Info, Description, Picture, Painel } from './style';
import { fillSymbolCurrency } from '../../helpers';

const Details = ({ spinner, showMessage, match }) => {
  const {
    params: { id },
  } = match;
  const [data, setData] = useState({});

  useEffect(() => {
    async function onGetDatailsItem() {
      spinner(true);
      const dataResp = [];
      try {
        const response = await api.get(`items/${id}`);
        return response.data;
      } catch (error) {
        showMessage({ message: ['Error al obtener detalles'], icon: 'error' });
        spinner(false);
      }
      return dataResp;
    }
    onGetDatailsItem().then(response => {
      setData(response.item);
      spinner(false);
    });
  }, []);

  const fillCondition = condition => {
    if (condition === 'new') return 'Nuevo';
    return 'Usado';
  };

  return (
    <Container>
      <DetailsBox>
        <Info>
          <Picture>
            <img className="icon" src={data.picture} alt="img" />
          </Picture>
          <Painel>
            <div className="info-top">{`${fillCondition(data.condition)} - ${
              data.sold_quantity
            } vendidos`}</div>
            <div className="info-middle">{data.title}</div>
            <div className="info-bottom">{`${fillSymbolCurrency(
              data.price && data.price.currency
            )}`}</div>
            <Button type="primary" style={{ width: '50%' }}>
              Comprar
            </Button>
          </Painel>
        </Info>
        <Description>
          <div className="title">Descripción del producto</div>
          <div className="desc"> {data.description}</div>
        </Description>
      </DetailsBox>
    </Container>
  );
};
Details.propTypes = {
  spinner: func.isRequired,
  showMessage: func.isRequired,
  match: shape({}).isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      spinner: toggleSpinner,
      showMessage: showMessageBox,
    },
    dispatch
  );

const DetailsConnect = connect(
  null,
  mapDispatchToProps
)(Details);

export default DetailsConnect;
