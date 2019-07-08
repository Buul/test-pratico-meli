import { forIn } from 'lodash';
import currencyInfos from './currency';

export const fillSymbolCurrency = currency => {
  const currencies = currencyInfos;
  let symbolResp = '$';
  forIn(currencies, ({ symbol }, key) => {
    if (key === currency) symbolResp = symbol;
  });

  return symbolResp;
};

export default fillSymbolCurrency;
