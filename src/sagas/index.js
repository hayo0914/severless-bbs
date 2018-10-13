import { call, put, takeLatest } from 'redux-saga/effects';
import * as firebaseApis from '../apis/FirebaseApis';
import * as firebaseActions from '../actions/FirebaseActions';

function* fetchBoards(action) {
  try {
    const data = yield call(
      firebaseApis.Boards.getData,
      action.payload.lastVisible,
    );
    yield put(firebaseActions.getBoards.success(data));
  } catch (e) {
    yield put(firebaseActions.getBoards.fail(e));
  }
}

function* createBoard(action) {
  try {
    const data = yield call(
      firebaseApis.Boards.createBoard,
      action.payload.data,
    );
    yield put(firebaseActions.createBoard.success(data));
  } catch (e) {
    yield put(firebaseActions.createBoard.fail(e));
  }
}

function* mySaga() {
  yield takeLatest(firebaseActions.GET_BOARDS.REQUEST, fetchBoards);
  yield takeLatest(firebaseActions.CREATE_BOARD.REQUEST, createBoard);
}

export default mySaga;
