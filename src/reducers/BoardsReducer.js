import * as firebaseActions from '../actions/FirebaseActions';

const INITIAL_STATE = {
  data: [],
  lastVisible: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case firebaseActions.GET_BOARDS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case firebaseActions.GET_BOARDS.SUCCESS:
      const { data, lastVisible } = action.payload.data;
      return {
        ...state,
        data,
        lastVisible,
        loading: false,
      };
    case firebaseActions.GET_BOARDS.FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case firebaseActions.CREATE_BOARD.SUCCESS:
      return {
        ...state,
        data: [action.payload.data].concat(state.data),
      };
    default:
      return state;
  }
};
