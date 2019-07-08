import { SET_CATEGORIES } from '../helpers/constants';

export function setCategories(cagories) {
  return {
    type: SET_CATEGORIES,
    payload: cagories,
  };
}

export default setCategories;
