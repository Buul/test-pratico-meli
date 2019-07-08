import styled from 'styled-components';
import pxToRem from '../../helpers/scales';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 100%;
`;

export const Line = styled.div`
  background-color: ${props => props.theme.colors.grey200};
  height: ${pxToRem(1)};
  margin: 0 ${pxToRem(16)};
`;

export const ResultBoxItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: ${pxToRem(16)};
  height: ${pxToRem(200)};
  width: 100%;

  @media ${props => props.theme.device.sm} {
    align-items: center;
    flex-direction: column;
    height: ${pxToRem(400)};
  }
`;

export const BoxPicture = styled.div`
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${pxToRem(4)};
  width: ${pxToRem(180)};

  @media ${props => props.theme.device.sm} {
    height: ${pxToRem(200)};
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${pxToRem(16)};
  .price {
    align-items: center;
    display: flex;
    font-size: 24px;
    margin-top: ${pxToRem(16)};

    .icon {
      margin-left: ${pxToRem(10)};
    }
  }

  .title {
    font-size: 18px;
  }
`;
