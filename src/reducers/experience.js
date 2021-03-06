import { GET_EXPERIENCE, RECEIVE_EXPERIENCE } from '../actions';

export default function experience(state = { isFetching: false, history: [], name: '' }, action) {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_EXPERIENCE:
      return {
        ...state,
        isFetching: false,
        history: action.history,
      };
    default:
      return state;
  }
}
