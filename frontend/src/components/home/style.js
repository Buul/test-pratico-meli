import styled from 'styled-components';
import logo from '../../assets/image/Logo_ML.png';
import pxToRem from '../../helpers/scales';

export const BoxLogo = styled.div`
  background: url(${logo});
  background-position: left;
  background-repeat: no-repeat;
  height: 100%;
  width: ${pxToRem(80)};
`;

export const Categories = styled.div`
  align-items: center;
  color: ${props => props.theme.colors.grey500};
  display: flex;
  font-size: 14px;
  margin: ${pxToRem(16)} 0;

  span {
    margin: 0 ${pxToRem(5)};
  }
`;

export const Content = styled.div`
  padding: 0 ${pxToRem(100)};
  width: 100%;

  @media ${props => props.theme.device.sm} {
    padding: 0 ${pxToRem(40)};
  }
`;
