import React from 'react';
import { func } from 'prop-types';

import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

const InputCustomize = styled(Search)`
  .ant-input:hover,
  .ant-input:focus {
    border-color: ${props => props.theme.colors.grey200};
    opacity: none;
    box-shadow: none;
  }
  .ant-btn-primary {
    background-color: ${props => props.theme.colors.grey100};
    border: none;
    color: ${props => props.theme.colors.black};
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background-color: ${props => props.theme.colors.grey200};
    color: ${props => props.theme.colors.black};
  }
`;

const InputUI = ({ onClickSearch }) => (
  <InputCustomize
    placeholder="Nunca dejes de buscar"
    onSearch={value => onClickSearch(value)}
    enterButton
  />
);

InputUI.propTypes = {
  onClickSearch: func.isRequired,
};

export default InputUI;
