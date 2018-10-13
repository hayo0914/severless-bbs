import * as firebaseActions from '../actions/FirebaseActions';

const INITIAL_STATE = {
  data: {
    data: [],
    lastVisible: null,
  },
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
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case firebaseActions.GET_BOARDS.FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
