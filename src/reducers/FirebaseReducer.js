import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  loadingBoards: false,
  currentBoard: undefined,
  currentThtread: undefined,
  lastVisibleBoard: undefined,
  boards: [],
  threads: [],
  comments: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BOARDS_REQUEST:
      return {
        ...state,
        loadingBoards: true,
      };
    case FETCH_BOARDS_SUCCESS:
      const { boards, lastVisibleBoard } = action.payload;
      return {
        ...state,
        boards,
        lastVisibleBoard,
        loadingBoards: false,
      };
    case FETCH_BOARDS_FAIL:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
