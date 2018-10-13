import { call, put, takeLatest } from 'redux-saga/effects';
import * as boardApis from '../apis/BoardApis';
import * as boardActions from '../actions/BoardActions';

function* fetchBoards(action) {
  try {
    const data = yield call(boardApis.getData, action.payload.lastVisible);
    yield put(boardActions.getBoards.success(data));
  } catch (e) {
    yield put(boardActions.getBoards.fail(e));
  }
}

function* createBoard(action) {
  try {
    const data = yield call(boardApis.createBoard, action.payload.data);
    yield put(boardActions.createBoard.success(data));
  } catch (e) {
    yield put(boardActions.createBoard.fail(e));
  }
}

function* mySaga() {
  yield takeLatest(boardActions.GET_BOARDS.REQUEST, fetchBoards);
  yield takeLatest(boardActions.CREATE_BOARD.REQUEST, createBoard);
}

export default mySaga;
