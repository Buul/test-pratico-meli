import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import pxToRem from '../../helpers/scales';

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.yellow};
  display: flex;
  height: ${pxToRem(60)};
  padding: 0 ${pxToRem(100)};

  width: 100%;

  @media ${props => props.theme.device.sm} {
    padding: 0 ${pxToRem(20)};
  }
`;

const Header = ({ children }) => <Container>{children}</Container>;

Header.propTypes = {
  children: node.isRequired,
};

export default Header;
