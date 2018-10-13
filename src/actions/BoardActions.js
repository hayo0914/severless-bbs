import { REQUEST, SUCCESS, FAIL, action } from './helpers';

const GET_BOARDS_BASE = 'GET_BOARDS_';
export const GET_BOARDS = {
  REQUEST: GET_BOARDS_BASE + REQUEST,
  SUCCESS: GET_BOARDS_BASE + SUCCESS,
  FAIL: GET_BOARDS_BASE + FAIL,
};

export const getBoards = {
  request: lastVisible => action(GET_BOARDS.REQUEST, { lastVisible }),
  success: data => action(GET_BOARDS.SUCCESS, { data }),
  fail: error => action(GET_BOARDS.FAIL, { error }),
};

const CREATE_BOARD_BASE = 'CREATE_BOARD_';
export const CREATE_BOARD = {
  REQUEST: CREATE_BOARD_BASE + REQUEST,
  SUCCESS: CREATE_BOARD_BASE + SUCCESS,
  FAIL: CREATE_BOARD_BASE + FAIL,
};

export const createBoard = {
  request: ({ title, userName, comment }) =>
    action(CREATE_BOARD.REQUEST, { data: { title, userName, comment } }),
  success: data => action(CREATE_BOARD.SUCCESS, { data }),
  fail: error => action(CREATE_BOARD.FAIL, { error }),
};
