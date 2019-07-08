import { SET_CATEGORIES } from '../helpers/constants';

const INITIAL_STATE = {
  categories: [],
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      localStorage.setItem('categories', JSON.stringify(action.payload));
      return {
        ...state,
        categories: action.payload,
      };

    default:
  }

  return state;
}
