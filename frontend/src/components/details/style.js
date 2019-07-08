import styled from 'styled-components';
import pxToRem from '../../helpers/scales';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: ${pxToRem(32)};
  width: 100%;
`;

export const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: ${pxToRem(32)};
`;

export const Painel = styled.div`
  display: flex;
  flex-direction: column;

  .info-top {
    font-size: 14px;
    margin-bottom: ${pxToRem(16)};
  }

  .info-middle {
    font-size: 24px;
    margin-bottom: ${pxToRem(32)};
  }

  .info-bottom {
    font-size: 46px;
    margin-bottom: ${pxToRem(32)};
  }
`;

export const Picture = styled.div`
  width: ${pxToRem(680)};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 28px;
    margin-bottom: ${pxToRem(32)};
  }

  .desc {
    width: ${pxToRem(680)};
  }
`;
