import * as boardActions from '../actions/BoardActions';

const INITIAL_STATE = {
  data: [],
  lastVisible: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case boardActions.GET_BOARDS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case boardActions.GET_BOARDS.SUCCESS:
      const { data, lastVisible } = action.payload.data;
      return {
        ...state,
        data,
        lastVisible,
        loading: false,
      };
    case boardActions.GET_BOARDS.FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case boardActions.CREATE_BOARD.SUCCESS:
      return {
        ...state,
        data: [action.payload.data].concat(state.data),
      };
    default:
      return state;
  }
};
