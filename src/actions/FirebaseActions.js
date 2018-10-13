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
